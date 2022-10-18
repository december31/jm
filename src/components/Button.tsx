import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/scss/button.scss'

interface Props {
	name: string
	to: string
	className: string
}

function Button(props: Props) {
	return (
		<div className='button'>
			<Link to="/" className={props.className}>
				{props.name}
			</Link>
		</div>
	)
}

export default Button