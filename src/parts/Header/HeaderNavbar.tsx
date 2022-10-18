import NavbarContent from './NavbarContent';
import NavbarItem from './NavbarItem';


interface Props {
	navbarContents: NavbarContent[]
}

const HeaderNavbar = (props: Props) => {

	const rederedNavbarItems = props.navbarContents.map(
		(content: NavbarContent) => <NavbarItem key={content.id} content={content} />
	);

	return (
		<div className='navbar'>
			{rederedNavbarItems}
		</div>
	)
}

export default HeaderNavbar;