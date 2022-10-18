import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Utils/Product'
import '../assets/scss/cartProduct.scss';

interface Props {
	product: Product
}

function CartProduct(props: Props) {

	const image = require('../assets/images/products/' + props.product.options[0].imageUrl)

	return (
		<div className='cart-product'>
			<div className="image-container col-2">
				<img src={image} alt="" />
			</div>
			<div className="name col-4">
				<Link to='/'>{props.product.name}</Link>
				<Link to="/">Xem lại</Link>
			</div>
			<div className="amount col-3">
				<div className="amount-container">
					<i className="fa-solid fa-plus"></i>
					<span>{1}</span>
					<i className="fa-solid fa-minus"></i>
				</div>
			</div>
			<div className="price col-3">
				<p>{props.product.options[0].price.toLocaleString()}đ</p>
			</div>
			<i className="fa-solid fa-x delete"></i>
		</div>
	)
}

export default CartProduct