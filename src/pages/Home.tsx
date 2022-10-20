import React from 'react';
import BestSeller from '../components/BestSeller';
import ClothTypeCategories from '../components/ClothTypeCategories';
import Collections from '../components/Collections';
import Slider from '../components/Slider';
import Product from '../Utils/Product';

import '../assets/scss/home.scss'

interface Props {
	products: Product[]
	sliderImages: string[]
	addToCart: (e: React.MouseEvent, product: Product, optionSelected: number) => void
}

class Home extends React.Component<Props> {
	render() {
		return (
			<div className='home'>
				<div className='home-container'>
					<Slider images={this.props.sliderImages} />
					<ClothTypeCategories />
					<Collections images={this.props.sliderImages} />
					<BestSeller addToCart={this.props.addToCart} products={this.props.products}/>
				</div>
			</div>
		)
	}
}

export default Home;