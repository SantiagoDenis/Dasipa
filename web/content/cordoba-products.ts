import type {Product} from '@/lib/model';
import priceList from './cordoba-prices.json';

// Display names group related SKUs; original descriptions remain in the source JSON.
const groups: [string, string, string, string, string[]][] = [
  ['aceite-almendras','Aceite de almendras puro','Aceites','bottle',['146','147']],
  ['aceite-ricino','Aceite de ricino puro','Aceites','bottle',['148']],
  ['acido-borico','Ácido bórico','Polvos y sales','sachet',['002']],
  ['agua-blanca','Agua blanca','Soluciones','bottle',['058']],
  ['agua-alibour',"Agua D’Alibour",'Soluciones','bottle',['088','053']],
  ['agua-oxigenada','Agua oxigenada 10 vol.','Soluciones','bottle',['059','060','061','123']],
  ['alcohol-boricado','Alcohol boricado','Soluciones','bottle',['089']],
  ['bicarbonato-sodio','Bicarbonato de sodio','Polvos y sales','sachet',['057','009','030','122','011']],
  ['cloruro-magnesio','Cloruro de magnesio','Polvos y sales','sachet',['056','129','017']],
  ['cloroxilenol','Cloroxilenol','Soluciones','bottle',['109','124']],
  ['crema-base','Crema base hidrosoluble','Cremas y bases','jar',['072']],
  ['crema-oxidante-20','Crema oxidante 20 vol.','Cremas y bases','bottle',['069']],
  ['crema-oxidante-30','Crema oxidante 30 vol.','Cremas y bases','bottle',['118']],
  ['diadermina','Diadermina','Cremas y bases','jar',['097','119']],
  ['gel-base','Gel base','Cremas y bases','jar',['130','131','132','133']],
  ['glicerina','Glicerina','Soluciones','bottle',['149','018']],
  ['glucosa','Glucosa','Polvos y sales','sachet',['120','127']],
  ['limonada-roge','Limonada Rogé adulto','Polvos y sales','sachet',['044']],
  ['oleo-calcareo','Linimento óleo calcáreo','Cuidado personal','bottle',['054','055','063']],
  ['pasta-al-agua','Pasta al agua','Pastas y ungüentos','jar',['150']],
  ['pasta-lassar','Pasta Lassar','Pastas y ungüentos','jar',['082','111','083']],
  ['solucion-fisiologica','Solución fisiológica','Soluciones','bottle',['025']],
  ['sulfatiazol','Sulfatiazol talquera','Polvos y sales','bottle',['098']],
  ['sulfato-magnesio','Sulfato de magnesio','Polvos y sales','sachet',['029']],
  ['talco-mentolado','Talco mentolado','Polvos y sales','bottle',['034']],
  ['vaselina-liquida','Vaselina líquida medicinal','Línea profesional','bottle',['051','039','040','038']],
  ['vaselina-solida','Vaselina sólida medicinal','Línea profesional','jar',['041','126','042']],
  ['manteca-cacao','Manteca de cacao','Cuidado personal','balm',['010']],
  ['crema-ordene','Crema de ordeñe con aloe y vitaminas','Cuidado personal','jar',['007','008','009']],
];

const presentations:Record<string,string> = {
  '057':'Pote · 250 g','009':'25 g','030':'Sobre · 100 g','122':'100 EST (según lista)',
  '011':'250 EST (según lista)','056':'Frasco · 33 g','129':'Sobre · 33 g',
  '097':'E. amonio · 1000 g','149':'FA VII · 100 g','018':'Pura · 1000 g',
  '120':'Frasco · 75 g','127':'Sobre · 75 g',
};
const cosmetics = new Set(['aceite-almendras','oleo-calcareo','manteca-cacao','crema-ordene']);
export const cordobaProducts:Product[] = groups.map(([slug,name,category,photo,codes])=>{
  const productId='cordoba-'+slug;
  const variants=codes.map(code=>{
    const prefix=['manteca-cacao','crema-ordene'].includes(slug)?'D090-003-':'D092-001-';
    const row=priceList.rows.find(r=>r.sku===prefix+code);
    if(!row)throw new Error('Missing source SKU: '+prefix+code);
    let size=presentations[code]||row.description.split(/x\s*(?=\d)/i).at(-1)!.trim().replace(/cc\.?/gi,'ml').replace(/\bGS?\b/gi,'g').replace(/ML/g,'ml').replace(/(\d)(ml|g)/g,'$1 $2');
    if(slug==='manteca-cacao')size='20 unidades × 3,5 g';
    if(slug==='crema-ordene')size=code==='007'?'120 (unidad no indicada)':code==='008'?'250 (unidad no indicada)':'500 (unidad no indicada)';
    return {id:row.sku,productId,size,price:row.netCents,stock:24,unitsPerPack:row.unitsPerPack,sourceDescription:row.description};
  });
  return {id:productId,slug,name,line:cosmetics.has(slug)?'cosmetico':'medicinal',category,
    description:`${name}, disponible en las presentaciones de la lista Córdoba. Consultá al laboratorio por información técnica y disponibilidad.`,
    image:`/products/catalog-${photo}.png`,published:true,mock:false,documents:[],variants,
    priceSource:'Lista Córdoba · 08/09/2026',taxIncluded:false,illustrativeImage:true};
});

