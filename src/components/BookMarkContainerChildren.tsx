import styled from 'styled-components';
import React from 'react';

const Container = styled.main`
  display: flex;
  width: 90%;
  position: relative;
  justify-content: space-evenly;
  top: 3rem;
`;

const BookMarkContainerChildren = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <Container>{children}</Container>;
};

export default BookMarkContainerChildren;
