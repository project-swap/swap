import styled from 'styled-components';
import React from 'react';

const Container = styled.main`
  display: flex;
  width: 100%;
  position: relative;
  right: 4rem;
  justify-content: space-evenly;
  top: 3rem;
`;

const ContainerChildren = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <Container>{children}</Container>;
};

export default ContainerChildren;
