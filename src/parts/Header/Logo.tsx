import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Logo = () => {
	return (
		<div className="header-logo">
			<Link to="/home">
				<img src={logo} alt='logo' />
			</Link>
		</div>
	)
}

export default Logo;