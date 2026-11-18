export type Variant={id:string;productId:string;size:string;price:number;stock:number};
export type Product={id:string;slug:string;name:string;line:'medicinal'|'cosmetico';category:string;description:string;image:string;published:boolean;mock:boolean;documents:{name:string;url:string}[];variants:Variant[]};
export type User={id:string;email:string;name:string;company:string;taxId:string;role:'customer'|'b2b'|'admin';status:'pending'|'approved'|'rejected'|'suspended';verified:number};
export type Context={request:Request;url:URL;body:Record<string,any>;user:User|null};
export type Handler=(ctx:Context)=>Promise<Response|undefined>;
export type Line={sku:string;quantity:number;name:string;size:string;price:number};

