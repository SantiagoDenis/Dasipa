import type {Handler} from '@/lib/model';import {lines,one,database,id,now,text,email,reply,fail,demoMode,digest,notify} from '@/lib/store';import {shipping} from '@/lib/shipping';import {authorizedOrder,publicOrder,finishPayment,expireOrders} from '@/lib/orders';
export const handle:Handler=async({request,url,body,user})=>{
 if(!['/api/orders','/api/order/status','/api/demo/payment'].includes(url.pathname)||request.method!=='POST')return;
 await expireOrders();
 if(url.pathname==='/api/orders'){
  if(!demoMode())fail('La venta online todavía no está habilitada.',503);if(!body.consent)fail('Aceptá las condiciones.');
  const key=text(body.requestKey,100);if(!/^[a-f0-9-]{36}$/.test(key))fail('Identificador inválido.');const token=await digest('order-access:'+key),existing=await one('SELECT id FROM orders WHERE requestKey=?',key);if(existing)return reply({id:existing.id,token});
  const items=await lines(body.lines,'public'),subtotal=items.reduce((n,x)=>n+x.price*x.quantity,0),delivery=shipping(body.postcode,subtotal);
  if(body.expectedTotal!==delivery.total)fail('Los importes cambiaron. Volvé a calcular el envío.',409);
  const contact={name:text(body.name,120),email:email(body.email),address:text(body.address,500),phone:text(body.phone,40)};
  const orderId=id(),db=await database(),snapshot={items,subtotal,shipping:delivery,contact,total:delivery.total,mock:true};
  const statements=[db.prepare('INSERT INTO orders(id,userId,accessHash,requestKey,body,created,expires) VALUES(?,?,?,?,?,?,?)').bind(orderId,user?.id||null,await digest(token),key,JSON.stringify(snapshot),now(),Date.now()+1800000),...items.map(x=>db.prepare('UPDATE skus SET stock=stock-? WHERE id=?').bind(x.quantity,x.sku))];
  try{await db.batch(statements)}catch{const retry=await one('SELECT id FROM orders WHERE requestKey=?',key);if(retry)return reply({id:retry.id,token});fail('No se pudo reservar el stock. Revisá el carrito.',409)}
  await notify(contact.email,'Pedido de demostración creado',{id:orderId,accessCode:token});return reply({id:orderId,token},201);
 }
 const order=await authorizedOrder(text(body.id,100),body.token,user);
 if(url.pathname==='/api/order/status')return reply({order:publicOrder(order)});
 if(!demoMode())fail('No disponible.',404);const status=text(body.status,20);if(!['approved','rejected','pending','cancelled'].includes(status))fail('Estado inválido.');if(order.paymentStatus!=='pending')return reply({order:publicOrder(order)});
 if(status!=='pending')await finishPayment(order.id,status as 'approved'|'rejected'|'cancelled','demo:'+order.id+':'+status);
 return reply({order:publicOrder(await one('SELECT * FROM orders WHERE id=?',order.id))});
};
