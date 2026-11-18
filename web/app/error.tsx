'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <div className="container section narrow" role="alert"><h1>No pudimos cargar esta sección</h1><p>Intentá nuevamente. Si el problema continúa, contactanos indicando qué estabas intentando hacer.</p><button className="button" onClick={reset}>Reintentar</button><p><a href="/">Volver al inicio</a></p></div>}
