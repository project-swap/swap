import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import styled from 'styled-components';
import SideBar from '../../components/SideBar';
import MainContainer from '../../components/common/MainContainer';
import NavBar from '../../components/common/NavBar';

const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: -40rem auto;
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

const Filter = styled.div`
  display: flex;

  justify-content: space-around;
  gap: 1rem;
  height: 1rem;
  position: relative;
  left: 6rem;
  font-weight: 300;
  font-size: 1rem;
`;

const SelectFilter = styled.select`
  width: 6rem;
  height: 2rem;
  position: relative;
  left: 7rem;
  bottom: 0.5rem;
`;

const ExchangeHistory = () => {
  return (
    <>
      <NavBar />
      <SwapContainer>
        <SideBar />
        <MainContainer>
          <Title>
            교환목록
            <Filter>
              <FiCheckSquare />
              <h4 className="title">내가 쓴 글</h4>
              <FiCheckSquare />
              <h4 className="title">최신순</h4>
              <FiCheckSquare />
              <h4 className="title">오래된순</h4>
            </Filter>
            <SelectFilter>
              <option className="default" value="">
                1개월
              </option>
              <option className="default" value="">
                3개월
              </option>
              <option className="default" value="">
                6개월
              </option>
            </SelectFilter>
          </Title>

          <Content>
            <span>교환목록이 없습니다.</span>
          </Content>
        </MainContainer>
      </SwapContainer>
    </>
  );
};

export default ExchangeHistory;
