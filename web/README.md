# Dasipa — Aplicación
Node >=22.13. Desde web: npm ci, npm run dev. URL http://localhost:5173. npm run build genera el Worker y los assets. npm exec tsc -- --noEmit valida tipos. No se agregan tests automatizados por instrucción del usuario.
## Revisar el conjunto
La rama integration_demo reúne todos los tickets. main y dev conservan la base para tus PR. Cada feature_SCRUM-* parte de dev y contiene únicamente los archivos de su ticket; integrar dependencias antes de compilar una rama aislada. Ver docs/implementation y docs/entrega.md.
## Datos
D1 local persiste en .wrangler (ignorado). En modo dev se cargan productos mock y /demo habilita perfiles de demostración. Nunca usar datos personales reales en la demo. Los formularios y pedidos se persisten localmente, el correo se almacena en outbox y no se envía.
## Producción
No desplegada. Requiere D1, contenido aprobado, correo, logística, pasarela real y secretos. DEMO_MODE debe estar desactivado. No hay credenciales predeterminadas de producción.

