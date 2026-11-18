import type {Handler,Product} from '@/lib/model';import {products,reply,requireRole,text,fail,database,id,audit,all} from '@/lib/store';
export const handle:Handler=async({request,url,body,user})=>{
if(url.pathname==='/api/products'&&request.method==='GET'){return reply(await products());}
if(url.pathname==='/api/admin/summary'){requireRole(user,'admin');return reply({products:(await products(true)).length,requests:(await all('SELECT id FROM requests')).length,quotes:(await all('SELECT id FROM quotes')).length,orders:(await all('SELECT id FROM orders')).length});}
if(url.pathname==='/api/admin/products'){
requireRole(user,'admin');if(request.method==='GET')return reply(await products(true));
if(request.method==='POST'){
const pid=body.id||id();const slug=text(body.slug,100);if(!/^[a-z0-9-]+$/.test(slug))fail('Usá un identificador con letras minúsculas y guiones.');if(!['medicinal','cosmetico'].includes(body.line))fail('Línea inválida.');
const image=text(body.image,300);if(!/^\/products\/[a-z0-9-]+\.(?:svg|png)$/.test(image))fail('Seleccioná una imagen del catálogo.');
if(!Array.isArray(body.variants)||!body.variants.length||body.variants.length>12)fail('Agregá entre 1 y 12 presentaciones.');
if(body.published&&!body.approved)fail('Confirmá la revisión del contenido antes de publicarlo.');
const docUrl=String(body.documentUrl||'');if(docUrl&&!/^https:\/\/dasipa\.com\.ar\/.+\.pdf$/i.test(docUrl))fail('Usá un PDF del dominio oficial Dasipa.');
const product={id:pid,slug,name:text(body.name,140),line:body.line,category:text(body.category,80),description:text(body.description,2000),image,published:!!body.published,mock:!!body.mock,priceSource:body.priceSource,taxIncluded:false,illustrativeImage:true,variantMetadata:Object.fromEntries(body.variants.map((v:any)=>[v.id,{unitsPerPack:v.unitsPerPack,sourceDescription:v.sourceDescription}])),documents:docUrl?[{name:'Documento de producto',url:docUrl}]:[]};
const db=await database();const statements=[db.prepare('INSERT INTO products(id,slug,body) VALUES(?,?,?) ON CONFLICT(id) DO UPDATE SET slug=excluded.slug,body=excluded.body').bind(pid,slug,JSON.stringify(product))];
for(const v of body.variants){if(!Number.isSafeInteger(v.price)||v.price<0||!Number.isInteger(v.stock)||v.stock<0)fail('Precio o stock inválido.');const vid=v.id||id();const existing=await db.prepare('SELECT productId FROM skus WHERE id=?').bind(vid).first<any>();if(existing&&existing.productId!==pid)fail('Presentación de otro producto.',403);statements.push(db.prepare('INSERT INTO skus(id,productId,size,price,stock) VALUES(?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET size=excluded.size,price=excluded.price,stock=excluded.stock').bind(vid,pid,text(v.size,60),v.price,v.stock));}
await db.batch(statements);await audit(user!.id,'catalog.save',pid);return reply({id:pid});}}
};


