import type {Metadata} from 'next';
import {Shell} from '@/components/shell';
import './globals.css';
export const metadata:Metadata={title:{default:'Dasipa · Cuidar está en nuestra naturaleza',template:'%s · Dasipa'},description:'Laboratorio argentino. Productos medicinales, cuidado personal y fabricación para terceros.',robots:{index:false,follow:false},icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="es-AR"><body><Shell>{children}</Shell></body></html>}

