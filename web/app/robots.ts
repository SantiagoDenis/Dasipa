import type {MetadataRoute} from 'next';
// Keep the review environment and mock catalog out of search indexes.
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',disallow:'/'}};}
