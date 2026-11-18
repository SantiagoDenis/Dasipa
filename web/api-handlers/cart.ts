import type {Handler} from '@/lib/model';import {lines,reply} from '@/lib/store';
export const handle:Handler=async({request,url,body})=>{if(url.pathname!=='/api/cart'||request.method!=='POST')return;const items=await lines(body.lines,'public');return reply({items,subtotal:items.reduce((sum,x)=>sum+x.price*x.quantity,0)});};
