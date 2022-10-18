import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
	images: string[]
}

function Collections(props: Props): React.ReactElement {
	const collections = props.images.map((image, index) => {
			return (
				<div key={index} className='image-container'>
					<Link to="/collection">
						<img src={image} alt="collection" />
					</Link>
				</div>
			)
		})

	return (
		<div className='collections'>
			<div className='collections-container'>
				{collections}
			</div>
		</div>
	)
}

export default Collections;