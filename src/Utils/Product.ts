import ProductOption from "./ProductOption"

export default interface Product {
	id:number
	name: string
	category: string
	ratting: number
	sold: number
	options: ProductOption[]
}