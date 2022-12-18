import React from 'react';
import styled from 'styled-components';

const StyledProductCardFrame = styled.li`
  width: ${props => props.width}; // props
  height: ${props => props.height}; // props
  border: ${props => props.border}; // props
  border-radius: ${props => props.borderRadius}; // props
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 15px;
  margin: ${props => props.margin};
  transition: all 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    border: 2px solid #000;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 6px 15px;
  }
  list-style: none;
`;

StyledProductCardFrame.defaultProps = {
  width: '23%',
  height: '35rem',
  border: '2px solid #757575',
  borderRadius: '15px',
  margin: '0 1rem 2rem',
};

const ProductCardFrame = ({
  children,
  width,
  height,
  border,
  borderRadius,
  margin,
}) => {
  return (
    <StyledProductCardFrame
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      margin={margin}
    >
      {children}
    </StyledProductCardFrame>
  );
};

export default ProductCardFrame;
