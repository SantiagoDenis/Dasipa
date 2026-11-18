# Dasipa — entrega de demostración

Fecha: 18 de noviembre de 2026.

## Cómo ejecutarla

```powershell
git switch integration_demo
cd web
npm ci
npm run dev
```

Abrir la URL que imprime Vite (habitualmente http://127.0.0.1:5173/). Node 22.13 o posterior. Si las dependencias ya están instaladas, omitir npm ci. En `/demo` hay perfiles de administrador, droguería aprobada y droguería pendiente. Solo usar datos ficticios. La base D1 local persiste dentro de `web/.wrangler`, excluida de Git.

## Organización de Git

Origin: `https://github.com/SantiagoDenis/Dasipa.git`. `main` y `dev` conservan el commit base de documentación; cada rama feature se creó desde dev. Las 29 ramas corresponden a SCRUM-11 a SCRUM-39. Los commits de implementación siguen `SCRUM-N feat|fix|refactor|docs: descripción`.

`integration_demo` reúne las ramas para revisar la aplicación completa. No es un reemplazo de los PR individuales. Las ramas de funcionalidades dependen de archivos de otros tickets: para compilar el conjunto, usar integration_demo o integrar primero las dependencias en dev. Los merges de ensamblado tienen mensajes de integración; los cambios funcionales se guardaron en sus ramas de ticket. No se crearon PR ni se integraron funcionalidades en main/dev.

## Alcance

- Portada nueva, calidad y certificados con fuentes, laboratorio, fabricación y contacto.
- Catálogo mock: ocho productos, quince presentaciones, cuatro ilustraciones originales, filtros y fichas.
- Formularios persistentes y administración de productos/consultas.
- Registro, verificación, recuperación, sesiones y revisión de droguerías.
- Solicitudes B2B con respuesta comercial y notas internas separadas.
- Carrito público de cosméticos, envío de ejemplo, reserva de stock, pago simulado, seguimiento y administración de pedidos.
- Medición opcional, control de acceso, protección de solicitudes y documentación operativa.

## Evidencia obtenida

| Verificación | Resultado |
| --- | --- |
| TypeScript (`npx tsc --noEmit`) | Sin errores tras corregir tipado y JSX |
| Compilación (`npm run build`) | Finalizada correctamente, Worker y assets generados |
| Portada y catálogo en navegador | Renderizados; ocho productos visibles y filtro medicinal con tres resultados |
| Compra pública de ejemplo | Emulsión $8.900 + envío $4.500 = $13.400; reserva creada y pago simulado aprobado |
| Cotización B2B | Cuenta aprobada creó solicitud; quedó visible en sus solicitudes |
| Respuesta administrativa | Cambio a respondida y respuesta guardada correctamente |
| Cuenta pendiente | API de cotizaciones devolvió 403 y la interfaz mostró falta de acceso |
| Correcciones visuales | Contraste de botones de perfiles, tamaños de campos y sello de portada ajustados |
| Vista móvil | Pendiente: la herramienta de navegador perdió sincronización al intentar cambiar viewport; se restauró el tamaño normal |

No se agregaron tests automatizados. No se ejecutó una auditoría WCAG completa, Lighthouse, prueba de carga ni validación productiva de pagos. El runtime informa una advertencia de migración futura de middleware a proxy y limitaciones de clasificación estática de rutas; el build termina con código 0. El servidor local utilizado para la revisión se detuvo al finalizar.

## Pendientes que impiden afirmar un lanzamiento productivo

Ver `implementation/SCRUM-39.md`: proveedor real de pagos y webhooks, correo saliente, logística, contenido aprobado, certificados vigentes, términos definitivos, hosting, backups y monitoreo. Los emails quedan en outbox; no se enviaron mensajes reales. El simulador no cobra ni despacha. La creación de pedidos reales está bloqueada fuera de demo. SEO mantiene noindex y sitemap vacío hasta aprobar el contenido.

Los tickets conservan su estado de Jira: una rama implementada no equivale a aceptación completa. SCRUM-11/12 necesitan decisiones y materiales del negocio; SCRUM-31/34/37/38/39 incluyen dependencias de producción no satisfechas por este prototipo. Consultar cada documento `implementation/SCRUM-N.md` antes de cerrar el ticket.
