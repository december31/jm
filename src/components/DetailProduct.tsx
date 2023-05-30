import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/detailimg.scss";
import Product from '../Utils/Product';
import  { useState } from 'react'
import ProductCard from './ProductCard'

interface Props {
	product: Product
	addToCart: (e: React.MouseEvent, product: Product, optionSelected: number) => void
}

function DetailProduct() {
    // function DetailProduct(props: Props) {
// const { product } = props

// 	const [optionSelected, setOptionSelected] = useState<number>(0);
// 	const [price, setPrice] = useState<number>(product.options[0].price);
// 	const [imageUrl, setImageUrl] = useState<string>(require(`../assets/images/products/${product.options[0].imageUrl}`));

// 	const colorOptions = product.options.map((option, index) => {
// 		return (
// 			<li style={{
// 				border: optionSelected === index ? "1px solid" : "none"
// 			}}
// 				key={index}
// 				value={index}
// 				onMouseEnter={() => {
// 					setOptionSelected(index)
// 					setPrice(option.price)
// 					setImageUrl(require(`../assets/images/products/${option.imageUrl}`))
// 				}}
// 			>
// 				<i style={{ backgroundColor: `${option.color}` }}></i>
// 			</li>
// 		)
// 	})


  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
          <div className="image">
            <img
              src={require("../assets/images/jm.jpg")}
              className="detailimg"
            />
          </div>
          
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
          <div className="title-head">
            <h3> Đầm cổ đức 2 tầng 2 hàng </h3>
            <div className="information">
              <div className="product-code"> SKU:
                <span>  1KGDSDN</span>
              </div>
              <div className="star-widge">
                <div className="bottom-details">
                  <div className="ratting">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="number-purchase">
                <a href="#" className="rat"> 1 Nhận xét </a>
              </div>
            </div>
            <div className="price-box">955,000</div>
            
            <div className="options">
             <ul className='option'>
					{/* {colorOptions} */}
                    <ul>
                        <li></li>
                    </ul>
					<li className='add-to-favorite'><i className="fa-regular fa-heart"></i></li>
				</ul>
            </div>
            <div className="sizePicker">
             <label className="control-label"> Size :</label>
             <p className="size_req">
                <a href="" className="active" > L </a>
                 <a href="" className="active" > M </a>
                  <a href="" className="active" > S </a>
             </p>
            </div>
            <div className="form-product">
                <div className="form-group">
                    <label> Số lượng : </label>
                   
                    <div className="amount col-3" >
				<div className="amount-container">
					<i className="fa-solid fa-minus" ></i>
					<span className="number">1</span>
					<i className="fa-solid fa-plus"></i>
				</div>
			</div>
                </div>
            </div>
            <div className="btn-mua">
                <a href=""><li className='add-to-favorite'><i className="fa-regular fa-heart tym"></i></li></a>
                <div className="buttonWrapp">
                    <button id="addbo">
                        <span className="add">Thêm vào giỏ hàng</span>
                    </button>
                </div>
                <div className="infor">
                    <span className=""> 1 "cơ sở còn sản phẩm này" </span> 
                
                </div>
            </div>
            <div className="accordion-wrapper">
                <div className="title-content">
                    <h2> Thông tin chi tiết </h2>
                    <i className="fa-solid fa-plus" ></i>
                </div>
            </div>
            <div className="content descriptionProduct">
                <div className="title-content">
                    <h2> Bảng size </h2>
                    <i className="fa-solid fa-plus" ></i>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="starbap-rev-widg">
            <div className="starbap_header">
<h2 className="starbap-title"> Đánh giá sản phẩm  </h2>
<div className=""> 1 đánh giá </div>
            </div>
        </div>
      </div>
    </div>
   
  );
}
export default DetailProduct;
