import type {Handler} from '@/lib/model';
import {currentUser,demoMode,reply,run,digest,fail} from '@/lib/store';
import {guardRequest} from '@/lib/request-guard';
const modules=import.meta.glob('../../../api-handlers/*.ts',{eager:true}) as Record<string,{handle?:Handler}>;
async function handle(request:Request){try{
const url=new URL(request.url);let body:any={};
await guardRequest(request);
if(request.method!=='GET'){
if(request.headers.get('origin')!==url.origin)fail('Origen de solicitud no permitido.',403);
if(!(request.headers.get('content-type')||'').includes('application/json'))fail('Formato no permitido.',415);
const raw=await request.text();if(raw.length>65536)fail('Solicitud demasiado grande.',413);try{body=JSON.parse(raw)}catch{fail('Solicitud inválida.')}
if(!body||typeof body!=='object'||Array.isArray(body))fail('Solicitud inválida.');
}
const user=await currentUser(request);
if(url.pathname==='/api/session')return reply({user,demo:demoMode()});
if(url.pathname==='/api/logout'&&request.method==='POST'){const sid=request.headers.get('cookie')?.match(/(?:^|;\s*)dasipa_session=([^;]+)/)?.[1];if(sid)await run('DELETE FROM sessions WHERE id=?',await digest(sid));return reply({ok:true},200,{'Set-Cookie':'dasipa_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0'});}
for(const mod of Object.values(modules))if(mod.handle){const result=await mod.handle({request,url,body,user});if(result)return result;}
return reply({error:'Recurso no encontrado.'},404);
}catch(e:any){return reply({error:e.status?e.message:'No pudimos completar la operación. Intentá nuevamente.'},e.status||500);}}
export {handle as GET,handle as POST,handle as PATCH};

