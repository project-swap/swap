import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import ProductList from '../components/Swap/ProductList';

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Swap = () => {
  return (
    <>
      <NavBar />
      <Component>
        <ProductList />
      </Component>
      <Footer />
    </>
  );
};

export default Swap;
