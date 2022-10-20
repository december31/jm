import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/cart.scss'

import sky from '../assets/images/cart.png';
import Product from '../Utils/Product';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import CartProduct from '../components/CartProduct';
import CartProductModel from '../Utils/ChoseProduct';
import ChoseProduct from '../Utils/ChoseProduct';

interface Props {
	products: CartProductModel[]
	changeProductAmount: (e: React.MouseEvent, product: ChoseProduct) => void
	deleteProduct: (id: number) => void
}

interface State {
	tempPrice: number
	totalPrice: number
}

class Cart extends React.Component<Props> {

	state: State = {
		tempPrice: 0,
		totalPrice: 0
	}

	totalPrice = () => {
		let tp = 0;
		for (let product of this.props.products) {
			tp += product.amount * product.option.price;
		}
		return tp;
	}

	render() {

		return (
			<div className='cart'>
				<div className="cart-container">
					<div className='sky-topic'>
						<div className="image-container">
							<img src={sky} alt="sky" />
						</div>
						<SearchBar />
					</div>
					<div className='directory'>
						<Link to='/'>Trang chủ</Link> {">"} <Link to='/cart'>Giỏ hàng</Link>
					</div>
					<div className='title'>
						Giỏ hàng của bạn
						<p className='products-count'>Có <b>{this.props.products.length}</b> sản phẩm trong giỏ hàng</p>
					</div>
					<div className='cart-content'>
						<div className='products-list'>
							<div className='products-list-header'>
								<p className='col-2'>hình ảnh</p>
								<p className='col-4'>thông tin</p>
								<p className='col-3'>số lượng</p>
								<p className='col-3'>giá tiền</p>
							</div>
							<div className='products-list-container'>
								{
									this.props.products.map((product, index) =>
										<CartProduct deleteProduct={this.props.deleteProduct} changeProductAmount={this.props.changeProductAmount} key={index} product={product} />)
								}
							</div>
						</div>
						<div className='order-sumary'>
							<div>
								<div className='row'>
									<p className='title'>Tóm tắt đơn hàng</p>
								</div>
								<div className='row'>
									<p className='temp-counting'> tạm tính</p><span>{this.totalPrice().toLocaleString()}đ</span>
								</div>
								<div className='row'>
									<p className='total-counting'> tổng tiền</p><span>{this.totalPrice().toLocaleString()}đ</span>
								</div>
								<Button to='/' className='order' name='tiến hành đặt hàng' />
								<Button to='/' className='buy-more' name='mua thêm sản phẩm' />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Cart;