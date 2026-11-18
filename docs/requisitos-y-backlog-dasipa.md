# Dasipa — Requisitos y backlog de producto

Fecha: 2026-11-18. Proyecto destino: [SCRUM](https://dasipa.atlassian.net/jira/software/projects/SCRUM/summary). Repositorio: [SantiagoDenis/Dasipa](https://github.com/SantiagoDenis/Dasipa).

> Estado: creado y verificado en Jira el 18/11/2026: 6 épicas, 17 historias, 12 tareas y 69 dependencias. Ver [índice de tickets y enlaces](tickets-jira.md). Los identificadores E01–E06 y T01–T29 se conservan como referencias locales; cada uno tiene su clave SCRUM en el índice y en backlog-dasipa.json.

## Objetivo del producto

Convertir el sitio institucional en una plataforma que demuestre calidad, permita encontrar productos y genere consultas/pedidos por el canal correcto: droguerías para el canal B2B, público para los cosméticos aprobados y empresas interesadas en fabricación para terceros.

## Personas

- Visitante que evalúa confianza y capacidad del laboratorio.
- Representante de droguería que necesita documentación y cotización.
- Consumidor que quiere comprar un cosmético autorizado para venta pública.
- Empresa interesada en marca propia.
- Equipo comercial, editorial/técnico y operador de pedidos de Dasipa.

## Requisitos del PO

### R01 — Orientar a cada público

La portada debe explicar la oferta y ofrecer recorridos claros para droguerías, compradores de cosméticos y empresas interesadas en marca propia.

### R02 — Promover calidad verificable

Mostrar certificaciones vigentes en inicio y página propia, con norma, organismo, alcance, fechas y PDF; no presentar la certificación del sistema como certificación individual del producto.

### R03 — Comunicar capacidad y trayectoria

Publicar historia resumida, instalaciones y capacidades con textos, datos e imágenes propios aprobados por Dasipa.

### R04 — Catálogo navegable

Buscar productos por nombre y filtrar por línea/categoría y presentación; contemplar resultados vacíos y conservar filtros al volver.

### R05 — Ficha de producto completa

Cada producto tendrá URL, fotos, categoría, presentaciones/SKU, documentación y contenido revisado; acción comercial según canal autorizado.

### R06 — Venta B2B controlada

Permitir solicitar alta de droguería y aprobación administrativa; mantener precios/condiciones privados cuando corresponda y verificar permisos en servidor.

### R07 — Cotizaciones B2B

Droguerías aprobadas podrán reunir SKU y cantidades, enviar una solicitud persistente y recibir referencia y estado. No implica cobrar ni confirmar stock automáticamente.

### R08 — Compra cosmética

Permitir carrito y checkout únicamente para SKU aprobados para venta pública, con precios, disponibilidad y condiciones claras.

### R09 — Envíos, pagos y pedidos

Calcular entrega según reglas acordadas; integrar una pasarela, confirmar pago mediante eventos verificados, evitar duplicados y ofrecer seguimiento de pedido.

### R10 — Fabricación para terceros

Explicar servicio, proceso y alcance confirmado; captar solicitudes con tipo de producto, volumen estimado y necesidades de marca/envase.

### R11 — Atención segmentada

Diferenciar consultas comerciales, de fabricación y de calidad; preservar contexto y ofrecer confirmación, protección antispam y tratamiento adecuado de datos.

### R12 — Administración

Administradores autorizados podrán mantener catálogo, precios, stock, documentación, publicaciones, altas B2B y estados de solicitudes/pedidos sin editar código.

### R13 — Experiencia accesible y adaptable

Interfaz en español, utilizable con teclado y a 360, 768 y 1440 px sin pérdida de contenido; objetivo WCAG 2.2 AA en flujos principales.

### R14 — Visibilidad y migración

URLs estables, metadatos, sitemap y redirecciones de URLs antiguas; bloquear indexación de entornos de prueba y contenido privado.

### R15 — Operación segura y mantenible

Permisos en servidor, secretos fuera del repositorio, minimización de datos, copias/restauración, CI, entorno de prueba, monitorización y rollback documentados.

### R16 — Medición del resultado

Medir búsquedas, vistas de producto, consultas B2B y fabricación, altas, carrito y compras sin datos personales en eventos; definir línea base antes de fijar metas.

## Supuestos y decisiones pendientes

- Las restricciones de venta provienen del usuario y deben concretarse por SKU con Dasipa; la clasificación de la web antigua no es prueba de autorización de venta.
- No se presupone vigencia de certificados solo por estar publicados; se validan archivos, fechas y alcance.
- Pasarela, moneda/precios/impuestos, logística, mínimos, stock y responsable de atención requieren definición antes de publicar compra.
- No se fija stack técnico hasta revisar costos, mantenimiento y operación. Es posible reutilizar o reemplazar WordPress según esa decisión.
- El acceso B2B propuesto usa aprobación manual; precios B2B públicos/privados y documentación necesaria se resuelven en T01.
- No se inventan SLA, volumen productivo, reseñas, certificaciones ni promesas terapéuticas.
- La publicación operativa es una actividad futura que requiere revisión de los responsables; crear este backlog no publica un sitio ni conecta cuentas.

## Alcance y entregas

**Entrega A:** preparación, diseño, sitio institucional, certificaciones, catálogo administrable, formularios, alta/validación de droguerías y cotizaciones. Es una entrega comercial útil, no una tienda incompleta presentada como terminada.

**Entrega B:** compra cosmética con precios, disponibilidad, entrega, pago, gestión y seguimiento de pedidos. Forma parte del objetivo completo y no se considera opcional.

**Posterior, fuera de esta primera versión:** integración ERP, listas complejas de precios por cliente, pedidos B2B con cobro automático, multidioma, fidelización, recomendaciones automatizadas y mapa de distribuidores. Pueden incorporarse después de confirmar operación y valor.

## Métricas

- Consultas B2B completadas, altas aprobadas y consultas de fabricación.
- Búsquedas sin resultados y avance desde ficha hacia consulta/carrito.
- Compras pagadas, tasa de finalización y fallos de pago/envío al habilitar B.
- Tiempo real de respuesta comercial y errores operativos.

El primer período establece línea base. No se promete un aumento porcentual sin datos. El registro de eventos no debe capturar datos personales o texto libre.

## Tipos de trabajo y responsabilidades

**Epic:** agrupa un resultado amplio. **Story:** entrega un comportamiento con valor para una persona, incluyendo UI, backend y pruebas necesarios. **Task:** habilitación técnica, preparación, validación o publicación. **Subtask:** división operativa que el equipo puede añadir al planificar. **Bug:** defecto comprobado de la implementación; no se usa para renombrar todo el rediseño.

El PO ordena el backlog y valida valor/alcance. El Scrum Master facilita el refinamiento, las dependencias y el flujo. El equipo decide cómo implementar, estima y selecciona trabajo según capacidad. No se asignan personas, fechas ni puntos de historia ficticios.

## Priorización

P0 = necesario para habilitar su entrega; P1 = importante dentro del alcance y a ordenar durante refinamiento. Prioridad y entrega son distintas: un P0 de B no bloquea A. Los IDs locales permiten trazabilidad y luego se reemplazan/enlazan con claves SCRUM reales.

## Definition of Ready propuesta

- Resultado y criterios de aceptación entendidos.
- Dependencias desbloqueadas o plan explícito.
- Datos, diseños y decisiones relevantes disponibles.
- Alcance suficientemente pequeño y estimado por el equipo.

## Definition of Done propuesta

- Criterios de aceptación comprobados y evidencia registrada.
- Código revisado y verificaciones de CI pertinentes aprobadas.
- Estados de error, permisos y protección de datos verificados cuando corresponda.
- Recorridos afectados probados en móvil/escritorio y teclado.
- Textos/documentos aprobados por su responsable antes de publicación.
- Disponible en pruebas y documentación operativa actualizada.
- Sin defectos bloqueantes abiertos. Una story puede terminar en pruebas; la publicación de la entrega tiene su ticket propio.

## Secuencia recomendada

1. T01–T04: acuerdos comerciales, contenido, diseño y arquitectura (algunos pueden avanzar en paralelo).
2. T05/T11: base ejecutable y administración de catálogo.
3. Sitio/certificaciones/catálogo y canal B2B, respetando dependencias de cada ticket.
4. T24–T28: verificaciones y entrega A; seguridad se construye desde el inicio, no al final.
5. T19–T23 y T29: compra cosmética y entrega B; puede desarrollarse antes si sus decisiones están listas.

No son sprints comprometidos. Durante el refinamiento, dividir cualquier historia que exceda la capacidad razonable de un sprint.

## Backlog resumido

| ID local | Tipo | Épica | Entrega | Prioridad | Título |
|---|---|---|---|---|---|
| T01 | Task | E01 | A | P0 | Validar catálogo, canales y condiciones comerciales |
| T02 | Task | E01 | A | P0 | Revisar textos técnicos, certificados y material visual |
| T03 | Task | E01 | A | P0 | Diseñar navegación y prototipos de los recorridos principales |
| T04 | Task | E01 | A | P0 | Definir arquitectura, modelo de datos e integraciones |
| T05 | Task | E01 | A | P0 | Preparar repositorio, CI y entorno de pruebas |
| T06 | Story | E02 | A | P0 | Entender la oferta de Dasipa desde la portada |
| T07 | Story | E02 | A | P0 | Consultar certificaciones y alcance de calidad |
| T08 | Story | E02 | A | P1 | Conocer trayectoria, instalaciones y capacidades |
| T09 | Story | E02 | A | P0 | Solicitar presupuesto de fabricación para terceros |
| T10 | Story | E02 | A | P1 | Contactar al área adecuada con contexto |
| T11 | Story | E03 | A | P0 | Administrar catálogo y documentación |
| T12 | Story | E03 | A | P0 | Buscar y filtrar productos |
| T13 | Story | E03 | A | P0 | Consultar ficha y elegir una presentación |
| T14 | Task | E03 | A | P0 | Migrar el catálogo y los archivos aprobados |
| T15 | Story | E04 | A | P0 | Solicitar alta como droguería |
| T16 | Story | E04 | A | P0 | Aprobar y administrar accesos de droguerías |
| T17 | Story | E04 | A | P0 | Armar y enviar una cotización multiproducto |
| T18 | Story | E04 | A | P1 | Consultar y gestionar el estado de las cotizaciones |
| T19 | Story | E05 | B | P0 | Comprar cosméticos desde un carrito |
| T20 | Story | E05 | B | P0 | Elegir entrega y revisar el total final |
| T21 | Story | E05 | B | P0 | Pagar y recibir una confirmación confiable |
| T22 | Story | E05 | B | P0 | Preparar pedidos y mantener precios y stock |
| T23 | Story | E05 | B | P1 | Seguir la compra y consultar condiciones |
| T24 | Task | E06 | A | P1 | Implementar SEO y redirecciones del sitio anterior |
| T25 | Task | E06 | A | P1 | Instrumentar métricas de consultas y compras |
| T26 | Task | E06 | A | P0 | Verificar accesibilidad, adaptación y rendimiento |
| T27 | Task | E06 | A | P0 | Configurar seguridad, privacidad y recuperación |
| T28 | Task | E06 | A | P0 | Validar y publicar la entrega A |
| T29 | Task | E06 | B | P0 | Validar y habilitar la entrega B de tienda cosmética |

## Épicas y tickets detallados

### E01 — Preparación comercial, contenido y diseño

Resolver las decisiones que condicionan una implementación correcta y preparar los diseños y datos.

Cierre: tickets de esta épica aceptados para las entregas aplicables; evidencia de los recorridos y operación disponible.

#### T01 — [Task] Validar catálogo, canales y condiciones comerciales

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R05, R06, R08, R09.

**Dependencias:** Sin dependencias previas; requiere participación de los responsables de Dasipa.

**Criterios de aceptación:**

- [ ] Existe una matriz por SKU con categoría, presentación, canal autorizado y disponibilidad; las dudas quedan excluidas de compra hasta resolverse.
- [ ] Dasipa confirma responsables, criterios de aprobación B2B, mínimos/cantidades, visibilidad de precios y circuito de cotización.
- [ ] Se documentan decisiones pendientes de tienda: moneda, precios/impuestos, stock, cobro, entrega, cambios y devoluciones; tienen responsable y bloquean publicación cuando aplique.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T02 — [Task] Revisar textos técnicos, certificados y material visual

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R02, R03, R05.

**Dependencias:** Sin dependencias previas; requiere participación de los responsables de Dasipa.

**Criterios de aceptación:**

- [ ] El responsable técnico valida indicaciones, precauciones, clasificación y presentaciones; se resuelve la discrepancia 33 g/25 g detectada en cloruro de magnesio.
- [ ] Se registra norma, emisor, alcance y vigencia de cada certificado y su archivo autorizado.
- [ ] Se reúne inventario de textos e imágenes con autorización de uso y aprobación; no se inventan beneficios, capacidades ni sellos.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T03 — [Task] Diseñar navegación y prototipos de los recorridos principales

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R01, R04, R05, R07, R08, R13.

**Dependencias:** T01

**Criterios de aceptación:**

- [ ] Mapa del sitio separa catálogo medicinal, cosmética pública, droguerías, certificaciones y fabricación para terceros.
- [ ] Prototipos de inicio, listado, ficha, cotización y checkout incluyen móvil/escritorio y estados de carga, vacío, error y éxito.
- [ ] Se define sistema visual de color, tipografía, botones y formularios con contraste verificable y revisión del PO.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T04 — [Task] Definir arquitectura, modelo de datos e integraciones

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R05, R12, R15.

**Dependencias:** T01

**Criterios de aceptación:**

- [ ] Decisión documentada de plataforma/CMS, hosting, persistencia y estrategia de frontend/backend con costos y restricciones.
- [ ] Modelo incluye producto/SKU, canal, precio, stock, documentos, cuenta B2B, cotización, pedido y pago.
- [ ] Se definen roles, contratos de API, fuente de stock y límites transaccionales; pasarela/envíos quedan seleccionados o identificados como bloqueantes de B.
- [ ] No se asume ERP, sincronización externa ni proveedor de pago sin confirmación.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T05 — [Task] Preparar repositorio, CI y entorno de pruebas

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R15.

**Dependencias:** T04

**Criterios de aceptación:**

- [ ] README permite ejecutar el proyecto; configuración de ejemplo no contiene secretos.
- [ ] Cada PR ejecuta compilación y verificaciones pertinentes; rama principal y revisiones quedan configuradas según permisos disponibles.
- [ ] Hay despliegue de prueba con datos ficticios y sin indexación, y procedimiento de despliegue documentado.
- [ ] Se documenta convención de claves Jira en ramas, commits y PR; la conexión GitHub-Jira se verifica cuando los administradores la habiliten.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

### E02 — Sitio institucional, certificaciones y captación

Explicar la propuesta de Dasipa, demostrar confianza y convertir interés en consultas pertinentes.

Cierre: tickets de esta épica aceptados para las entregas aplicables; evidencia de los recorridos y operación disponible.

#### T06 — [Story] Entender la oferta de Dasipa desde la portada

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R01, R02, R03, R13.

**Dependencias:** T02, T03, T05

**Criterios de aceptación:**

- [ ] Como visitante identifico productos medicinales, cosmética y fabricación para terceros con acciones diferenciadas.
- [ ] Inicio muestra certificación verificada con acceso al detalle y una selección de líneas/productos publicados.
- [ ] Los enlaces llegan a destinos útiles; el banner y navegación no recortan contenido a 360, 768 y 1440 px.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T07 — [Story] Consultar certificaciones y alcance de calidad

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R02.

**Dependencias:** T02, T05

**Criterios de aceptación:**

- [ ] Como comprador accedo desde inicio y navegación a norma, emisor, alcance, vigencia y certificado descargable.
- [ ] Los PDFs se abren/descargan y tienen nombre y formato identificables.
- [ ] Certificados vencidos o retirados no se promocionan como vigentes; se diferencia gestión de calidad de certificación de productos.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T08 — [Story] Conocer trayectoria, instalaciones y capacidades

**Entrega:** A. **Prioridad:** P1. **Requisitos:** R03.

**Dependencias:** T02, T03, T05

**Criterios de aceptación:**

- [ ] Como potencial cliente consulto información resumida de empresa, instalaciones y capacidades aprobadas.
- [ ] Fotos tienen textos alternativos útiles y todo dato cuantitativo conserva fuente/aprobación.
- [ ] Historia y misión no desplazan las acciones comerciales; la página enlaza catálogo y fabricación.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T09 — [Story] Solicitar presupuesto de fabricación para terceros

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R10, R11.

**Dependencias:** T01, T02, T03, T05

**Criterios de aceptación:**

- [ ] Como empresa entiendo el alcance real del servicio y los pasos para solicitar presupuesto.
- [ ] Formulario solicita contacto, empresa, tipo de producto, volumen estimado y necesidades de marca/envase; valida campos y explica uso de datos.
- [ ] Solicitud se persiste con referencia, se notifica al responsable configurado y muestra confirmación; un fallo de notificación queda registrado para reintento.
- [ ] No se promete diseño de fórmulas, mínimos o plazos que Dasipa no haya confirmado.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T10 — [Story] Contactar al área adecuada con contexto

**Entrega:** A. **Prioridad:** P1. **Requisitos:** R11.

**Dependencias:** T03, T05

**Criterios de aceptación:**

- [ ] Como visitante elijo ventas, fabricación o consultas de calidad y veo datos de contacto aprobados.
- [ ] Desde una ficha el producto llega identificado al formulario, sin obligarme a escribirlo otra vez.
- [ ] Validación, protección antispam, persistencia y confirmación funcionan; errores no se presentan como envío exitoso.
- [ ] El formulario no solicita datos clínicos innecesarios ni muestra datos personales de otros remitentes.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

### E03 — Catálogo de productos administrable

Permitir descubrir y evaluar productos usando información comercial y técnica validada.

Cierre: tickets de esta épica aceptados para las entregas aplicables; evidencia de los recorridos y operación disponible.

#### T11 — [Story] Administrar catálogo y documentación

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R05, R12, R15.

**Dependencias:** T01, T02, T04, T05

**Criterios de aceptación:**

- [ ] Como administrador creo/edito/despublico productos y SKU con presentaciones, categorías, canal y archivos.
- [ ] Existe borrador/publicado y solo se publica información aprobada; documentos e imágenes tienen validación de formato/tamaño.
- [ ] Usuarios sin rol no pueden modificar datos por UI ni API; los cambios relevantes registran autor y fecha.
- [ ] Un producto retirado conserva referencias históricas de solicitudes y pedidos.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T12 — [Story] Buscar y filtrar productos

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R04, R13.

**Dependencias:** T03, T11

**Criterios de aceptación:**

- [ ] Como visitante busco por nombre sin diferencia de mayúsculas o tildes y combino filtros de línea/categoría y presentación.
- [ ] Se muestra cantidad de resultados y opción de limpiar filtros; las búsquedas sin resultados ofrecen salida útil.
- [ ] Volver desde una ficha conserva consulta/filtros; solo aparecen productos publicados.
- [ ] El catálogo permite navegar resultados en móvil y teclado sin cargar imágenes completas innecesariamente.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T13 — [Story] Consultar ficha y elegir una presentación

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R05, R06, R08.

**Dependencias:** T02, T03, T11

**Criterios de aceptación:**

- [ ] Como comprador veo foto, nombre, descripción validada, presentaciones y documentación de un producto en URL propia.
- [ ] Seleccionar presentación identifica un SKU inequívoco y muestra únicamente la acción habilitada para mi canal.
- [ ] Productos restringidos nunca exponen compra pública; productos no disponibles muestran un estado comprensible.
- [ ] La compra cosmética se habilita cuando B esté operativa; en A se ofrece consulta sin simular un checkout.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T14 — [Task] Migrar el catálogo y los archivos aprobados

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R02, R03, R05, R12.

**Dependencias:** T01, T02, T11

**Criterios de aceptación:**

- [ ] Se importa el conjunto de productos aprobado y se compara el total/SKU con el inventario de origen.
- [ ] No hay duplicados, archivos rotos ni fichas publicadas con campos obligatorios incompletos.
- [ ] Una revisión por muestreo cubre todas las categorías y una revisión completa cubre permisos por canal.
- [ ] El importador permite repetir o revertir la carga de prueba sin duplicar registros.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

### E04 — Canal comercial para droguerías

Captar y validar droguerías y gestionar cotizaciones sin habilitar venta pública de productos restringidos.

Cierre: tickets de esta épica aceptados para las entregas aplicables; evidencia de los recorridos y operación disponible.

#### T15 — [Story] Solicitar alta como droguería

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R06.

**Dependencias:** T01, T04, T05

**Criterios de aceptación:**

- [ ] Como representante registro empresa, identificador fiscal, contacto y los datos de validación acordados, con aviso de tratamiento de datos.
- [ ] Se confirma titularidad del correo mediante enlace con vencimiento y la cuenta queda pendiente de aprobación.
- [ ] Se contemplan duplicados y fallos; una cuenta pendiente no accede a condiciones comerciales privadas.
- [ ] Los documentos necesarios, si se requieren, solo son accesibles al titular y personal autorizado.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T16 — [Story] Aprobar y administrar accesos de droguerías

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R06, R12, R15.

**Dependencias:** T15

**Criterios de aceptación:**

- [ ] Como administrador apruebo, rechazo o suspendo una solicitud y registro motivo, autor y fecha.
- [ ] El solicitante recibe el resultado y solo una cuenta aprobada obtiene el rol comercial.
- [ ] Inicio/cierre de sesión y recuperación de acceso no revelan información de otras cuentas.
- [ ] Suspender una cuenta impide nuevas operaciones comerciales incluso con una sesión previa.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T17 — [Story] Armar y enviar una cotización multiproducto

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R06, R07.

**Dependencias:** T13, T16

**Criterios de aceptación:**

- [ ] Como droguería aprobada agrego SKU/cantidades, modifico líneas y veo el resumen antes de enviarlo.
- [ ] El servidor revalida rol, SKU, canal, mínimos y cantidades; rechaza acceso directo no autorizado.
- [ ] Enviar crea una solicitud única con referencia e instantánea de las líneas; reintentar no genera duplicados.
- [ ] La confirmación distingue solicitud de cotización de pedido aceptado; el responsable comercial recibe aviso recuperable ante fallos.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T18 — [Story] Consultar y gestionar el estado de las cotizaciones

**Entrega:** A. **Prioridad:** P1. **Requisitos:** R07, R12.

**Dependencias:** T17

**Criterios de aceptación:**

- [ ] Como droguería veo solo mis solicitudes, detalle y estados: recibida, en revisión, respondida y cerrada.
- [ ] Como comercial autorizado filtro solicitudes y actualizo estado con historial.
- [ ] La respuesta comercial queda registrada con condiciones y vigencia cuando corresponda; las notas internas no son visibles al cliente.
- [ ] Las pruebas incluyen intento de leer/modificar solicitudes de otra empresa.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

### E05 — Tienda cosmética y gestión de pedidos

Completar compra de productos habilitados para público con disponibilidad, entrega, pago y seguimiento.

Cierre: tickets de esta épica aceptados para las entregas aplicables; evidencia de los recorridos y operación disponible.

#### T19 — [Story] Comprar cosméticos desde un carrito

**Entrega:** B. **Prioridad:** P0. **Requisitos:** R08.

**Dependencias:** T01, T13

**Criterios de aceptación:**

- [ ] Como consumidor agrego solo SKU habilitados al carrito y cambio cantidades o elimino líneas.
- [ ] El total y disponibilidad se recalculan en servidor; no se confía en precios enviados por el navegador.
- [ ] El carrito conserva su contenido al navegar y muestra cambios de precio o indisponibilidad antes de continuar.
- [ ] Intentos de agregar productos restringidos por API son rechazados.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T20 — [Story] Elegir entrega y revisar el total final

**Entrega:** B. **Prioridad:** P0. **Requisitos:** R09.

**Dependencias:** T01, T19

**Criterios de aceptación:**

- [ ] Como comprador ingreso datos mínimos de contacto/entrega y accedo a las opciones disponibles según código postal.
- [ ] El costo, impuestos aplicables y total final se muestran antes del pago junto a las condiciones aprobadas.
- [ ] Direcciones fuera de cobertura tienen un mensaje explícito; no se permite pagar con costo de envío indeterminado.
- [ ] Las reglas de entrega configuradas se verifican con casos de cobertura y límites acordados.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T21 — [Story] Pagar y recibir una confirmación confiable

**Entrega:** B. **Prioridad:** P0. **Requisitos:** R09, R15.

**Dependencias:** T04, T20

**Criterios de aceptación:**

- [ ] Como comprador pago mediante la pasarela elegida sin que Dasipa almacene datos de tarjeta.
- [ ] El pedido se confirma solo mediante notificación verificada del proveedor; retorno del navegador no basta.
- [ ] Eventos repetidos o fuera de orden no duplican cobros/pedidos; se prueban aprobado, pendiente, rechazo y cancelación.
- [ ] Se define reserva/liberación de stock y se prueba concurrencia sobre la última unidad; el pedido registra precios y envío acordados.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T22 — [Story] Preparar pedidos y mantener precios y stock

**Entrega:** B. **Prioridad:** P0. **Requisitos:** R09, R12.

**Dependencias:** T11, T21

**Criterios de aceptación:**

- [ ] Como operador autorizado veo pedidos pagados y cambio estado a preparación, enviado o cancelado según transiciones válidas.
- [ ] Puedo mantener precios y stock por SKU con historial y sin alterar importes históricos de pedidos.
- [ ] Cancelación y devolución registran su motivo y resultado de reintegro; nunca marcan reintegrado sin confirmación del medio de pago.
- [ ] Un pedido no pagado no se trata como listo para despacho.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T23 — [Story] Seguir la compra y consultar condiciones

**Entrega:** B. **Prioridad:** P1. **Requisitos:** R09, R11.

**Dependencias:** T21, T22

**Criterios de aceptación:**

- [ ] Como comprador recibo confirmación con referencia, detalle, total y canal de asistencia.
- [ ] Consulto estado y seguimiento mediante acceso autenticado o enlace seguro; conocer el número de pedido no permite ver datos personales.
- [ ] Veo condiciones aprobadas de entrega, cambios/devoluciones y contacto antes y después de comprar.
- [ ] Fallos en notificaciones quedan registrados y pueden reintentarse sin crear pedidos nuevos.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

### E06 — Calidad técnica, medición y lanzamiento

Publicar y operar el sitio con controles de calidad, trazabilidad, visibilidad y recuperación.

Cierre: tickets de esta épica aceptados para las entregas aplicables; evidencia de los recorridos y operación disponible.

#### T24 — [Task] Implementar SEO y redirecciones del sitio anterior

**Entrega:** A. **Prioridad:** P1. **Requisitos:** R14.

**Dependencias:** T06, T07, T13

**Criterios de aceptación:**

- [ ] Inicio, categorías y fichas tienen título/descripción propios, canonical y HTML indexable.
- [ ] Se publica sitemap de páginas públicas y robots acorde al entorno; administración y cuentas no se indexan.
- [ ] Inventario de URLs antiguas tiene destino equivalente o tratamiento explícito; redirecciones permanentes no forman ciclos.
- [ ] Se verifican 404, enlaces, vistas previas sociales y datos estructurados pertinentes sin inventar precios/reseñas.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T25 — [Task] Instrumentar métricas de consultas y compras

**Entrega:** A. **Prioridad:** P1. **Requisitos:** R16.

**Dependencias:** T06, T09, T17

**Criterios de aceptación:**

- [ ] Plan de eventos cubre búsqueda, ficha, solicitud B2B, alta y fabricación; al habilitar B incorpora carrito y compra.
- [ ] Eventos de conversión se disparan después de éxito confirmado y tienen mecanismo contra duplicados.
- [ ] No se envían nombres, correos, identificadores fiscales ni texto libre a analítica; consentimiento se implementa según la política definida.
- [ ] Se dispone de un tablero con línea base; objetivos de conversión quedan para validar con datos reales.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T26 — [Task] Verificar accesibilidad, adaptación y rendimiento

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R13, R15.

**Dependencias:** T06, T07, T12, T13, T17

**Criterios de aceptación:**

- [ ] Se verifica navegación por teclado, foco, etiquetas, errores y contraste en recorridos principales con objetivo WCAG 2.2 AA.
- [ ] Casos a 360, 768 y 1440 px y zoom 200% no pierden controles ni texto; se prueban navegadores acordados.
- [ ] Pruebas repetibles de rendimiento en móvil documentan entorno, páginas y resultados; presupuesto inicial propuesto LCP <=2.5 s y CLS <=0.1.
- [ ] Se registran defectos y se corrigen bloqueantes; después del lanzamiento se mide INP de campo cuando haya datos.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T27 — [Task] Configurar seguridad, privacidad y recuperación

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R06, R08, R11, R15.

**Dependencias:** T04, T05

**Criterios de aceptación:**

- [ ] Matriz de permisos se prueba en servidor; no hay acceso cruzado entre empresas ni escritura administrativa anónima.
- [ ] HTTPS, gestión de secretos, límites de solicitudes, validación de cargas y dependencias están revisados sin fallos críticos conocidos abiertos.
- [ ] Se define retención de datos, política de privacidad y acceso operativo; logs excluyen secretos y datos sensibles innecesarios.
- [ ] Se realiza restauración de respaldo en entorno aislado y se documentan alertas, responsable e instrucciones de incidente.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T28 — [Task] Validar y publicar la entrega A

**Entrega:** A. **Prioridad:** P0. **Requisitos:** R01, R02, R04, R05, R06, R07, R10, R11, R14, R15, R16.

**Dependencias:** T08, T10, T14, T18, T24, T25, T26, T27

**Criterios de aceptación:**

- [ ] El PO revisa en pruebas inicio, certificados, catálogo, alta B2B, cotización y formularios con contenido aprobado.
- [ ] Los flujos críticos pasan y no quedan defectos bloqueantes; manual de administración y capacitación están entregados.
- [ ] Plan de dominio/despliegue, respaldo y rollback está ensayado; se obtiene aprobación operativa antes de producción.
- [ ] Después del despliegue se comprueban URLs, formularios y notificaciones; la tienda pública no anuncia pago hasta B.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

#### T29 — [Task] Validar y habilitar la entrega B de tienda cosmética

**Entrega:** B. **Prioridad:** P0. **Requisitos:** R08, R09, R12, R13, R15, R16.

**Dependencias:** T23, T28

**Criterios de aceptación:**

- [ ] Productos, precios, stock, logística, condiciones y pasarela productiva tienen validación de sus responsables.
- [ ] Pruebas integrales cubren compra, pago rechazado/pendiente, eventos duplicados, concurrencia de stock, cancelación y reintegro.
- [ ] Se repiten pruebas de accesibilidad, seguridad y rendimiento sobre carrito/checkout y se verifica analítica de compra.
- [ ] Se ensayan activación/retroceso y soporte; la aprobación operativa habilita producción sin perder pedidos existentes.

**Validación:** registrar evidencia reproducible de cada criterio en el ticket/PR. Aplicar Definition of Done; confirmar decisiones pendientes antes de comprometer la historia en un sprint.

## Fuentes y referencias

- [Dasipa](https://dasipa.com.ar/): inicio, calidad, certificados, catálogos, servicios y contacto revisados en esta conversación.
- [Sentius](https://sentius.com.ar/sentius/): presentación y captación.
- [Andrómaco](https://www.andromaco.com/): separación de canales/públicos.
- [Elea](https://elea.com/productos/): organización del catálogo.
- [Pura Química](https://puraquimica.com.ar/): búsqueda y consultas comerciales.

Las referencias inspiran funcionalidades; sus afirmaciones, marcas, textos y fotografías no se trasladan a Dasipa.
