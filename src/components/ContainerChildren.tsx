import styled from 'styled-components';
import React from 'react';
import { ChildrenProps } from '../utils/utils';

const Container = styled.main`
  display: flex;
  width: 90%;
  left: 5rem;
  position: relative;
  justify-content: space-evenly;
  top: 3rem;
`;

const ContainerChildren = ({ children }: ChildrenProps) => {
  return <Container>{children}</Container>;
};

export default ContainerChildren;
