import React, { ReactNode } from 'react';
import styled from 'styled-components';

const MainContainerComponent = styled.div`
  box-sizing: border-box;
  background-color: #eaecef;
  width: 50rem;
  height: 43rem;
  display: flex;
  flex-direction: column;
`;

const MainContainer = ({ children }: { children: ReactNode }) => {
  return <MainContainerComponent>{children}</MainContainerComponent>;
};

export default MainContainer;
