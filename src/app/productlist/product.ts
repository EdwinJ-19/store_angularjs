export interface Product{
    id:number | null,
    name: string,
    description:string,
    price:number,
    category:string,
    stock:string,
    image?:string,
}