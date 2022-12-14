import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api/api';
import Product from '../Utils/Product';

interface Props {
	product: Product
	addToCart: (e: React.MouseEvent, product: Product, optionSelected: number) => void
}

function ProductCard(props: Props) {

	const { product } = props

	const [optionSelected, setOptionSelected] = useState<number>(0);
	const [price, setPrice] = useState<number>(product.options[0].price);
	const [imageUrl, setImageUrl] = useState<string>(require(`../assets/images/products/${product.options[0].imageUrl}`));

	const colorOptions = product.options.map((option, index) => {
		return (
			<li style={{
				border: optionSelected === index ? "1px solid" : "none"
			}}
				key={index}
				value={index}
				onMouseEnter={() => {
					setOptionSelected(index)
					setPrice(option.price)
					setImageUrl(require(`../assets/images/products/${option.imageUrl}`))
				}}
			>
				<i style={{ backgroundColor: `${option.color}` }}></i>
			</li>
		)
	})

	return (
		<div className='product-card'>
			<div className='card-container'>
				<Link to={`/product/${product.id}`}>
					<div className='image-container'>
						<img src={imageUrl} alt="product" />
						<div className='add-to-cart' onClick={(e) => {
							props.addToCart(e, product, optionSelected)
						}}>
							<i className="fa-solid fa-cart-plus"></i>
						</div>
					</div>
					<div className='details'>
						<h2>{product.name}</h2>
					</div>
				</Link>
				<ul className='option'>
					{colorOptions}
					<li className='add-to-favorite'><i className="fa-regular fa-heart"></i></li>
				</ul>
				<div className='price'>
					<p>{price.toLocaleString()} đ</p>
				</div>
				<div className='bottom-details'>
					<div className='ratting'>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<span>({product.ratting})</span>
					</div>
					<p className='sold-count'>
						({product.sold} đã bán)
					</p>
				</div>
			</div>
		</div>
	)
}

export default ProductCard