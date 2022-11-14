import React from 'react';
import styled from 'styled-components';
import RegisterProductImageUpload from './RegisterProductImageUpload';
import RegisterProductInput from './RegisterProductInput';
import RegisterProductTradeType from './RegisterProductTradeType';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  Button,
  ComponentForCenterAlignment,
} from '../common/public/PublicStyle';

const RegisterProductComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 53rem;
  margin: 3rem 0;
  padding: 2rem 5rem;
  border: 1px solid black;
  position: relative;
`;

const ExitButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background-color: transparent;
  border: none;
  font-size: 3rem;
  &:hover {
    color: tomato;
  }
  &:active {
    color: #555;
  }
`;

const RegisterProduct = () => {
  return (
    <ComponentForCenterAlignment>
      <RegisterProductComponent>
        <ExitButton>
          <IoMdArrowRoundBack />
        </ExitButton>
        <RegisterProductInput />
        <RegisterProductImageUpload />
        <RegisterProductTradeType />
        <Button width="4rem">저장</Button>
      </RegisterProductComponent>
    </ComponentForCenterAlignment>
  );
};

export default RegisterProduct;
