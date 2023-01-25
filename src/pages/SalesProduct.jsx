import React from 'react';

import Footer from '../components/common/Footer.tsx';
import NavBar from '../components/common/NavBar';
import SalesProductList from '../components/SalesProduct/SalesProductList';

const Swap = () => {
  return (
    <>
      <NavBar />
      <SalesProductList />
      <Footer />
    </>
  );
};

export default Swap;
