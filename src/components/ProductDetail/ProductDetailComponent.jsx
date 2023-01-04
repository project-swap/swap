import React from 'react';
import styled from 'styled-components';
import { ComponentForCenterAlignment } from '../common/PublicStyle';
import ExitBtn from './ExitBtn';

const StyledProductDetailComponent = styled.div`
  width: 50rem;
  height: 60rem;
  border: 3px solid black;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 10%;
  z-index: 1;
`;

const ProductDetailComponent = ({ children }) => {
  return (
    <ComponentForCenterAlignment>
      <ExitBtn />
      <StyledProductDetailComponent>{children}</StyledProductDetailComponent>
    </ComponentForCenterAlignment>
  );
};

export default ProductDetailComponent;
