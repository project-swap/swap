import React from 'react';
import SideBar from '../../components/SideBar';
import MainContainer from '../../components/common/MainContainer';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar';
import { PageWrap } from './Profile';

const SwapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70rem;
  margin-top: 2rem;
  border: 1px solid black;
`;

export const Title = styled.h3`
  font-weight: 600;
  margin: 2.5rem 0;
  font-size: 1.5rem;
  display: flex;
  padding: 0 0 0 2rem;
`;

const Content = styled.h4`
  margin: 12rem auto;
  opacity: 0.4;
`;

const ReportHistory = () => {
  return (
    <PageWrap>
      <NavBar />
      <SwapContainer>
        <SideBar />
        <MainContainer>
          <Title>신고내역</Title>
          <Content>
            <span>신고 목록이 없습니다.</span>
          </Content>
        </MainContainer>
      </SwapContainer>
    </PageWrap>
  );
};

export default ReportHistory;
