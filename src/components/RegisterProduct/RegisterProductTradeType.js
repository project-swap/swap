import React from 'react';
import styled from 'styled-components';
import { Button } from '../common/public/PublicStyle';

const RegisterProductTradeType = () => {
  const RegisterProductInputComponent = styled.div`
    width: 40rem;
    display: flex;

    align-items: center;
    border: 1px solid black;
    padding: 2rem;
    margin-bottom: 1.5rem;
  `;

  const Span = styled.span`
    width: 4rem;
  `;

  const InputComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 40rem;
  `;

  return (
    <RegisterProductInputComponent>
      <Span>거래종류</Span>
      <InputComponent>
        <Button width="5rem" margin="0 0 0 1rem">
          교환
        </Button>
        <Button width="5rem" margin="0 0 0 1rem">
          나눔
        </Button>
      </InputComponent>
    </RegisterProductInputComponent>
  );
};

export default RegisterProductTradeType;
