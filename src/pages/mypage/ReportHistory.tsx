import React from 'react';
import SideBar from '../../components/SideBar';
import ContentChildren from '../../components/ContentChildren';
import MainContainer from '../../components/common/MainContainer';
import styled from 'styled-components';
import ReportHistoryChildren from '../../components/ReportHistoryChildren';

const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: -40rem auto;
`;

const Title = styled.h3`
  font-weight: 600;
  margin: 2.5rem 5rem;
  font-size: 1.5rem;
  display: flex;
  position: relative;
  top: -3rem;
  right: 15rem;
`;

const ReportHistory = () => {
  return (
    <SwapContainer>
      <SideBar />
      <MainContainer>
        <ReportHistoryChildren>
          <Title>신고내역</Title>
        </ReportHistoryChildren>
        <ContentChildren>
          <span>신고 목록이 없습니다.</span>
        </ContentChildren>
      </MainContainer>
    </SwapContainer>
  );
};

export default ReportHistory;
