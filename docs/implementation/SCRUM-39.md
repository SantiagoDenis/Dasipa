# SCRUM-39 — revisión comercial y preparación de lanzamiento

## Recorridos para aceptación

- Droguería: registro ficticio → enlace de verificación demo → aprobación por administrador → ingreso → ficha → cotizar → respuesta administrativa → seguimiento en cuenta.
- Público: cosmético publicado con stock → carrito → código postal cubierto → datos ficticios → pago simulado → seguimiento → administración y despacho.
- Recuperación: contraseña nueva mediante enlace de un uso, revocación de sesiones existentes.
- Errores: cuenta pendiente sin permiso comercial, producto medicinal rechazado en carrito público, zona sin cobertura, stock insuficiente, pago rechazado y reintento sin duplicar pedido.

## Qué falta para vender de verdad

| Dependencia | Estado |
| --- | --- |
| Productos, precios, imágenes, etiquetas y stock reales | Se utilizan mocks identificados |
| Certificados con vigencia y alcance aprobados | Fuentes enlazadas; validación pendiente |
| Habilitación documental de droguerías | Revisión humana pendiente |
| Proveedor de cobro, webhooks firmados, conciliación y reembolsos | Simulador, venta productiva bloqueada |
| Correo transaccional | Outbox persistente; falta proveedor y worker de envío |
| Logística y cobertura | Regla de ejemplo; falta contrato real |
| Condiciones comerciales y privacidad | Borrador, requiere aprobación |
| Hosting, dominio, backups y alertas | Documentación de preparación, sin despliegue |
| Aceptación de usuario y revisión integral | Pendiente de revisión de esta entrega |

Las ramas implementan una demostración revisable; su existencia no implica que todos los criterios productivos de Jira estén cerrados. No se crean PR ni se marcan tickets como terminados automáticamente. No se agregaron tests automatizados por instrucción del usuario. La evidencia técnica se registra en `docs/entrega.md`.
