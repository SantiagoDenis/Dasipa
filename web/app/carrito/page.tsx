'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {Minus,Plus,Trash2,ShoppingBag,ArrowRight,ArrowLeft} from 'lucide-react';
import {api,readBag,saveBag} from '@/lib/client';
import {PageHead,money} from '@/components/dasipa-ui';

type BagLine={sku:string;quantity:number};
type Item=BagLine&{name:string;size:string;price:number;stock:number;image?:string;slug?:string;error?:string};
type Summary={items:Item[];subtotal:number;canCheckout:boolean};

function Quantity({value,max,name,onChange}:{value:number;max:number;name:string;onChange:(value:number)=>void}){
  const [draft,setDraft]=useState(String(value));
  useEffect(()=>setDraft(String(value)),[value]);
  function commit(){const n=Number(draft);const next=Number.isFinite(n)?Math.max(1,Math.min(max,Math.floor(n))):value;setDraft(String(next));if(next!==value)onChange(next);}
  return <div className="cart-quantity"><button type="button" aria-label={'Restar una unidad de '+name} disabled={value<=1} onClick={()=>onChange(value-1)}><Minus size={14}/></button><input aria-label={'Cantidad de '+name} type="number" inputMode="numeric" min={1} max={max} value={draft} onChange={e=>setDraft(e.target.value)} onBlur={commit} onKeyDown={e=>{if(e.key==='Enter')e.currentTarget.blur()}}/><button type="button" aria-label={'Sumar una unidad de '+name} disabled={value>=max} onClick={()=>onChange(value+1)}><Plus size={14}/></button></div>;
}

export default function Cart(){
  const [bag,setBag]=useState<BagLine[]>([]),[ready,setReady]=useState(false),[summary,setSummary]=useState<Summary|null>(null);
  const [error,setError]=useState(''),[resolvedKey,setResolvedKey]=useState(''),[retry,setRetry]=useState(0),[removed,setRemoved]=useState<BagLine|null>(null);
  const bagKey=JSON.stringify(bag),fresh=resolvedKey===bagKey,loading=ready&&!!bag.length&&!fresh&&!error;
  useEffect(()=>{setBag(readBag('dasipa-cart'));setReady(true);function sync(e:StorageEvent){if(e.key==='dasipa-cart')setBag(readBag('dasipa-cart'));}window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync)},[]);
  useEffect(()=>{let active=true;setError('');if(!ready||!bag.length)return;api<Summary>('/api/cart',{lines:bag}).then(x=>{if(active){setSummary(x);setResolvedKey(bagKey)}}).catch(e=>{if(active)setError(e.message)});return()=>{active=false}},[bagKey,ready,retry]);
  function persist(next:BagLine[]){setResolvedKey('');setError('');setBag(next);saveBag('dasipa-cart',next)}
  function change(sku:string,quantity:number){persist(bag.map(x=>x.sku===sku?{sku,quantity}:x))}
  function remove(line:BagLine){setRemoved(line);persist(bag.filter(x=>x.sku!==line.sku))}
  function undo(){if(removed){if(!bag.some(x=>x.sku===removed.sku))persist([...bag,removed]);setRemoved(null)}}
  return <div className="container section cart-page"><PageHead eyebrow="Cuidado personal" title="Tu selección" text="Un espacio para revisar cada detalle antes de continuar."/>
    {removed&&<div className="cart-feedback" role="status">Quitaste una presentación. <button type="button" onClick={undo}>Deshacer</button></div>}
    {!ready?<p role="status">Preparando tu carrito…</p>:!bag.length?<div className="cart-empty"><ShoppingBag size={42} strokeWidth={1}/><span className="eyebrow">TU RUTINA EMPIEZA ACÁ</span><h2>Encontrá tu próximo esencial.</h2><p>Todavía no agregaste productos a tu carrito.</p><Link className="button" href="/productos?line=cosmetico">Explorar cuidado personal <ArrowRight size={16}/></Link></div>:<div className="cart-layout">
      <section aria-label="Productos del carrito"><div className="cart-section-head"><span>{bag.reduce((n,x)=>n+x.quantity,0)} unidades · {bag.length} presentaciones</span><span>PRECIOS SIN IVA</span></div>
        {bag.map(line=>{const item=summary?.items.find(x=>x.sku===line.sku);return <article className="cart-item" key={line.sku}>
          <div className="cart-image">{item?.image?<img src={item.image} alt={'Envase genérico ilustrativo de '+item.name} width={160} height={180}/>:<ShoppingBag size={28} strokeWidth={1}/>}</div>
          <div className="cart-item-info"><span className="eyebrow">CUIDADO PERSONAL</span><h2>{item?.slug?<Link href={'/productos/'+item.slug}>{item.name}</Link>:item?.name||'Cargando producto…'}</h2><p>{item?.size}</p><small>{line.sku}</small>{item&&<p className="cart-unit-price">{money(item.price)} <span>/ presentación · sin IVA</span></p>}
            <div className="cart-item-actions"><Quantity value={line.quantity} max={Math.max(1,Math.min(999,item?.stock??999))} name={item?.name||line.sku} onChange={n=>change(line.sku,n)}/><button className="cart-remove" type="button" aria-label={'Quitar '+(item?.name||line.sku)} onClick={()=>remove(line)}><Trash2 size={15}/><span>Quitar</span></button></div>
            {fresh&&item?.error&&<p className="cart-line-error" role="alert">{item.error}</p>}
          </div><strong className="cart-line-total">{item?money(item.price*line.quantity):'—'}</strong>
        </article>})}
        <div className="cart-bottom"><Link href="/productos?line=cosmetico"><ArrowLeft size={15}/> Seguir explorando</Link><p>Fotografías genéricas ilustrativas.</p></div>
      </section>
      <aside className="cart-summary"><span className="eyebrow">EL SIGUIENTE PASO</span><h2>Tu pedido, en detalle.</h2><div aria-live="polite" aria-busy={loading}>
        {error?<p className="cart-line-error" role="alert">{error} <button type="button" className="text-link" onClick={()=>{setError('');setRetry(x=>x+1)}}>Reintentar</button></p>:loading?<p className="cart-updating">Actualizando tu selección…</p>:summary&&<><div className="cart-summary-row"><span>Productos</span><span>{money(summary.subtotal)}</span></div><div className="cart-summary-row"><span>Envío</span><span>A calcular</span></div><div className="cart-subtotal"><span>Subtotal sin IVA</span><strong>{money(summary.subtotal)}</strong></div></>}
        <p className="cart-tax-note">Los precios de la lista no incluyen IVA. No se agrega IVA en esta demostración. El envío se calcula en el próximo paso.</p>
      </div>
      {fresh&&summary?.canCheckout&&!error?<Link className="button cart-checkout" href="/checkout">Continuar con mi pedido <ArrowRight size={16}/></Link>:<button className="button cart-checkout" disabled>{loading?'Actualizando…':'Revisá tu selección'}</button>}
      <p className="cart-source">Lista Córdoba · 08/09/2026<br/>Importes expresados en pesos argentinos.</p><div className="cart-demo-note">Estás en una demostración. El stock, los envíos y el pago son simulados; no se generan cargos reales.</div><Link className="cart-help" href="/contacto">¿Necesitás ayuda con tu selección?</Link>
      </aside></div>}
  </div>;
}
