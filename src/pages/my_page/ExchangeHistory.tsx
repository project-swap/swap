import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/SideBar';
import MainContainer from '../../components/common/MainContainer';
import NavBar from '../../components/common/NavBar';
import { PageWrap } from './Profile';
import FilteredPost from '../../components/my_page/FilteredPost';
import SelectedFilter from '../../components/my_page/SelectedFilter';

const SwapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70rem;
  margin-top: 2rem;
  border: 1px solid black;
`;

const Title = styled.h3`
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

const ExchangeHistory = () => {
  return (
    <PageWrap>
      <NavBar />
      <SwapContainer>
        <SideBar />
        <MainContainer>
          <Title>
            교환목록
            <FilteredPost />
            <SelectedFilter />
          </Title>
          <Content>
            <span>교환목록이 없습니다.</span>
          </Content>
        </MainContainer>
      </SwapContainer>
    </PageWrap>
  );
};

export default ExchangeHistory;
