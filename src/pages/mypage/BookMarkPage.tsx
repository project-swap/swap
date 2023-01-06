import { FiCheckSquare } from 'react-icons/fi';
import React from 'react';
import ContentChildren from '../../components/ContentChildren';
import ContainerChildren from '../../components/ContainerChildren';
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
`;

const BookMark = () => {
  return (
    <BookMarkContainer>
      <SideBar />
      <MainContainer>
        <ContainerChildren>
          <Title>북마크</Title>
          <FiCheckSquare className="check" />
          <h4 className="title">최신순</h4>
          <FiCheckSquare />
          <h4 className="title">오래된순</h4>
          <FiCheckSquare />
          <h4 className="title">교환중</h4>
          <FiCheckSquare />
          <h4 className="title">교환 완료</h4>
        </ContainerChildren>
        <ContentChildren>
          <span>교환목록이 없습니다.</span>
        </ContentChildren>
      </MainContainer>
    </BookMarkContainer>
  );
};

export default BookMark;
