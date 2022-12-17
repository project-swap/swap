import React from 'react';
import { Main } from './Mypage';
import { Title } from './LocationSetting';
import { FiCheckSquare } from 'react-icons/fi';
import styled from 'styled-components';
import SideBar from '../components/SideBar';

export const Container = styled.main`
  display: flex;
  width: 120%;
  position: relative;
  right: 4rem;
  .check {
    flex-direction: column;
    padding: 3rem 1rem;
    position: relative;
  }
  .title {
    width: 7rem;
    margin-top: 3rem;
  }
`;

export const Select = styled.select`
  width: 5rem;
  padding-left: 1rem;
  height: 3rem;
  margin-top: 2rem;
  margin-right: 1rem;
`;

export const Content = styled.h4`
  margin: 12rem auto;
  opacity: 0.4;
`;

const SwapList = () => {
  return (
    <>
      <SideBar />
      <Main>
        <Container>
          <Title>교환목록</Title>
          <FiCheckSquare className="check" />
          <h4 className="title">내가 쓴 글</h4>
          <FiCheckSquare className="check" />
          <h4 className="title">최신순</h4>
          <FiCheckSquare className="check" />
          <h4 className="title">오래된순</h4>
          <Select>
            <option className="default" value="">
              1개월
            </option>
            <option className="default" value="">
              3개월
            </option>
            <option className="default" value="">
              6개월
            </option>
          </Select>
        </Container>
        <Content>교환목록이 없습니다.</Content>
      </Main>
    </>
  );
};

export default SwapList;
