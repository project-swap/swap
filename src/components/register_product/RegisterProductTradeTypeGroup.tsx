import React from 'react';
import styled from 'styled-components';
import { RegisterProductGroupComponent } from '../common/PublicStyle';

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40rem;
`;

const RadioBtn = styled.input`
  color: black;
  margin: 0 0.7rem;
  margin-top: -0.1rem;
  :checked {
    background-color: rgb(25, 118, 248);
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    width: 14px;
    height: 14px;
    border-radius: 100%;
  }
`;

const Type = styled.span`
  width: 4rem;
`;

const Label = styled.label`
  margin-left: 0.1rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  color: #333;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

const RegisterProductTradeTypeGroups = () => {
  return (
    <RegisterProductGroupComponent>
      <ButtonGroup>
        <Type>거래종류</Type>
        <Label htmlFor="swap" className="type">
          교환
        </Label>
        <RadioBtn type="radio" name="type" id="swap" value="교환" required />
        <Label htmlFor="share" className="type">
          나눔
        </Label>
        <RadioBtn type="radio" name="type" id="share" value="나눔" />
      </ButtonGroup>
    </RegisterProductGroupComponent>
  );
};

export default RegisterProductTradeTypeGroups;
