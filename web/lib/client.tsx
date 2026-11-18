'use client';
import {useEffect,useState} from 'react';
export async function api<T=any>(path:string,body?:unknown,method?:string):Promise<T>{const response=await fetch(path,{method:method||(body===undefined?'GET':'POST'),headers:body===undefined?{}:{'Content-Type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)});const data:any=await response.json();if(!response.ok)throw new Error(data.error||'No pudimos completar la operación.');return data as T;}
export function useData<T>(path:string){const [data,setData]=useState<T|null>(null),[error,setError]=useState(''),[loading,setLoading]=useState(true);function reload(){setLoading(true);api(path).then(setData).catch(e=>setError(e.message)).finally(()=>setLoading(false));}useEffect(()=>{let active=true;setLoading(true);setError('');api(path).then(d=>{if(active)setData(d)}).catch(e=>{if(active)setError(e.message)}).finally(()=>{if(active)setLoading(false)});return()=>{active=false}},[path]);return {data,error,loading,reload};}
export function formValues(form:HTMLFormElement){return Object.fromEntries(new FormData(form).entries())}
export function requestKey(){return crypto.randomUUID()}
export function saveBag(key:string,lines:{sku:string;quantity:number}[]){localStorage.setItem(key,JSON.stringify(lines))}
export function readBag(key:string):{sku:string;quantity:number}[]{try{const v=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(v)?v.filter(x=>typeof x.sku==='string'&&Number.isInteger(x.quantity)&&x.quantity>0):[]}catch{return []}}
export function addBag(key:string,sku:string){const a=readBag(key),line=a.find(x=>x.sku===sku);if(line)line.quantity+=1;else a.push({sku,quantity:1});saveBag(key,a)}

