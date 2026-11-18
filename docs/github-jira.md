# Conectar Dasipa en GitHub con Jira
Fecha de consulta: 18/11/2026.

Repositorio: https://github.com/SantiagoDenis/Dasipa
Proyecto Jira: https://dasipa.atlassian.net/jira/software/projects/SCRUM/summary

## Dos conexiones distintas

La autorización del plugin Atlassian en Codex permite que el asistente cree los tickets usando tus permisos. La integración GitHub–Jira vincula el desarrollo con esos tickets. Hacer una no configura automáticamente la otra.

## Configuración de GitHub–Jira

1. Un administrador del sitio Jira abre Apps → Explore more apps e instala GitHub for Atlassian.
2. Abre Get started/Configure y selecciona GitHub Cloud.
3. El propietario de la organización de GitHub conecta la organización que contiene el repositorio.
4. En Repository access, selecciona Only select repositories e incluye Dasipa.
5. Completada la conexión, verifica que figure en Apps → Manage apps → GitHub for Atlassian.
6. Incluye una clave Jira real en rama, commit y título de pull request; hace push y comprueba el panel de desarrollo del ticket.

La documentación vigente describe un flujo para organizaciones de GitHub. La URL SantiagoDenis/Dasipa no basta para confirmar el tipo de propietario. Si es una cuenta personal y no aparece como destino admitido, hay que revisar ese caso antes de decidir una transferencia; no mover el repositorio automáticamente.

Fuente: [Guía oficial de conexión](https://support.atlassian.com/jira-cloud-administration/docs/integrate-with-github/).

## Convención propuesta

Ejemplo ilustrativo: SCRUM-123 debe reemplazarse por la clave real del ticket. No supone que ese ticket ya exista.

- Rama: `feature_SCRUM-123_certificaciones`
- Commit: `SCRUM-123 feat: add certificates and quality reach`
- Título de PR: `SCRUM-123 Mostrar certificaciones en inicio`

La descripción del PR debería incluir el resultado implementado, evidencia de los criterios de aceptación y verificaciones realizadas. Una rama o commit local no aparece en Jira hasta publicarse y sincronizarse.

## Beneficios

- Desde un ticket se ven las ramas, commits y pull requests asociados.
- Se puede seguir el trabajo en el contexto del tablero y las entregas.
- Con workflows y despliegues integrados, Jira también puede mostrar su estado.
- El equipo puede identificar qué cambio implementó un requisito y localizar el PR que explica la decisión.

Fuentes: [Información de desarrollo](https://support.atlassian.com/jira-cloud-administration/docs/use-the-github-for-jira-app/) y [Workflows y despliegues](https://support.atlassian.com/jira-cloud-administration/docs/link-github-workflows-and-deployments-to-jira-issues/).

## Política de trabajo propuesta

Un PR abierto puede dar lugar a revisión, pero un merge no demuestra por sí solo que todos los criterios de aceptación estén satisfechos. Recomiendo cerrar tickets tras cumplir la Definition of Done. Cualquier transición automática debe configurarse explícitamente y concordar con el flujo del equipo.

Jira será el backlog funcional; GitHub será el lugar de código y revisión. No es necesario duplicar cada story como GitHub Issue. La integración no implementa funciones, no realiza pruebas ni garantiza que una story esté terminada.

## Verificación pendiente

Esta guía no instala la integración ni confirma que el repositorio esté conectado. La configuración efectiva requiere los permisos del administrador/propietario y una prueba con una clave Jira real.

