import React from 'react';
import styled from 'styled-components';
import { Label } from '../common/PublicStyle';
import HashtagInput from './HashtagInput';

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40rem;
  height: 4rem;
`;

const Input = styled.input`
  width: 34.5rem;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 0.8rem;
  &:active {
    border-color: #f8d3f5;
  }
`;

const RegisterProductGroupComponent = styled.div<{ flexDirection: string }>`
  width: 40rem;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  border: 1px solid black;
  padding: 2rem;
  margin-bottom: 1.5rem;
`;

const RegisterProductInputGroup = () => {
  return (
    <RegisterProductGroupComponent flexDirection="column">
      <InputGroup>
        <Label htmlFor="productName">상품명</Label>
        <Input
          id="productName"
          placeholder="상품명"
          minLength={5}
          maxLength={25}
          required
        ></Input>
      </InputGroup>
      <HashtagInput />
    </RegisterProductGroupComponent>
  );
};

export default RegisterProductInputGroup;
