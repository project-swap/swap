import { FiCheckSquare } from 'react-icons/fi';
import React from 'react';
import MainContainer from '../../components/common/MainContainer';
import SideBar from '../../components/SideBar';
import styled from 'styled-components';

const BookMarkContainer = styled.div`
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
  left: 4rem;
`;

const Content = styled.h4`
  margin: 12rem auto;
  opacity: 0.4;
`;

const Container = styled.main`
  display: flex;
  width: 90%;
  position: relative;
  justify-content: space-evenly;
  top: 3rem;
`;

const BookMarkPage = () => {
  return (
    <BookMarkContainer>
      <SideBar />
      <MainContainer>
        <Container>
          <Title>북마크</Title>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              gap: '1rem',
            }}
          >
            <FiCheckSquare className="check" />
            <h4 className="title">최신순</h4>
            <FiCheckSquare />
            <h4 className="title">오래된순</h4>
            <FiCheckSquare />
            <h4 className="title">교환중</h4>
            <FiCheckSquare />
          </div>
          <h4 className="title">교환 완료</h4>
        </Container>
        <Content>
          <span>교환목록이 없습니다.</span>
        </Content>
      </MainContainer>
    </BookMarkContainer>
  );
};

export default BookMarkPage;
