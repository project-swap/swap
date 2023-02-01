import styled from 'styled-components';
import React from 'react';

const ExchangeContainer = styled.main`
  display: flex;
  width: 90%;
  left: 3rem;
  position: relative;
  justify-content: space-evenly;
  top: 3rem;
`;

const ExchangeContainerChildren = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <ExchangeContainer>{children}</ExchangeContainer>;
};

export default ExchangeContainerChildren;
