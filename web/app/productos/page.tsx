import {PageHead} from '@/components/dasipa-ui';import {CatalogList} from '@/components/catalog-list';import {products} from '@/lib/store';
export const metadata={title:'Productos medicinales y cosméticos',description:'Explorá líneas, presentaciones y opciones de consulta de Dasipa.'};
export default async function Catalog(){const data=await products();const safe=data;return <><PageHead title="Elegí cómo cuidarte." eyebrow="NUESTROS PRODUCTOS">Lista Córdoba · 08/09/2026. Precios en pesos argentinos, sin IVA. Fotografías genéricas ilustrativas.</PageHead><CatalogList products={safe}/></>}


