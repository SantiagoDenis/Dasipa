'use client';
import {useEffect,useState} from 'react';
import type {Product} from '@/lib/model';
import {money,Notice} from './dasipa-ui';
import {addBag,useData} from '@/lib/client';

export function ProductDetail({product:p}:{product:Product}) {
  const [sku,setSku]=useState(p.variants[0]?.id),[message,setMessage]=useState(''),[back,setBack]=useState('/productos');
  const {data}=useData<any>('/api/session');
  useEffect(()=>{const q=new URLSearchParams(location.search).get('volver');if(q)setBack('/productos?'+q)},[]);
  const variant=p.variants.find(v=>v.id===sku);
  const commercial=data?.user?.verified&&data?.user?.status==='approved'&&['b2b','admin'].includes(data.user.role);
  return <><div className="breadcrumb" style={{marginTop:35}}><a href={back}>← Volver al catálogo</a> / {p.name}</div>
    <section className="detail section"><div className="product-media catalog-photo"><span className="tag">FOTO GENÉRICA · ILUSTRATIVA</span><img src={p.image} alt={'Envase genérico ilustrativo de '+p.name} width={600} height={600}/></div>
      <div><span className="eyebrow">{p.line==='medicinal'?'CANAL DROGUERÍAS':'CUIDADO PERSONAL'} / {p.category}</span><h1>{p.name}</h1><p className="muted">{p.description}</p><h3>Elegí una presentación</h3>
        <div role="group" aria-label="Presentaciones">{p.variants.map(v=><button className={'option'+(v.id===sku?' selected':'')} key={v.id} aria-pressed={sku===v.id} onClick={()=>{setSku(v.id);setMessage('')}}>{v.size}</button>)}</div>
        {variant&&<><div className="detail-price"><p className="price">{money(variant.price)}</p><span>Sin IVA · precio por presentación</span></div><p className="muted">Código: {variant.id}<br/>{variant.unitsPerPack} unidades por pack de distribución</p></>}
        {p.line==='cosmetico'&&variant?<><p className="muted">{variant.stock?'Disponible en la demostración':'Sin disponibilidad'}</p><button className="primary" disabled={!variant.stock} onClick={()=>{addBag('dasipa-cart',variant.id);setMessage('Agregado a tu carrito.')}}>Agregar al carrito ↗</button>{message&&<Notice>{message} <a href="/carrito">Ver carrito →</a></Notice>}</>:<><Notice>Este producto se gestiona a través del canal de droguerías. No tiene compra pública.</Notice>{commercial?<button className="primary" onClick={()=>{if(variant){addBag('dasipa-quote',variant.id);setMessage('Agregado a tu cotización.')}}}>Agregar a cotización ↗</button>:<a className="button" href="/droguerias">Solicitar acceso comercial ↗</a>}{message&&<Notice>{message} <a href="/cotizar">Ver cotización →</a></Notice>}</>}
        <div className="rows"><details><summary>Precio y presentación</summary><p>{p.priceSource||'Lista Córdoba · 08/09/2026'}. Los precios no incluyen IVA. La cantidad por pack es informativa y no multiplica automáticamente el precio mostrado. Stock y operaciones de demostración.</p>{variant?.sourceDescription&&<p>Descripción original: {variant.sourceDescription}</p>}</details><details><summary>Documentación e imágenes</summary><p>La fotografía representa un tipo de envase y no el packaging real de Dasipa.</p>{p.documents.map(d=><p key={d.url}><a href={d.url} target="_blank" rel="noreferrer">{d.name} · PDF ↗</a></p>)}<p><a href={'/contacto?area=calidad&producto='+encodeURIComponent(p.name)}>Solicitar información técnica →</a></p></details><details><summary>Compra y atención</summary><p><a href="/condiciones">Condiciones de la demostración</a> · <a href={'/contacto?producto='+encodeURIComponent(p.name)}>Consultar este producto</a></p></details></div>
      </div></section></>;
}
