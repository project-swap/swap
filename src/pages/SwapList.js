import React from 'react';
import { Main } from './Mypage';
import { Title } from './LocationSetting';
import { FiCheckSquare } from 'react-icons/fi';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  .check {
    flex-direction: column;
    padding: 3rem 1rem;
    position: relative;
  }
  .title {
    width: 7rem;
    margin-top: 3rem;
  }
  .list {
    width: 10rem;
  }
`;

const Select = styled.select`
  width: 10rem;
  height: 3rem;
  margin-top: 2rem;
  margin-right: 1rem;
`;

const Content = styled.h4`
  margin: 12rem auto;
  opacity: 0.4;
`;

const SwapList = () => {
  return (
    <Main>
      <Container>
        <Title className="list">교환목록</Title>
        <FiCheckSquare className="check" />
        <h4 className="title">내가 쓴 글</h4>
        <FiCheckSquare className="check" />
        <h4 className="title">최신순</h4>
        <FiCheckSquare className="check" />
        <h4 className="title">오래된순</h4>
        <Select>
          <option className="default" value="">
            6개월
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
        </Select>
      </Container>
      <Content>교환목록이 없습니다.</Content>
    </Main>
  );
};

export default SwapList;
