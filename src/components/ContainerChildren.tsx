import styled from 'styled-components';
import React from 'react';

const Container = styled.main`
  display: flex;
  width: 90%;
  left: 5rem;
  position: relative;
  justify-content: space-evenly;
  top: 3rem;
`;

const ContainerChildren = () => {
  return <Container></Container>;
};

export default ContainerChildren;
