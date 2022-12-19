import styled from 'styled-components';
import React from 'react';

const Container = styled.main`
  display: flex;
  width: 120%;
  position: relative;
  right: 4rem;
  .check {
    flex-direction: column;
    padding: 3rem 1rem;
    position: relative;
  }
  .title {
    width: 7rem;
    margin-top: 3rem;
  }
`;

const ContainerChildren = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerChildren;
