import React, { useState } from 'react'
import Product from '../Utils/Product';
import ProductCard from './ProductCard'

import '../assets/scss/productsListSlider.scss'

interface Props {
	products: Product[]
}

function ProductsListSlider(props: Props) {

	const [currentPosition, setCurrentPosition] = useState<number>(0);

	const onNavigatorChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentPosition(Number(e.target.value))
	}

	const renderedProducts = props.products.map((product, index) =>
		<ProductCard key={index} product={product} />
	)

	const numberOfNavigatorButtons = Math.ceil(renderedProducts.length / 6);

	const navigatorButtons = [];
	for (let i = 0; i < numberOfNavigatorButtons; i++) {
		navigatorButtons.push(
			<input
				defaultChecked={i === 0}
				key={i} type="radio"
				name="navigator"
				value={i}
			/>
		)
	}

	return (
		<div className='products-list-slider'>
			<div className='products-list-container'>
				<div className='products' style={{
					transform: `translateX(${-100 * currentPosition * 1 +
						(renderedProducts.length / (currentPosition * 1 + 1) >= 6 ? 0 :
						Math.round(6 - renderedProducts.length % 6) * 100/6)}%)`
				}}>
					{renderedProducts}
				</div>
				<div className='navigator' onChange={onNavigatorChanges}>
					{navigatorButtons}
				</div>
			</div>
		</div>
	)
}

export default ProductsListSlider