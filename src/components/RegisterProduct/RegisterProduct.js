import React from 'react';
import styled from 'styled-components';
import RegisterProductImageUploadGroup from './RegisterProductImageUploadGroup';
import RegisterProductInputGroup from './RegisterProductInputGroup';
import RegisterProductTradeTypeGroup from './RegisterProductTradeTypeGroup';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { ComponentForCenterAlignment } from '../common/PublicStyle';
import RegisterProductPostBtn from './RegisterProductPostBtn';

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

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterProduct = () => {
  return (
    <ComponentForCenterAlignment>
      <RegisterProductComponent>
        <ExitButton>
          <IoMdArrowRoundBack />
        </ExitButton>
        <RegisterForm>
          <RegisterProductInputGroup />
          <RegisterProductImageUploadGroup />
          <RegisterProductTradeTypeGroup />
          <RegisterProductPostBtn />
        </RegisterForm>
      </RegisterProductComponent>
    </ComponentForCenterAlignment>
  );
};

export default RegisterProduct;
