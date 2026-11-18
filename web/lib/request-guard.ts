import {database,digest,fail} from './store';
export async function guardRequest(request:Request){
 if(request.method==='GET')return;
 // cf-connecting-ip is supplied by the trusted Cloudflare edge in deployment.
 const ip=request.headers.get('cf-connecting-ip')||'local',window=Math.floor(Date.now()/60000),key=await digest(ip+':'+window);
 const db=await database();await db.exec('CREATE TABLE IF NOT EXISTS rate_limits(id TEXT PRIMARY KEY,count INTEGER NOT NULL,expires INTEGER NOT NULL);');
 await db.prepare('DELETE FROM rate_limits WHERE expires<?').bind(Date.now()).run();
 const row=await db.prepare('INSERT INTO rate_limits VALUES(?,1,?) ON CONFLICT(id) DO UPDATE SET count=count+1 RETURNING count').bind(key,(window+2)*60000).first<{count:number}>();
 if(row&&row.count>60)fail('Demasiados intentos. Esperá un minuto y volvé a intentar.',429);
}
