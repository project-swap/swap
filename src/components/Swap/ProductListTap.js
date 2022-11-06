import React from 'react';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';
import styled from 'styled-components';

const TapComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem 2rem;
`;

const Bar = styled.span`
  display: inline-block;
  margin: 0 0.5rem;
  background-color: black;
  height: 10px;
  width: 2px;
  border: 1px;
`;

const TapObject = styled.div`
  display: flex;
  margin: 0.25rem;
  &:nth-child(5) {
  }
  cursor: pointer;
`;

const TapText = styled.span`
  margin-left: 0.3rem;
`;

const FunctionTap = styled.div`
  display: flex;
  align-items: center;
`;

const ProductListTap = () => {
  return (
    <TapComponent>
      <h1>교환/나눔</h1>
      <FunctionTap>
        <TapObject>
          <FiCheckSquare />
          <TapText>내가 쓴 글</TapText>
        </TapObject>

        <Bar />

        <TapObject>
          <FiSquare />
          <TapText>최신 순</TapText>
        </TapObject>

        <TapObject>
          <FiCheckSquare />
          <TapText>오래된 순</TapText>
        </TapObject>
      </FunctionTap>
    </TapComponent>
  );
};

export default ProductListTap;
