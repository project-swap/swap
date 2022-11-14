import React from 'react';
import styled from 'styled-components';
import { Component } from '../common/public/PublicStyle';
import SalesProductCardGroup from './SalesProductCardGroup';
import SalesProductListTap from './SalesProductListTap';

const SalesProductListComponent = styled.div`
  margin: 3rem 0;
  width: 80%;
  padding: 2rem 5rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SalesProductList = () => {
  return (
    <Component>
      <SalesProductListComponent>
        <SalesProductListTap />
        <SalesProductCardGroup />
      </SalesProductListComponent>
    </Component>
  );
};

export default SalesProductList;
