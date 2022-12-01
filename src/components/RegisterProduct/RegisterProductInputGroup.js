import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Label,
  RegisterProductGroupComponent,
} from '../common/public/PublicStyle';

const InputGroup = styled.form`
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

const RegisterProductInputGroup = () => {
  return (
    <RegisterProductGroupComponent flexDirection="column">
      <InputGroup>
        <Label htmlFor="productName">상품명</Label>
        <Input id="productName" placeholder="상품명"></Input>
        <Button width="4rem">확인</Button>
      </InputGroup>
      <InputGroup>
        <Label htmlFor="hashTag">해시태그</Label>
        <Input id="hashTag" placeholder="해시태그"></Input>
        <Button width="4rem">확인</Button>
      </InputGroup>
    </RegisterProductGroupComponent>
  );
};

export default RegisterProductInputGroup;
