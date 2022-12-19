import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import SideBar from '../components/SideBar';
import MainContainer from '../components/common/MainContainer';

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: -40rem auto;
`;

export const Title = styled.h3`
  font-weight: 600;
  margin: 2.5rem 5rem;
  font-size: 1.5rem;
`;

const CheckBox = styled.div`
  display: flex;
  border: 1px solid black;
  width: 30rem;
  height: 8rem;
  margin: 2rem auto;
  border-radius: 1rem;
  &:nth-child(1) {
    display: flex;
    flex-direction: column;
    h3 {
      font-weight: 600;
      margin-left: 1rem;
      margin-bottom: 1rem;
    }
  }
  &:nth-child(2),
  :nth-child(3) {
    justify-content: space-around;
    align-items: center;
  }
  .icon {
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
  input {
    display: flex;
    justify-content: start;
    margin-top: 1rem;
    position: relative;
    right: 13.5rem;
    width: 100%;
    height: 15%;
  }
`;

const LocationSetting = () => {
  return (
    <LocationContainer>
      <SideBar />
      <MainContainer>
        <Title>위치설정</Title>
        <div>
          <CheckBox>
            <input type="checkbox" />
            <h3>자취방[main]</h3>
            <h3>서울특별시 강남구 논현동</h3>
          </CheckBox>
          <CheckBox>
            <AiOutlinePlusCircle className="icon" size={30} />
          </CheckBox>
          <CheckBox>
            <AiOutlinePlusCircle className="icon" size={30} />
          </CheckBox>
        </div>
      </MainContainer>
    </LocationContainer>
  );
};

export default LocationSetting;
