import React from 'react';
import styled from 'styled-components';

const MainContainerComponent = styled.div`
  box-sizing: border-box;
  background-color: #eaecef;
  width: 50rem;
  height: 43rem;
  margin: 10rem auto;
  margin-top: 2rem;
  margin-right: 16rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const MainContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <MainContainerComponent>{children}</MainContainerComponent>;
};

export default MainContainer;
