import {env} from 'cloudflare:workers';
import type {Product,User,Line} from './model';
export const demoMode = () => import.meta.env.DEV || (env as any).DEMO_MODE === 'true';
let initialized:Promise<void>|undefined;
function binding():D1Database { const value=(env as any).DB; if(!value)throw new Error('DB binding unavailable'); return value; }
export async function database(){const db=binding();if(!initialized)initialized=initialize(db).catch(e=>{initialized=undefined;throw e});await initialized;return db;}
async function initialize(db:D1Database){
await db.exec(`CREATE TABLE IF NOT EXISTS products(id TEXT PRIMARY KEY,slug TEXT UNIQUE NOT NULL,body TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS skus(id TEXT PRIMARY KEY,productId TEXT NOT NULL,size TEXT NOT NULL,price INTEGER NOT NULL CHECK(price>=0),stock INTEGER NOT NULL CHECK(stock>=0));
CREATE TABLE IF NOT EXISTS users(id TEXT PRIMARY KEY,email TEXT UNIQUE NOT NULL,name TEXT NOT NULL,company TEXT NOT NULL DEFAULT '',taxId TEXT NOT NULL DEFAULT '',password TEXT NOT NULL,role TEXT NOT NULL,status TEXT NOT NULL,verified INTEGER NOT NULL DEFAULT 0);
CREATE TABLE IF NOT EXISTS sessions(id TEXT PRIMARY KEY,userId TEXT NOT NULL,expires INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS tokens(id TEXT PRIMARY KEY,userId TEXT NOT NULL,kind TEXT NOT NULL,expires INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS requests(id TEXT PRIMARY KEY,kind TEXT NOT NULL,body TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'recibida',created TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS quotes(id TEXT PRIMARY KEY,userId TEXT NOT NULL,requestKey TEXT UNIQUE NOT NULL,body TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'recibida',response TEXT NOT NULL DEFAULT '',note TEXT NOT NULL DEFAULT '',created TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS orders(id TEXT PRIMARY KEY,userId TEXT,accessHash TEXT NOT NULL,requestKey TEXT UNIQUE NOT NULL,body TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pendiente',paymentStatus TEXT NOT NULL DEFAULT 'pending',tracking TEXT NOT NULL DEFAULT '',created TEXT NOT NULL,expires INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS payment_events(id TEXT PRIMARY KEY,orderId TEXT NOT NULL,status TEXT NOT NULL,created TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS outbox(id TEXT PRIMARY KEY,recipient TEXT NOT NULL,subject TEXT NOT NULL,body TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',created TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS audit(id TEXT PRIMARY KEY,actor TEXT NOT NULL,action TEXT NOT NULL,entity TEXT NOT NULL,created TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS events(id TEXT PRIMARY KEY,name TEXT NOT NULL,entity TEXT NOT NULL DEFAULT '',created TEXT NOT NULL);`);
if(demoMode()){
const modules=import.meta.glob('../content/mock-products.ts',{eager:true}) as Record<string,{mockProducts:Product[]}>;
for(const mod of Object.values(modules))for(const p of mod.mockProducts){
await db.prepare('INSERT OR IGNORE INTO products(id,slug,body) VALUES(?,?,?)').bind(p.id,p.slug,JSON.stringify({...p,variants:undefined})).run();
for(const v of p.variants)await db.prepare('INSERT OR IGNORE INTO skus(id,productId,size,price,stock) VALUES(?,?,?,?,?)').bind(v.id,p.id,v.size,v.price,v.stock).run();
}}
}
export async function all<T=any>(sql:string,...args:any[]):Promise<T[]>{return (await (await database()).prepare(sql).bind(...args).all<T>()).results;}
export async function one<T=any>(sql:string,...args:any[]):Promise<T|null>{return (await database()).prepare(sql).bind(...args).first<T>();}
export async function run(sql:string,...args:any[]){return (await database()).prepare(sql).bind(...args).run();}
export const id=()=>crypto.randomUUID();
export const now=()=>new Date().toISOString();
export function fail(message:string,status=400):never{throw Object.assign(new Error(message),{status});}
export function reply(value:unknown,status=200,headers:Record<string,string>={}){return Response.json(value,{status,headers:{'Cache-Control':'no-store',...headers}});}
export function text(value:unknown,max=500){if(typeof value!=='string'||!value.trim()||value.length>max)fail('Completá los campos requeridos.');return value.trim();}
export function email(value:unknown){const v=text(value,254).toLowerCase();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))fail('Ingresá un correo válido.');return v;}
export async function digest(value:string){return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value)))).map(x=>x.toString(16).padStart(2,'0')).join('');}
export async function passwordHash(value:string,salt=id()){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(value),'PBKDF2',false,['deriveBits']);const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:new TextEncoder().encode(salt),iterations:100000,hash:'SHA-256'},key,256);return salt+':'+Array.from(new Uint8Array(bits)).map(x=>x.toString(16).padStart(2,'0')).join('');}
export async function currentUser(request:Request):Promise<User|null>{const sid=request.headers.get('cookie')?.match(/(?:^|;\s*)dasipa_session=([^;]+)/)?.[1];if(!sid)return null;return one<User>('SELECT u.id,u.email,u.name,u.company,u.taxId,u.role,u.status,u.verified FROM users u JOIN sessions s ON s.userId=u.id WHERE s.id=? AND s.expires>?',await digest(sid),Date.now());}
export function requireRole(user:User|null,role:'admin'|'b2b'){if(!user)fail('Iniciá sesión para continuar.',401);if(user.status!=='approved'||!user.verified||(user.role!==role&&user.role!=='admin'))fail('Tu cuenta no tiene acceso a esta operación.',403);return user;}
export async function session(userId:string){const raw=id()+id();await run('INSERT INTO sessions(id,userId,expires) VALUES(?,?,?)',await digest(raw),userId,Date.now()+86400000);return 'dasipa_session='+raw+'; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400'+(demoMode()?'':'; Secure');}
export async function audit(actor:string,action:string,entity:string){await run('INSERT INTO audit VALUES(?,?,?,?,?)',id(),actor,action,entity,now());}
export async function notify(recipient:string,subject:string,body:unknown){await run('INSERT INTO outbox(id,recipient,subject,body,created) VALUES(?,?,?,?,?)',id(),recipient,subject,JSON.stringify(body),now());}
export async function products(includeDraft=false):Promise<Product[]>{const rows=await all('SELECT * FROM products');const variants=await all('SELECT * FROM skus');return rows.map(r=>({...JSON.parse(r.body),variants:variants.filter(v=>v.productId===r.id)})).filter(p=>includeDraft||p.published);}
export async function lines(input:unknown,channel:'public'|'b2b'):Promise<Line[]>{if(!Array.isArray(input)||input.length===0||input.length>50)fail('Agregá entre 1 y 50 productos.');const catalog=await products();const seen=new Set<string>();return input.map(raw=>{if(!raw||typeof raw.sku!=='string'||!Number.isInteger(raw.quantity)||raw.quantity<1||raw.quantity>999||seen.has(raw.sku))fail('Revisá las cantidades y presentaciones.');seen.add(raw.sku);const p=catalog.find(p=>p.variants.some(v=>v.id===raw.sku));if(!p||channel==='public'&&p.line!=='cosmetico')fail('Producto no habilitado para este canal.');const v=p.variants.find(v=>v.id===raw.sku)!;if(channel==='public'&&v.stock<raw.quantity)fail('Stock insuficiente para '+p.name,409);return {sku:v.id,quantity:raw.quantity,name:p.name,size:v.size,price:v.price};});}

