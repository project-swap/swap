import React from 'react';
import styled from 'styled-components';
import { ComponentForCenterAlignment } from '../common/PublicStyle';

const StyledProductDetailComponent = styled.div`
  width: 120rem;
  height: 60rem;
  border: 3px solid black;
  border-radius: 10px;
  background-color: white;
  margin-top: 5rem;
  display: flex;
`;

const ProductDetailComponent = ({ children }) => {
  return (
    <ComponentForCenterAlignment>
      <StyledProductDetailComponent>{children}</StyledProductDetailComponent>
    </ComponentForCenterAlignment>
  );
};

export default ProductDetailComponent;
