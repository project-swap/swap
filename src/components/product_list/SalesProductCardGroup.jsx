import React from 'react';
import styled from 'styled-components';
import SalesProductCard from '../sales_product/SalesProductCard';

const SalesProductCardListGroup = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SalesProductCardGroup = () => {
  return (
    <SalesProductCardListGroup>
      <SalesProductCard />
    </SalesProductCardListGroup>
  );
};

export default SalesProductCardGroup;
