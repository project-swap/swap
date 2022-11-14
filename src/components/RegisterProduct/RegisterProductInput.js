import React from 'react';
import styled from 'styled-components';
import { Button, Label } from '../common/public/PublicStyle';

const RegisterProductInputComponent = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 2rem;
  margin-bottom: 1.5rem;
`;

const InputComponent = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40rem;
  height: 4rem;
`;

const Input = styled.input`
  width: 29rem;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 0.8rem;
  &:active {
    border-color: #f8d3f5;
  }
`;

const RegisterProductInput = () => {
  return (
    <RegisterProductInputComponent>
      <InputComponent>
        <Label htmlFor="productName">상품명</Label>
        <Input id="productName" placeholder="상품명"></Input>
        <Button width="4rem">확인</Button>
      </InputComponent>
      <InputComponent>
        <Label htmlFor="hashTag">해시태그</Label>
        <Input id="hashTag" placeholder="해시태그"></Input>
        <Button width="4rem">확인</Button>
      </InputComponent>
    </RegisterProductInputComponent>
  );
};

export default RegisterProductInput;
