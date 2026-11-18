import type {Product} from '@/lib/model';
export const mockProducts:Product[]=[
  {
    "id": "demo-1",
    "slug": "emulsion-corporal",
    "name": "Emulsión corporal",
    "line": "cosmetico",
    "category": "Cuidado corporal",
    "description": "Una textura ligera para acompañar tu rutina de cuidado corporal. Descripción ilustrativa pendiente de aprobación.",
    "image": "/products/lotion.svg",
    "published": true,
    "mock": true,
    "documents": [],
    "variants": [
      {
        "id": "DS-1-1",
        "productId": "demo-1",
        "size": "250 ml",
        "price": 890000,
        "stock": 24
      },
      {
        "id": "DS-1-2",
        "productId": "demo-1",
        "size": "500 ml",
        "price": 1780000,
        "stock": 34
      }
    ]
  },
  {
    "id": "demo-2",
    "slug": "crema-manos",
    "name": "Crema para manos",
    "line": "cosmetico",
    "category": "Cuidado corporal",
    "description": "Un formato práctico para sumar a tu cuidado diario. Fórmula y beneficios a confirmar por el laboratorio.",
    "image": "/products/cream.svg",
    "published": true,
    "mock": true,
    "documents": [],
    "variants": [
      {
        "id": "DS-2-1",
        "productId": "demo-2",
        "size": "60 g",
        "price": 540000,
        "stock": 24
      },
      {
        "id": "DS-2-2",
        "productId": "demo-2",
        "size": "120 g",
        "price": 1080000,
        "stock": 34
      }
    ]
  },
  {
    "id": "demo-3",
    "slug": "oleo-calcareo",
    "name": "Óleo calcáreo",
    "line": "cosmetico",
    "category": "Higiene personal",
    "description": "Una presentación pensada para el cuidado cotidiano. Información de demostración, sin indicaciones clínicas.",
    "image": "/products/lotion.svg",
    "published": true,
    "mock": true,
    "documents": [],
    "variants": [
      {
        "id": "DS-3-1",
        "productId": "demo-3",
        "size": "250 ml",
        "price": 780000,
        "stock": 24
      },
      {
        "id": "DS-3-2",
        "productId": "demo-3",
        "size": "500 ml",
        "price": 1560000,
        "stock": 34
      }
    ]
  },
  {
    "id": "demo-4",
    "slug": "aceite-almendras",
    "name": "Aceite de almendras",
    "line": "cosmetico",
    "category": "Cuidado corporal",
    "description": "Una opción para explorar la línea de cuidado personal. La composición definitiva se valida con Dasipa.",
    "image": "/products/oil.svg",
    "published": true,
    "mock": true,
    "documents": [],
    "variants": [
      {
        "id": "DS-4-1",
        "productId": "demo-4",
        "size": "100 ml",
        "price": 690000,
        "stock": 24
      },
      {
        "id": "DS-4-2",
        "productId": "demo-4",
        "size": "250 ml",
        "price": 1380000,
        "stock": 34
      }
    ]
  },
  {
    "id": "demo-5",
    "slug": "manteca-cacao",
    "name": "Bálsamo labial",
    "line": "cosmetico",
    "category": "Cuidado facial",
    "description": "Formato compacto de la colección demostrativa de cuidado personal.",
    "image": "/products/cream.svg",
    "published": true,
    "mock": true,
    "documents": [],
    "variants": [
      {
        "id": "DS-5-1",
        "productId": "demo-5",
        "size": "10 g",
        "price": 320000,
        "stock": 0
      },
      {
        "id": "DS-5-2",
        "productId": "demo-5",
        "size": "20 g",
        "price": 640000,
        "stock": 0
      }
    ]
  },
  {
    "id": "demo-6",
    "slug": "agua-oxigenada",
    "name": "Agua oxigenada",
    "line": "medicinal",
    "category": "Soluciones",
    "description": "Producto del catálogo de referencia para consulta comercial de droguerías. Sin recomendaciones de uso en esta demostración.",
    "image": "/products/solution.svg",
    "published": true,
    "mock": true,
    "documents": [],
    "variants": [
      {
        "id": "DS-6-1",
        "productId": "demo-6",
        "size": "100 ml",
        "price": 240000,
        "stock": 24
      },
      {
        "id": "DS-6-2",
        "productId": "demo-6",
        "size": "250 ml",
        "price": 480000,
        "stock": 34
      }
    ]
  },
  {
    "id": "demo-7",
    "slug": "solucion-fisiologica",
    "name": "Solución fisiológica",
    "line": "medicinal",
    "category": "Soluciones",
    "description": "Presentación ilustrativa del canal medicinal. Solicitá la documentación técnica aprobada al laboratorio.",
    "image": "/products/solution.svg",
    "published": true,
    "mock": true,
    "documents": [],
    "variants": [
      {
        "id": "DS-7-1",
        "productId": "demo-7",
        "size": "100 ml",
        "price": 260000,
        "stock": 24
      }
    ]
  },
  {
    "id": "demo-8",
    "slug": "vaselina-solida",
    "name": "Vaselina sólida",
    "line": "medicinal",
    "category": "Semisólidos",
    "description": "Producto de referencia para el canal comercial. Clasificación y presentación sujetas a validación técnica.",
    "image": "/products/cream.svg",
    "published": true,
    "mock": true,
    "documents": [],
    "variants": [
      {
        "id": "DS-8-1",
        "productId": "demo-8",
        "size": "60 g",
        "price": 360000,
        "stock": 24
      },
      {
        "id": "DS-8-2",
        "productId": "demo-8",
        "size": "500 g",
        "price": 720000,
        "stock": 34
      }
    ]
  }
];

