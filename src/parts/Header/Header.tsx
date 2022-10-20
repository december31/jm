import React from 'react';

import TopHeader from "./TopHeader";
import Logo from './Logo';
import HeaderNavbar from './HeaderNavbar';
import IconHeader from './IconHeader';
import BottomHeader from './HeaderBottom';
import NavbarContent from './NavbarContent';

import '../../assets/scss/header.scss'

interface Props {
	navbarContents: NavbarContent[]
	cartProductsCount: number
}

class Header extends React.Component<Props> {

	render() {
		return (
			<div className="header">
				<TopHeader></TopHeader>
				<div className="main-header">
					<div className='header-container'>
						<Logo />
						<HeaderNavbar navbarContents={this.props.navbarContents} />
						<IconHeader cartProductsCount={this.props.cartProductsCount}/>
					</div>
				</div>
				<BottomHeader />
			</div>
		)
	}
}

export default Header;