import {products} from '@/lib/store';import {ProductDetail} from '@/components/product-detail';import {notFound} from 'next/navigation';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=(await products()).find(x=>x.slug===slug);return {title:p?.name||'Producto no encontrado',description:p?.description};}
export default async function Detail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=(await products()).find(x=>x.slug===slug);if(!p)notFound();return <ProductDetail product={p}/>}


