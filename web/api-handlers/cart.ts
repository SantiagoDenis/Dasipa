import type {Handler} from '@/lib/model';
import {products,reply,fail} from '@/lib/store';

export const handle:Handler=async({request,url,body})=>{
  if(url.pathname!=='/api/cart'||request.method!=='POST')return;
  if(!Array.isArray(body.lines)||!body.lines.length||body.lines.length>50)fail('Agregá entre 1 y 50 presentaciones.');
  const catalog=await products(true),seen=new Set<string>();
  const items=body.lines.map((raw:any)=>{
    if(!raw||typeof raw.sku!=='string'||!Number.isInteger(raw.quantity)||raw.quantity<1||raw.quantity>999||seen.has(raw.sku))fail('Revisá las cantidades y presentaciones.');
    seen.add(raw.sku);
    const p=catalog.find(p=>p.variants.some(v=>v.id===raw.sku));
    const v=p?.variants.find(v=>v.id===raw.sku);
    // Retired or restricted products remain removable, without exposing unpublished content.
    if(!p?.published||!v)return {sku:raw.sku,quantity:raw.quantity,name:'Producto no disponible',size:'',price:0,stock:0,error:'Esta presentación ya no está en el catálogo. Quitala para continuar.'};
    return {sku:v.id,quantity:raw.quantity,name:p.name,size:v.size,price:v.price,image:p.image,slug:p.slug,stock:v.stock,
      error:p.line!=='cosmetico'?'Disponible únicamente para droguerías. Quitalo del carrito público.':v.stock<raw.quantity?`Disponibilidad de demostración: ${v.stock}. Ajustá la cantidad o quitá el producto.`:undefined};
  });
  return reply({items,subtotal:items.reduce((sum,x)=>sum+x.price*x.quantity,0),canCheckout:items.every(x=>!x.error)});
};
