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
`;

const Select = styled.select`
  width: 10rem;
  height: 3rem;
  margin-top: 2rem;
`;

const Content = styled.h4`
  margin: 12rem auto;
  opacity: 0.4;
`;

const SwapList = () => {
  return (
    <Main>
      <Container>
        <Title>교환목록</Title>
        <FiCheckSquare className="check" />
        <FiCheckSquare className="check" />
        <FiCheckSquare className="check" />
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
