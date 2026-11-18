import {PageHead} from '@/components/dasipa-ui';import {CatalogList} from '@/components/catalog-list';import {products} from '@/lib/store';
export const metadata={title:'Productos medicinales y cosméticos',description:'Explorá líneas, presentaciones y opciones de consulta de Dasipa.'};
export default async function Catalog(){const data=await products();const safe=data.map(p=>({...p,variants:p.variants.map(v=>({...v,price:p.line==='medicinal'?0:v.price}))}));return <><PageHead title="Elegí cómo cuidarte." eyebrow="NUESTROS PRODUCTOS">Descubrí nuestras líneas de cuidado personal y el catálogo medicinal para droguerías.</PageHead><CatalogList products={safe}/></>}

