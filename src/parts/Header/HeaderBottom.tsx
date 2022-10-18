import { Link } from 'react-router-dom';
import mapIcon from '../../assets/images/map_icon.png';
import tructIcon from '../../assets/images/truck_icon.png';
import noteIcon from '../../assets/images/note_icon.png';

const HeaderBottom = () => {
	return (
		<div className="header-bottom">
			<ul>
				<li>
					<Link to="/shop-system">
						<img src={mapIcon} alt="" />
						<p>Hệ thống cửa hàng</p>
					</Link>
				</li>
				<li>
					<Link to="/transport-information">
						<img src={tructIcon} alt="" />
						<p>Thông tin vận chuyển</p>
					</Link>
				</li>
				<li>
					<Link to="/points-policy">
						<img src={noteIcon} alt="" />
						<p>Chính sách tích điểm</p>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default HeaderBottom;