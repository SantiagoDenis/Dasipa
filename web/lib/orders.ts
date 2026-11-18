import {all,one,database,digest,fail,id,now,notify} from './store';import type {User,Line} from './model';
export async function authorizedOrder(orderId:string,token:unknown,user:User|null){const order=await one('SELECT * FROM orders WHERE id=?',orderId);if(!order)fail('Pedido no disponible.',404);if(!(user&&user.id===order.userId)&&!(typeof token==='string'&&await digest(token)===order.accessHash))fail('Ingresá el código de acceso a este pedido.',403);return order;}
export function publicOrder(order:any){return {id:order.id,body:JSON.parse(order.body),status:order.status,paymentStatus:order.paymentStatus,tracking:order.tracking,created:order.created,expires:order.expires};}
export async function finishPayment(orderId:string,status:'approved'|'rejected'|'cancelled'|'expired',eventId:string){
 const order=await one('SELECT * FROM orders WHERE id=?',orderId);if(!order)fail('Pedido inexistente.',404);const db=await database(),statements=[];
 if(status!=='approved')for(const item of JSON.parse(order.body).items as Line[])statements.push(db.prepare("UPDATE skus SET stock=stock+? WHERE id=? AND EXISTS(SELECT 1 FROM orders WHERE id=? AND paymentStatus='pending')").bind(item.quantity,item.sku,orderId));
 statements.push(db.prepare("UPDATE orders SET paymentStatus=?,status=? WHERE id=? AND paymentStatus='pending'").bind(status,status==='approved'?'pagado':'cancelado',orderId));
 statements.push(db.prepare('INSERT OR IGNORE INTO payment_events VALUES(?,?,?,?)').bind(eventId,orderId,status,now()));
 await db.batch(statements);
 if(order.paymentStatus==='pending')await notify(JSON.parse(order.body).contact.email,'Estado de pedido',{id:orderId,status});
}
export async function expireOrders(){const expired=await all("SELECT id FROM orders WHERE paymentStatus='pending' AND expires<?",Date.now());for(const order of expired)await finishPayment(order.id,'expired','expiration:'+order.id);}
