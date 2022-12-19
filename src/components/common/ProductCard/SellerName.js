import React from 'react';
import styled from 'styled-components';

const StyledSellerName = styled.span`
  margin-right: ${props => props.marginRight};
`;

StyledSellerName.defaultProps = {
  marginRight: '0.5rem',
};

const SellerName = ({ name, marginRight }) => {
  return <StyledSellerName marginRight={marginRight}>{name}</StyledSellerName>;
};

export default SellerName;
