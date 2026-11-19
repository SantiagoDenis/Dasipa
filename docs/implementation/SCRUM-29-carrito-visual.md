# SCRUM-29 · Carrito visual

El carrito muestra fotografías genéricas, nombre, presentación, código, precio unitario y subtotal por producto. Incluye controles de cantidad, eliminación con deshacer, estado vacío y resumen adaptable a móvil. Conserva el carrito en el navegador y sincroniza cambios entre pestañas.

La API devuelve incidencias por presentación para permitir quitar productos retirados o corregir cantidades. El checkout permanece deshabilitado durante la actualización o cuando hay incidencias; la creación de pedidos conserva la validación estricta de canal, precios y disponibilidad en servidor.

Los precios son los de la lista Córdoba del 08/09/2026, sin IVA. Por indicación del usuario no se calcula ni agrega IVA. Catálogo, detalle, carrito, checkout, pago y condiciones informan esta política. Fotografías ilustrativas compartidas por tipo de envase; stock, envío y pago siguen siendo de demostración. La clasificación comercial requiere validación de Dasipa antes de habilitar ventas reales.

## Verificación

- TypeScript: `npx --no-install tsc --noEmit`, correcto.
- Compilación: `npm run build`, correcta. Advertencia preexistente sobre la convención middleware de Vinext.
- Navegador: catálogo de 29 productos, detalle con precio $994,65; dos unidades suman $1.989,30. Quitar muestra carrito vacío y deshacer recupera las dos unidades.
- Vista móvil de 390 px: imagen, cantidad y resumen se disponen en una columna, sin desbordes visibles.
- Checkout con código postal de demostración 1000: $1.989,30 de productos + $4.500,00 de envío = $6.489,30, expresamente sin IVA.
- No se agregaron tests automatizados, según lo solicitado.

## Ramas

`feature_SCRUM-24_catalogo_cordoba` contiene la importación del catálogo; `feature_SCRUM-29_carrito_visual` parte de su integración en `integration_demo`. Esta dependencia permite revisar el carrito con los productos reales de la lista. Main y dev no se modifican. Las PR quedan a cargo del usuario.
