# SCRUM-31 — pedido y adaptador de pago DEMO

Checkout recalculado en servidor, snapshot de importes, reserva atómica de stock con restricción SQL, idempotencia por clave secreta y acceso del invitado mediante token. Simulador autorizado con estados aprobado/pendiente/rechazado/cancelado; estados terminales no se reprocesan. Rechazo/cancelación/vencimiento liberan la reserva en una transacción. Vencimiento evaluado al operar pedidos; en producción requerirá scheduler.

No implementa proveedor real ni webhook externo, porque no se definieron cuenta, credenciales ni contrato. La creación de pedidos se bloquea fuera de modo demo. No declarar terminado el criterio de pago productivo: falta integrar firma de webhooks, conciliación, reembolsos y credenciales del proveedor elegido. Emails en outbox local.
