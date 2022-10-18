import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	content: {
		path: string,
		name: string
	}
}

class NavbarItem extends React.Component<Props> {
	render() {
		return (
			<div className="navbar-item">
				<Link to={this.props.content.path}>
					<p>{this.props.content.name}</p>
				</Link>
			</div>
		)
	}
}

export default NavbarItem;