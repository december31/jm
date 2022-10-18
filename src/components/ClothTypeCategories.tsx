import { Link } from 'react-router-dom'

import dress from '../assets/images/dress.png'
import shirt from '../assets/images/shirt.png'
import skirt from '../assets/images/skirt.png'
import pans from '../assets/images/pans.png'
import coat from '../assets/images/coat.png'

function ClothTypeCategories(): React.ReactElement {
	return (
		<div className='cloth-type-categories'>
			<div className='categories-container'>
				<div className='category-item'>
					<Link to="/dresses">
						<img src={dress} alt='dress' />
						<h1>đầm</h1>
					</Link>
				</div>
				<div className='category-item'>
					<Link to="/shirts">
						<img src={shirt} alt='shirt' />
						<h1>áo</h1>
					</Link>
				</div>
				<div className='category-item'>
					<Link to="/pans">
						<img src={pans} alt='pans' />
						<h1>quần</h1>
					</Link>
				</div>
				<div className='category-item'>
					<Link to="/skirts">
						<img src={skirt} alt='skirt' />
						<h1>chân váy</h1>
					</Link>
				</div>
				<div className='category-item'>
					<Link to="/coat">
						<img src={coat} alt='coat' />
						<h1>áo khoác</h1>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ClothTypeCategories;