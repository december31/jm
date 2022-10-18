import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

import '../assets/scss/slider.scss'

interface Props {
	images: string[]
}

const Slider: React.FC<Props> = (props) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const rederedSliderImages = props.images.map((image, index) =>
		<div key={index} className="image-container" style={{ width: "1380px" }}>
			<img src={image} alt="" />
		</div>
	)

	const nextSlide = () => {
		if (currentIndex < rederedSliderImages.length - 1) setCurrentIndex(currentIndex + 1);
		else setCurrentIndex(0);
	}

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 2000);
		return () => clearInterval(interval)
	}, [currentIndex])

	return (
		<div className="slider">
			<div className="container">
				<div className="slides" style={{
					width: `${rederedSliderImages.length * 1380}px`,
					height: '432px',
					transform: `translateX(${-currentIndex * 1380}px)`,
					transition: "ease 0.5s"
				}}>
					{rederedSliderImages}
				</div>
			</div>
			<SearchBar />
		</div>
	)
}

// class Slider extends React.Component {
// 	state = {
// 		sliderImages: [],
// 		images: [],
// 		rederedSliderImages: [],
// 		slideIndex: 0
// 	}

// 	constructor(props) {
// 		super(props)
// 		this.state.sliderImages = require.context('../assets/images/', false, /slider/);

// 		this.state.images = this.state.sliderImages.keys().map(key =>
// 			require('../assets/images/' + key.replace('./', ''))
// 		);

// 		this.state.rederedSliderImages = this.state.images.map((image, index) =>
// 			<div key={index} className="image-container" style={{ width: "1380px" }}>
// 				<img src={image} alt="" />
// 			</div>
// 		)
// 		console.log(this);
// 	}

// 	nextSlide() {

// 	}

// 	prevSlide() {

// 	}


// 	render() {
// 		return (
// 			<div className="slider">
// 				<div className="container">
// 					<button type="" onClick={this.prevSlide}>left</button>
// 					<button type="" onClick={this.nextSlide}>right</button>
// 					<div className="slides" style={{ width: "6900px" }}>
// 						{this.state.rederedSliderImages}
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

export default Slider;