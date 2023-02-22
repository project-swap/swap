import styled from 'styled-components';
import React from 'react';

const ExchangeContainer = styled.main`
  display: flex;
  width: 90%;
  position: relative;
  justify-content: space-evenly;
  top: 3rem;
`;

const ExchangeContainerChildren = () => {
  return <ExchangeContainer></ExchangeContainer>;
};

export default ExchangeContainerChildren;
