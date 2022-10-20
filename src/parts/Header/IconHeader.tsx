import { Link } from 'react-router-dom';

interface Props {
	cartProductsCount: number
}

const HeaderIcon = (props: Props) => {
	return (
		<div className="icon-header">
			<ul>
				<li>
					<Link to="/love">
						<i className="far fa-heart"></i><span>0</span>
					</Link>
				</li>
				<li>
					<Link to="/cart">
						<i className="fa-solid fa-cart-shopping"></i><span>{props.cartProductsCount}</span>
					</Link>
				</li>
				<li>
					<Link to="/account">
						<i className="far fa-user"></i>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default HeaderIcon;