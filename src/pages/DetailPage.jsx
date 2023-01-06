import React from 'react';
import BackgroundBlur from '../components/BackgroundBlur';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import SalesProductList from '../components/SalesProduct/SalesProductList';

const DetailPage = () => {
  return (
    <>
      <NavBar />
      <SalesProductList />
      <BackgroundBlur />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default DetailPage;
