import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import styled from 'styled-components';
import SideBar from '../../components/SideBar';
import MainContainer from '../../components/common/MainContainer';

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
  position: relative;
  top: -3rem;
  left: 4rem;
`;

const ExchangeContainer = styled.main`
  display: flex;
  width: 90%;
  position: relative;
  justify-content: space-evenly;
  top: 3rem;
`;

const Content = styled.h4`
  margin: 12rem auto;
  opacity: 0.4;
`;

const ExchangeHistory = () => {
  return (
    <SwapContainer>
      <SideBar />
      <MainContainer>
        <ExchangeContainer>
          <Title>교환목록</Title>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              gap: '1rem',
            }}
          >
            <FiCheckSquare className="check" />
            <h4 className="title">내가 쓴 글</h4>
            <FiCheckSquare className="check" />
            <h4 className="title">최신순</h4>
            <FiCheckSquare className="check" />
            <h4 className="title">오래된순</h4>
          </div>
        </ExchangeContainer>
        <select
          style={{
            width: '6rem',
            height: '2rem',
            position: 'relative',
            left: '10rem',
          }}
        >
          <option className="default" value="">
            1개월
          </option>
          <option className="default" value="">
            3개월
          </option>
          <option className="default" value="">
            6개월
          </option>
        </select>
        <Content>
          <span>교환목록이 없습니다.</span>
        </Content>
      </MainContainer>
    </SwapContainer>
  );
};

export default ExchangeHistory;
