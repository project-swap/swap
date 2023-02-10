import React from 'react';
import styled from 'styled-components';

interface SellerNameProps {
  name: string;
  marginRight?: string | undefined;
}

const StyledSellerName = styled.span<{ marginRight: string | undefined }>`
  margin-right: ${props => props.marginRight};
`;

StyledSellerName.defaultProps = {
  marginRight: '0.5rem',
};

const SellerName = ({ name, marginRight }: SellerNameProps): JSX.Element => {
  return <StyledSellerName marginRight={marginRight}>{name}</StyledSellerName>;
};

export default SellerName;
