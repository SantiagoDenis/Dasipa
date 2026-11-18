import {PageHead,AdminNav} from '@/components/dasipa-ui';import {QuoteList} from '@/components/quote-list';
export default function Page(){return <div className="container section"><AdminNav/><PageHead title="Cotizaciones" text="Respondé a cada droguería y conservá las notas internas en el equipo."/><div className="stack"><QuoteList admin/></div></div>}
