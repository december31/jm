import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../assets/scss/cartProduct.scss';
import ChoseProduct from '../Utils/ChoseProduct';

interface Props {
	product: ChoseProduct
	changeProductAmount: (e: React.MouseEvent, product: ChoseProduct) => void
	deleteProduct: (id: number) => void
}

function CartProduct(props: Props) {

	const image = require('../assets/images/products/' + props.product.option.imageUrl)
	const [product, setProduct] = useState<ChoseProduct>(props.product);

	const increaseAmount = (e: React.MouseEvent) => {
		const newprd = product;
		newprd.amount++;
		setProduct(newprd)
		setProduct({ ...product, amount: product.amount })
		props.changeProductAmount(e, product);
	}
	const decreaseAmount = (e: React.MouseEvent) => {
		if (product.amount > 0) {
			const newprd = product;
			newprd.amount--;
			setProduct(newprd)
			setProduct({ ...product, amount: product.amount })
			props.changeProductAmount(e, newprd);
		}
	}

	const deleteProduct = () => {
		props.deleteProduct(product.id);
	}

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
					<i className="fa-solid fa-minus" onClick={(e) => { decreaseAmount(e) }}></i>
					<span>{product.amount}</span>
					<i className="fa-solid fa-plus" onClick={(e) => { increaseAmount(e) }}></i>
				</div>
			</div>
			<div className="price col-3">
				<p>{(product.option.price * product.amount).toLocaleString()}đ</p>
			</div>
			<i className="fa-solid fa-x delete" onClick={() => { deleteProduct() }}></i>
		</div>
	)
}

export default CartProduct