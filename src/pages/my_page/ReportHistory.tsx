import React from 'react';
import SideBar from '../../components/SideBar';
import MainContainer from '../../components/common/MainContainer';
import styled from 'styled-components';

const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: -40rem auto;
`;

export const Title = styled.h3`
  font-weight: 600;
  margin: 2.5rem 5rem;
  font-size: 1.5rem;
  display: flex;
  position: relative;
  top: -3rem;
  right: 8rem;
`;
const ExchangeContainer = styled.main`
  display: flex;
  width: 90%;
  position: relative;
  justify-content: space-evenly;
  top: 3rem;
`;

const Content = styled.h4`
  margin: 12rem auto;
  opacity: 0.4;
`;

const ReportHistory = () => {
  return (
    <SwapContainer>
      <SideBar />
      <MainContainer>
        <ExchangeContainer>
          <Title>신고내역</Title>
        </ExchangeContainer>
        <Content>
          <span>신고 목록이 없습니다.</span>
        </Content>
      </MainContainer>
    </SwapContainer>
  );
};

export default ReportHistory;
