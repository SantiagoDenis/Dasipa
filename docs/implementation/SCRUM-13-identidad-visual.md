# SCRUM-13 — identidad visual y acabado

## Cambios

- Logo PNG y favicon WebP proporcionados por el usuario, copiados sin alterar los originales. Logo compartido por cabecera y pie con proporciones conservadas.
- Paleta azul Dasipa, azul profundo, marfil y grises fríos. Ilustraciones SVG del catálogo adaptadas a la misma paleta.
- Acabado editorial: bordes finos, radios discretos, espacios amplios, tipografía serif y sombras contenidas.
- Cabecera sticky con backdrop-filter y alternativa opaca. Detalles de vidrio en sello, etiquetas y panel de certificados.
- Aparición breve de portada, transiciones de navegación, productos y botones; sin animación permanente. Respeta prefers-reduced-motion y evita hover animado en dispositivos táctiles.
- Campos consistentes, foco azul visible, selectores con indicador, checkbox con color de marca y texto de 16 px en formularios móviles.

La capa de identidad está en `web/public/brand.css`, organizada por componentes, sobre las reglas estructurales existentes. No incorpora dependencias, fuentes remotas ni librerías de animación.

## Validación

TypeScript y build correctos. Revisión visual de portada y contacto en escritorio y a 390 px, apertura del menú móvil, foco de campos y favicon comprobados. El formulario móvil no presenta desbordamiento horizontal. No se agregaron tests automatizados.

La rama `feature_SCRUM-13_identidad_visual_premium` parte de la demo integrada porque modifica la experiencia ya ensamblada. Su diff se revisa contra la versión previa de `integration_demo`; no requiere volver a incorporar los tickets anteriores. No se crea PR ni se modifica main/dev.
