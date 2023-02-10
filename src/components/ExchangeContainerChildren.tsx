import styled from 'styled-components';
import React from 'react';
import { ChildrenProps } from '../utils/utils';

const ExchangeContainer = styled.main`
  display: flex;
  width: 90%;
  position: relative;
  justify-content: space-evenly;
  top: 3rem;
`;

const ExchangeContainerChildren = ({ children }: ChildrenProps) => {
  return <ExchangeContainer>{children}</ExchangeContainer>;
};

export default ExchangeContainerChildren;
