# SCRUM-38 — entrega institucional para revisión

## Alcance implementado

Portada orientada a tres públicos, calidad con fuentes documentales, laboratorio, fabricación para terceros, contacto, catálogo y fichas. Se conserva la identidad verde del laboratorio con tipografía editorial y componentes responsive. Productos e imágenes son mock; no presentar ilustraciones como fotografías reales.

## Recorrido de aceptación manual

1. Abrir `/` y comprobar accesos a cosméticos, droguerías y fabricación.
2. Revisar `/calidad` y abrir los certificados originales. Validar vigencia y alcance con Dasipa antes de reemplazar la advertencia.
3. Filtrar `/productos`, abrir una ficha y cambiar presentación.
4. Completar `/fabricacion` o `/contacto` con datos ficticios y verificar la consulta en `/admin/consultas` con el perfil demo administrador.
5. Revisar navegación móvil, teclado y textos a 200% de zoom.

## Revisión y despliegue

Las ramas feature parten de dev y contienen cambios por ticket. Como comparten dependencias, los PR deben integrarse según el backlog; una rama aislada puede no ejecutar la aplicación completa. `integration_demo` reúne el trabajo para revisarlo sin adelantar merges en main/dev. No se crearon PR ni se cambió DNS. La publicación requiere hosting con bindings D1 y revisión de contenidos. No hay credenciales de producción en el repositorio.
