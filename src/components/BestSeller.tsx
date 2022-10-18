import React from 'react'
import Product from '../Utils/Product'
import ProductsList from './ProductsListSlider'

interface Props {
	products: Product[]
}

const BestSeller:React.FC<Props> = (props) => {
	return (
		<div className='best-seller'>
			<h4>SẢN PHẨM BÁN CHẠY</h4>
			<ProductsList products={props.products}/>
		</div>
	)
}

export default BestSeller