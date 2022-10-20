import React from 'react'
import Product from '../Utils/Product'
import ProductsList from './ProductsListSlider'

interface Props {
	products: Product[]
	addToCart: (e: React.MouseEvent, product: Product, optionSelected: number) => void
}

const BestSeller:React.FC<Props> = (props) => {
	return (
		<div className='best-seller'>
			<h4>SẢN PHẨM BÁN CHẠY</h4>
			<ProductsList addToCart={props.addToCart} products={props.products}/>
		</div>
	)
}

export default BestSeller