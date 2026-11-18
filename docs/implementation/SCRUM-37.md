# SCRUM-37 — seguridad y operación

Sesiones HttpOnly, SameSite, Secure fuera de demo, contraseñas PBKDF2, tokens con hash y vencimiento, control de rol en servidor, SQL parametrizado, control de origen para mutaciones, límite de payload y límite de solicitudes por minuto. Datos comerciales solo por propietario/administrador. No guardar tarjetas. Headers de defensa en middleware; CSP mínima compatible con el runtime, endurecer con nonces antes de producción.

Rate limit usa CF-Connecting-IP del edge de confianza, hash efímero por minuto, no IP en métricas. Desarrollo comparte bucket local. Definir límites por endpoint y protección de borde para lanzamiento.

## Copia y recuperación

Con el servidor detenido y desde web, exportar la base local usando Wrangler y el nombre de base del entorno. Mantener exportaciones fuera de Git, cifradas si contienen información real. Ejemplo local: `npx wrangler d1 export site-creator-d1 --local --output ../backups/dasipa.sql` (requiere configuración D1 del entorno; no usar un identificador productivo por accidente). Restaurar primero en una base aislada con `wrangler d1 execute <base-aislada> --file <copia.sql>`. Verificar cantidades y una consulta antes de reemplazar un entorno. Para producción definir bindings/ID reales, retención, responsable y realizar un ensayo documentado; este cambio no afirma haber ejecutado un backup remoto ni ensayo de desastre.

Pendiente: envío real de outbox con reintentos, monitoreo externo, alertas, backups gestionados y revisión de infraestructura. DEMO_MODE nunca debe habilitarse en un sitio con datos reales.
