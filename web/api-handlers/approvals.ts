import type {Handler} from '@/lib/model';
import {all,one,run,reply,text,fail,requireRole,audit,notify,demoMode,id,passwordHash,session} from '@/lib/store';
export const handle:Handler=async({request,url,body,user})=>{
 if(url.pathname==='/api/demo/login'&&request.method==='POST'){
  if(!demoMode())fail('No disponible.',404);
  const profile=text(body.profile,20);if(!['admin','b2b','pending'].includes(profile))fail('Perfil inválido.');
  const mail=profile+'@demo.invalid';let account=await one('SELECT id FROM users WHERE email=?',mail);
  if(!account){const uid=id();await run('INSERT INTO users(id,email,name,company,password,role,status,verified) VALUES(?,?,?,?,?,?,?,1)',uid,mail,'Perfil de demostración','Droguería de ejemplo',await passwordHash(id()+id()),profile==='admin'?'admin':'b2b',profile==='pending'?'pending':'approved');account={id:uid};}
  return reply({ok:true},200,{'Set-Cookie':await session(account.id)});
 }
 if(url.pathname!=='/api/admin/accounts')return;
 const actor=requireRole(user,'admin');
 if(request.method==='GET')return reply({accounts:await all("SELECT id,email,name,company,taxId,status,verified FROM users WHERE role='b2b' ORDER BY company")});
 if(request.method==='PATCH'){
  const uid=text(body.id,100),status=text(body.status,20),reason=text(body.reason,1000);
  if(!['approved','rejected','suspended'].includes(status))fail('Estado inválido.');
  const account=await one("SELECT * FROM users WHERE id=? AND role='b2b'",uid);if(!account)fail('Cuenta inexistente.',404);
  if(status==='approved'&&!account.verified)fail('El correo debe estar verificado antes de aprobar.');
  await run('UPDATE users SET status=? WHERE id=?',status,uid);
  if(status!=='approved')await run('DELETE FROM sessions WHERE userId=?',uid);
  await audit(actor.id,'account:'+status+':'+reason,uid);await notify(account.email,'Actualización de cuenta',{status,reason});return reply({ok:true});
 }
};
