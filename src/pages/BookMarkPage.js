import { FiCheckSquare } from 'react-icons/fi';
import { Title } from './LocationSetting';
import Main from './Main';
import React from 'react';
import ContentChildren from '../components/ContentChildren';
import ContainerChildren from '../components/ContainerChildren';

const BookMarkPage = () => {
  return (
    <Main>
      <ContainerChildren>
        <Title>북마크</Title>
        <FiCheckSquare className="check" />
        <h4 className="title">내가 쓴 글</h4>
        <FiCheckSquare className="check" />
        <h4 className="title">최신순</h4>
        <FiCheckSquare className="check" />
        <h4 className="title">오래된순</h4>
      </ContainerChildren>
      <ContentChildren>교환목록이 없습니다.</ContentChildren>
    </Main>
  );
};

export default BookMarkPage;
