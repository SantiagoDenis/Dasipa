import type {Handler} from '@/lib/model';import {id,now,run,reply,text,email,fail,notify,demoMode,all,requireRole,audit} from '@/lib/store';
export const handle:Handler=async({request,url,body,user})=>{
if(url.pathname==='/api/inquiries'&&request.method==='POST'){
if(body.website)fail('No pudimos procesar la consulta.');if(!body.consent)fail('Aceptá el tratamiento de datos.');
const kind=['ventas','calidad','fabricacion'].includes(body.kind)?body.kind:'ventas';const data={name:text(body.name,120),email:email(body.email),company:String(body.company||'').slice(0,200),phone:String(body.phone||'').slice(0,60),message:text(body.message,3000),product:String(body.product||'').slice(0,200),productType:kind==='fabricacion'?text(body.productType||'A definir',200):'',volume:kind==='fabricacion'?text(body.volume||'A definir',120):''};
const key='C-'+id();await run('INSERT INTO requests(id,kind,body,created) VALUES(?,?,?,?)',key,kind,JSON.stringify(data),now());await notify('commercial-queue',kind,{reference:key});return reply({id:key,demo:demoMode()},201);
}
if(url.pathname==='/api/admin/inquiries'){requireRole(user,'admin');if(request.method==='GET'){const rows=await all('SELECT * FROM requests ORDER BY created DESC');return reply(rows.map(x=>({...x,body:JSON.parse(x.body)})));}if(request.method==='PATCH'){if(!['recibida','en revision','respondida','cerrada'].includes(body.status))fail('Estado inválido.');await run('UPDATE requests SET status=? WHERE id=?',body.status,text(body.id));await audit(user!.id,'inquiry.status',body.id);return reply({ok:true});}}
};

