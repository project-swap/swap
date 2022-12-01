import React from 'react';
import styled from 'styled-components';
import { Main } from './Mypage';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiCheckSquare } from 'react-icons/fi';

export const Title = styled.h3`
  font-weight: 600;
  margin: 3rem 5rem;
  font-size: 1.5rem;
`;

const Select = styled.div`
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
    }
  }
  &:nth-child(2),
  :nth-child(3) {
    justify-content: center;
    align-items: center;
  }
  .check {
    display: flex;
    padding: 1rem 1rem;
  }
  .location {
    font-size: 0.7rem;
    opacity: 0.5;
  }
`;

const LocationSetting = () => {
  return (
    <Main>
      <Title>위치설정</Title>

      <div>
        <Select>
          <div className="check">
            <FiCheckSquare />
            <h3>자취방[main]</h3>
          </div>
          <div className="location">
            <h3>서울특별시 강남구 논현동</h3>
          </div>
        </Select>
        <Select>
          <AiOutlinePlusCircle />
        </Select>
        <Select>
          <AiOutlinePlusCircle />
        </Select>
      </div>
    </Main>
  );
};

export default LocationSetting;
