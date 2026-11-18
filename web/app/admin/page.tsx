'use client';import {PageHead,AdminNav,Notice} from '@/components/dasipa-ui';import {useData} from '@/lib/client';
export default function Admin(){const {data,error}=useData<any>('/api/admin/summary');return <><PageHead title="El laboratorio, en un vistazo." eyebrow="ADMINISTRACIÓN"/><AdminNav/>{error&&<Notice error>{error} <a href="/cuenta">Ingresar</a></Notice>}{data&&<div className="grid four">{[['products','Productos'],['requests','Consultas'],['quotes','Cotizaciones'],['orders','Pedidos']].map(([k,v])=><div className="card" key={k}><span className="eyebrow">{v}</span><div className="dashboard-stat">{data[k]}</div></div>)}</div>}</>}


