import { FiCheckSquare } from 'react-icons/fi';
import { Title } from './LocationSetting';
import Main from './Main';
import React from 'react';
import { Container, Content } from './SwapList';

const BookMarkPage = () => {
  return (
    <Main>
      <Container>
        <Title>북마크</Title>
        <FiCheckSquare className="check" />
        <h4 className="title">내가 쓴 글</h4>
        <FiCheckSquare className="check" />
        <h4 className="title">최신순</h4>
        <FiCheckSquare className="check" />
        <h4 className="title">오래된순</h4>
      </Container>
      <Content>교환목록이 없습니다.</Content>
    </Main>
  );
};

export default BookMarkPage;
