import Product from "./Product";
import ProductOption from "./ProductOption";

export default interface CartProduct {
	id:number
	name: string
	category: string
	ratting: number
	sold: number
	option: ProductOption
	amount: number
}