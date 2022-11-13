import React from 'react';
import styled from 'styled-components';
import ProductCardList from './ProductCardList';
import ProductListTap from './ProductListTap';

const ProductListComponent = styled.div`
  margin: 3rem 0;
  width: 80%;
  padding: 2rem 5rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductList = () => {
  return (
    <ProductListComponent>
      <ProductListTap />
      <ProductCardList />
    </ProductListComponent>
  );
};

export default ProductList;
