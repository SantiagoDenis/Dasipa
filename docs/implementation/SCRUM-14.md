# SCRUM-14 — Arquitectura
Vinext/React sobre el starter suministrado, rutas app y API server-side, SQLite mediante D1 local persistente. Sin servicios pagos necesarios para ejecutar la demo. La base contiene catálogo/SKU, usuarios/sesiones/tokens, consultas, cotizaciones, pedidos, eventos de pago, outbox, auditoría y métricas.
Precios en centavos; inventario con CHECK stock >= 0 y operaciones de reserva por lotes transaccionales. Autorización en servidor y sesión HttpOnly; expiración de sesión y relectura de permisos por petición. Contraseñas PBKDF2, tokens almacenados como hash.
Pasarela y envío son adaptadores demo. Producción requiere proveedores, binding D1 real, HTTPS y secretos. No hay ERP. Formularios persisten primero y generan outbox; no afirman entrega de correo real.
Las ramas se crean desde dev y contienen el cambio de su ticket; dependen de los tickets indicados en Jira. integration_demo reúne sus commits para revisión, sin integrar en dev. Las PR se hacen en orden de dependencias.

