import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Label,
  RegisterProductGroupComponent,
} from '../common/public/PublicStyle';

const RegisterProductTradeTypeGroups = () => {
  const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 40rem;
  `;

  return (
    <RegisterProductGroupComponent>
      <Label>거래종류</Label>
      <ButtonGroup>
        <Button width="5rem" margin="0 0 0 1rem">
          교환
        </Button>
        <Button width="5rem" margin="0 0 0 1rem">
          나눔
        </Button>
      </ButtonGroup>
    </RegisterProductGroupComponent>
  );
};

export default RegisterProductTradeTypeGroups;
