import {PageHead} from '@/components/dasipa-ui';import {QuoteList} from '@/components/quote-list';
export default function Page(){return <div className="container section"><PageHead title="Mis cotizaciones" text="Seguí tus solicitudes y las respuestas del equipo comercial."/><div className="stack"><QuoteList/></div></div>}
