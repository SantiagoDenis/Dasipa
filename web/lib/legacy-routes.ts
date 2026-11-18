// Proposed legacy mapping; validate against the final crawl before DNS cutover.
export const legacyRoutes:Record<string,string>={
 '/index.html':'/','/index.php':'/','/nosotros':'/empresa','/laboratorio':'/empresa',
 '/certificaciones':'/calidad','/productos-cosmeticos':'/productos?line=cosmetico',
 '/productos-medicinales':'/productos?line=medicinal','/servicios':'/fabricacion',
};

