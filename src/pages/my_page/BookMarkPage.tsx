import { FiCheckSquare } from 'react-icons/fi';
import React from 'react';
import MainContainer from '../../components/common/MainContainer';
import SideBar from '../../components/SideBar';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar';
import { PageWrap } from './Profile';

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

const BookMarkFilter = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  font-weight: 300;
  font-size: 1rem;
  position: relative;
  left: 3rem;
  height: 1rem;
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
            <BookMarkFilter>
              <FiCheckSquare className="check" />
              <h4 className="title">최신순</h4>
              <FiCheckSquare />
              <h4 className="title">오래된순</h4>
              <FiCheckSquare />
              <h4 className="title">교환중</h4>
              <FiCheckSquare />
              <h4 className="title">교환 완료</h4>
            </BookMarkFilter>
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
