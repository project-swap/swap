import React from 'react';
import styled from 'styled-components';

const StyledProductImgList = styled.div`
  background: center url('${props => props.url}') no-repeat;
  background-size: contain;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const StyledProductImgBackground = styled.div`
  position: relative;
  background: center url('${props => props.url}');
  background-size: cover;
  width: 660rem;
`;

const ProductImgList = ({ url, children }) => {
  return (
    <StyledProductImgBackground url={url}>
      <StyledProductImgList url={url}>{children}</StyledProductImgList>
    </StyledProductImgBackground>
  );
};

export default ProductImgList;
