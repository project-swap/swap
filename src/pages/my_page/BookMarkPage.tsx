import React from 'react';
import MainContainer from '../../components/common/MainContainer';
import SideBar from '../../components/SideBar';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar';
import { PageWrap } from './Profile';
import FilteredBookMark from '../../components/my_page/FilteredBookMark';

const BookMarkContainer = styled.div`
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

const BookMarkPage = () => {
  return (
    <PageWrap>
      <NavBar />
      <BookMarkContainer>
        <SideBar />
        <MainContainer>
          <Title>
            북마크
            <FilteredBookMark />
          </Title>
          <Content>
            <span>교환목록이 없습니다.</span>
          </Content>
        </MainContainer>
      </BookMarkContainer>
    </PageWrap>
  );
};

export default BookMarkPage;
