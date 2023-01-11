import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import styled from 'styled-components';
import SideBar from '../../components/SideBar';
import ContentChildren from '../../components/ContentChildren';
import MainContainer from '../../components/common/MainContainer';
import ExchangeContainerChildren from '../../components/ExchangeContainerChildren';

const Select = styled.select`
  width: 4rem;
  height: 2rem;
  margin-top: 2.5rem;
  font-size: 12px;
  position: relative;
  top: -3rem;
`;

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
`;

const ExchangeHistory = () => {
  return (
    <SwapContainer>
      <SideBar />
      <MainContainer>
        <ExchangeContainerChildren>
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
        </ExchangeContainerChildren>
        <ContentChildren>
          <span>교환목록이 없습니다.</span>
        </ContentChildren>
      </MainContainer>
    </SwapContainer>
  );
};

export default ExchangeHistory;
