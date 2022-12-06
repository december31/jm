import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import api from './api/api';
import Header from './parts/Header/Header';
import NavbarContent from './parts/Header/NavbarContent';

import './assets/scss/style.scss';
import Play from './pages/categories/Play';
import Home from './pages/Home';
import Footer from './parts/Footer/Footer';
import Product from './Utils/Product';
import Work from './pages/categories/Work';
import Sale from './pages/categories/Sale';
import Party from './pages/categories/Party';
import Trend from './pages/categories/Trend';
import Campaign from './pages/categories/Campaign';
import Account from './pages/Account';
import Cart from './pages/Cart';
import LookBook from './pages/categories/LookBook';
import Love from './pages/Love';
import CartProduct from './Utils/ChoseProduct';
import ChoseProduct from './Utils/ChoseProduct';

function App(): React.ReactElement {

  const [navbarContents, setNavbarContent] = useState<NavbarContent[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
  const [cartProductsCount, setCartProductsCount] = useState<number>(0)

  const sliderImages = require.context('./assets/images/', false, /slider/);

  const images = sliderImages.keys().map(key =>
    require('./assets/images/' + key.replace('./', ''))
  );

  const retriveNavbarContents = async () => {
    const response = await api.get<NavbarContent[]>('/navbarContents');
    return response;
  }

  const retrieveProducts = async () => {
    const response = await api.get<Product[]>('/products')
    return response
  }

  const retrieveCartProducts = async () => {
    const response = await api.get<CartProduct[]>('/cart-products')
    return response;
  }

  const getAllCartProducts = async () => {
    const allCartProducts = await retrieveCartProducts()
    if (allCartProducts) {
      setCartProducts(allCartProducts.data)
      let count = 0;
      allCartProducts.data.forEach(prd => {
        count += prd.amount;
      });
      setCartProductsCount(count)
    }
  }
  const addToCart = async (e: React.MouseEvent, product: Product, optionSelected: number) => {
    e.stopPropagation();
    e.preventDefault();
    let prd: ChoseProduct = {
      id: product.id,
      name: product.name,
      category: product.category,
      ratting: product.ratting,
      sold: product.sold,
      option: product.options[optionSelected],
      amount: 1
    }

    let isPut: boolean = false;
    for (let product of cartProducts) {
      console.log(product.id + " - " + prd.id)
      if (product.id === prd.id) {
        prd.amount += product.amount;
        const response = await api.put(`/cart-products/${product.id}`, prd);
        console.log(response);
        isPut = true;

        getAllCartProducts()
        break;
      }
    }
    console.log(isPut)
    if (!isPut) {
      const response = await api.post(`/cart-products`, prd);
      console.log(response);
      getAllCartProducts()
    }
    alert("Đã thêm vào giỏ hàng")
  }

  const changeProductAmount = async (e: React.MouseEvent, product: ChoseProduct) => {
    e.preventDefault()
    e.stopPropagation()
    const response = await api.put(`/cart-products/${product.id}`, product);
    getAllCartProducts()
  }

  const deleteProduct = async (id: number) => {
    const response = await api.delete(`/cart-products/${id}`);
    getAllCartProducts();
  }

  useEffect(() => {
    const getAllNavbarContent = async () => {
      const allNavbarContents = await retriveNavbarContents()
      if (allNavbarContents) {
        setNavbarContent(allNavbarContents.data)
      }
    }

    const getAllProducts = async () => {
      const allProducts = await retrieveProducts()
      if (allProducts) {
        setProducts(allProducts.data)
      }
    }

    getAllNavbarContent()
    getAllProducts()
    getAllCartProducts()
  }, [])

  const pages = [

  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <Home addToCart={addToCart} sliderImages={images} products={products} />
            <Footer />
          </>
        } />
        <Route path='/' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <Home addToCart={addToCart} sliderImages={images} products={products} />
            <Footer />
          </>
        } />
        <Route path='/sale' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <Sale />
            <Footer />
          </>
        } />
        <Route path='/work' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <Work />
            <Footer />
          </>
        } />
        <Route path='/play' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <Play />
            <Footer />
          </>
        } />
        <Route path='/party' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <Party />
            <Footer />
          </>
        } />
        <Route path='/trend' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <Trend />
            <Footer />
          </>
        } />
        <Route path='/campaign' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <Campaign />
            <Footer />
          </>
        } />
        <Route path='/lookbook' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <LookBook />
            <Footer />
          </>
        } />
        <Route path='/love' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <Love />
            <Footer />
          </>
        } />
        <Route path='/cart' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <Cart deleteProduct={deleteProduct} changeProductAmount={changeProductAmount} products={cartProducts} />
            <Footer />
          </>
        } />
        <Route path='/account' element={
          <>
            <Header cartProductsCount={cartProductsCount} navbarContents={navbarContents} />
            <Account />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
