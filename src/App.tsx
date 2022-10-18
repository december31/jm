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

function App(): React.ReactElement {

  const [navbarContents, setNavbarContent] = useState<NavbarContent[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [cartProducts, setCartProducts] = useState<Product[]>([])

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
    const response = await api.get<Product[]>('/cart-products')
    return response;
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

    const getAllCartProducts = async () => {
      const allCartProducts = await retrieveCartProducts()
      if (allCartProducts) {
        setCartProducts(allCartProducts.data)
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
            <Header navbarContents={navbarContents} />
            <Home sliderImages={images} products={products} />
            <Footer />
          </>
        } />
        <Route path='/' element={
          <>
            <Header navbarContents={navbarContents} />
            <Home sliderImages={images} products={products} />
            <Footer />
          </>
        } />
        <Route path='/sale' element={
          <>
            <Header navbarContents={navbarContents} />
            <Sale />
            <Footer />
          </>
        } />
        <Route path='/work' element={
          <>
            <Header navbarContents={navbarContents} />
            <Work />
            <Footer />
          </>
        } />
        <Route path='/play' element={
          <>
            <Header navbarContents={navbarContents} />
            <Play />
            <Footer />
          </>
        } />
        <Route path='/party' element={
          <>
            <Header navbarContents={navbarContents} />
            <Party />
            <Footer />
          </>
        } />
        <Route path='/trend' element={
          <>
            <Header navbarContents={navbarContents} />
            <Trend />
            <Footer />
          </>
        } />
        <Route path='/campaign' element={
          <>
            <Header navbarContents={navbarContents} />
            <Campaign />
            <Footer />
          </>
        } />
        <Route path='/lookbook' element={
          <>
            <Header navbarContents={navbarContents} />
            <LookBook />
            <Footer />
          </>
        } />
        <Route path='/love' element={
          <>
            <Header navbarContents={navbarContents} />
            <Love />
            <Footer />
          </>
        } />
        <Route path='/cart' element={
          <>
            <Header navbarContents={navbarContents} />
            <Cart products={cartProducts}/>
            <Footer />
          </>
        } />
        <Route path='/account' element={
          <>
            <Header navbarContents={navbarContents} />
            <Account />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
