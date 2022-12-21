import React from 'react';
import styled from 'styled-components';

const StyledProductImg = styled.div`
  background: center url(${props => props.url});
  box-sizing: border-box;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: ${props => props.height};
  width: ${props => props.width};
  border-bottom: 1px solid black;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.01);
  }
`;

StyledProductImg.defaultProps = {
  height: '25rem',
  width: '100%',
};

const ProductImg = ({ url, height, width }) => {
  return <StyledProductImg url={url} height={height} width={width} />;
};

export default ProductImg;
