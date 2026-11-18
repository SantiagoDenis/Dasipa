# Lista Córdoba: importación del catálogo

Fuente proporcionada por el usuario: LISTA CORDOBA.pdf, dos páginas, fecha 08/09/2026. Se comprobaron visualmente ambas tablas. Contiene 58 códigos únicos agrupados en 29 productos; total de control de los 58 precios: 150081,23 ARS. Todos los importes se conservan en centavos enteros, sin IVA, sin redondear a pesos completos. No se multiplican por UN X PACK.

`web/content/cordoba-prices.json` conserva descripción original, SKU, precio neto, unidades por pack y página. `web/scripts/import-cordoba.py` permite repetir la extracción con pypdf y falla ante filas no interpretadas o duplicadas. `cordoba-products.ts` organiza las presentaciones. Las abreviaturas EST y las cantidades de crema de ordeñe sin unidad se muestran explícitamente sin inventar gramos. Manteca de cacao conserva la presentación de 20 unidades de 3,5 g.

Una migración transaccional importa la lista una sola vez y retira los ocho productos mock sin eliminar sus SKU ni los snapshots de pedidos/cotizaciones. No sobreescribe ediciones administrativas posteriores. El stock sigue siendo ilustrativo (24 por SKU en demo, 0 fuera de demo); las unidades por pack no son stock.

La lista no acredita clasificación sanitaria. Se conserva el canal cosmético de aceite de almendras y óleo calcáreo del prototipo, y se presentan manteca de cacao y crema de ordeñe en cuidado personal; los restantes productos mantienen el canal profesional. Estas asignaciones requieren validación antes de producción. El checkout sigue siendo un simulador sin ventas reales.

## Fotografías

Generadas con la herramienta integrada image_gen, no fotografías del fabricante. Cuatro familias compartidas por los productos: botella, pote, sobre y bálsamo. Archivos locales `web/public/products/catalog-{bottle,jar,sachet,balm}.png`. Prompt común: fotografía de estudio fotorrealista de envase genérico, fondo marfil, luz lateral suave, tapa azul oscuro/etiqueta azul claro sin texto ni marca, composición cuadrada minimalista. Se varió la forma del envase por familia. Cada ficha identifica que la imagen es genérica.
