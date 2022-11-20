import React from 'react';
import styled from 'styled-components';
import SalesProductCard from './SalesProductCard';

const SalesProductCardListGroupComponent = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SalesProductCardGroup = () => {
  return (
    <SalesProductCardListGroupComponent>
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
      <SalesProductCard />
    </SalesProductCardListGroupComponent>
  );
};

export default SalesProductCardGroup;
