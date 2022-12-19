import React from 'react';
import { Title } from './LocationSetting';
import { FiCheckSquare } from 'react-icons/fi';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import ContentChildren from '../components/ContentChildren';
import ContainerChildren from '../components/ContainerChildren';
import MainContainer from '../components/common/MainContainer';

const Select = styled.select`
  width: 4rem;
  height: 2rem;
  margin-top: 2.5rem;
  font-size: 12px;
`;

const Icon = styled.div`
  width: 50%;
  display: flex;
  h4 {
    justify-content: space-around;
  }
`;

const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: -40rem auto;
`;

const SwapList = () => {
  return (
    <SwapContainer>
      <SideBar />
      <MainContainer>
        <ContainerChildren>
          <Title>교환목록</Title>
          <Icon>
            <FiCheckSquare className="check" />
            <h4 className="title">내가 쓴 글</h4>
            <FiCheckSquare className="check" />
            <h4 className="title">최신순</h4>
            <FiCheckSquare className="check" />
            <h4 className="title">오래된순</h4>
          </Icon>
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
        </ContainerChildren>
        <ContentChildren>교환목록이 없습니다.</ContentChildren>
      </MainContainer>
    </SwapContainer>
  );
};

export default SwapList;
