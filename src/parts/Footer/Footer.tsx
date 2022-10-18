import { Link } from 'react-router-dom';

import momoLogo from '../../assets/images/logo_momo.png';
import VNPayLogo from '../../assets/images/logo-vnpay.png';

import '../../assets/scss/footer.scss'

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer-main">
					<div className="column about">
						<div className="title">
							<p>jm dress design</p>
						</div>
						<div className="content">
							<ul>
								<li><Link to="/">Giới thiệu</Link></li>
								<li><Link to="/">Tin tức</Link></li>
								<li><Link to="/">Hệ thống cửa hàng</Link></li>
								<li><Link to="/">Thông tin tuyển dụng</Link></li>
								<li><Link to="/">Liên hệ hợp tác kinh doanh</Link></li>
							</ul>
						</div>
					</div>
					<div className="column contact">
						<div className="title">
							<p>liên kết với chúng tôi</p>
						</div>
						<div className="content">
							<ul>
								<li><a href="/"><i style={{color: "#49B1F2"}} className="fa-brands fa-facebook"></i>Facebook</a></li>
								<li><a href="/"><i style={{color: "#D93644"}} className="fa-brands fa-instagram"></i>Instagram</a></li>
								<li><a href="/"><i style={{color: "#f00"}} className="fa-brands fa-youtube"></i>Youtube</a></li>
								<li><a href="/"><i style={{color: "#D9B26A"}} className="fa-solid fa-envelope"></i>Email:marketing@jm.com.vn</a></li>
							</ul>
						</div>
					</div>
					<div className="column customer-service">
						<div className="title">
							<p>chăm sóc khách hàng</p>
						</div>
						<div className="content">
							<ul>
								<li><Link to="/">Chính sách vận chuyển</Link></li>
								<li><Link to="/">Chính sách tích điểm</Link></li>
								<li><Link to="/">Chính sách đổi trả hàng</Link></li>
								<li><Link to="/">Chế độ bảo hành trọn đời</Link></li>
							</ul>
						</div>
					</div>
					<div className='column send-mail'>
						<div className='title'>
							<p>Đăng ký nhận email ưu đãi từ jm</p>
						</div>
						<div className='content'>
							<div className='email-input-field'>
								<input type="email" name="email" value="" placeholder='Nhập email của bạn' onChange={() => {}}/>
								<button type="button">GỬI NGAY</button>
							</div>
							<p>Bằng cách nhấp vào nút
								<Link to="/"> ĐĂNG KÝ </Link>,
								bạn đồng ý với Chính sách bảo mật và cookie của chúng tôi.
								Vui lòng
								<Link to="/sign-in"> ĐĂNG NHẬP </Link>
								khi bạn đã có tài khoản.</p>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="copyright">
						©2009-2021 JM All Rights Reserved
					</div>
					<div className="payment-method">
						Chúng tôi nhận thanh toán qua:
						<img src={momoLogo} alt="momo" />
						<img src={VNPayLogo} alt="vnpay" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;