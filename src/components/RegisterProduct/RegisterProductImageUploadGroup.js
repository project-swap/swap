import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Label,
  RegisterProductGroupComponent,
} from '../common/PublicStyle';

const RegisterProductImageUploadGroup = () => {
  const InputComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40rem;
  `;

  const UploadBtnComponent = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 12rem;
  `;

  const ImagePreview = styled.div`
    background: center url(${props => props.url}) no-repeat;
    width: 35.5rem;
    height: 20rem;
    border: 1px solid black;
    border-radius: 1rem;
  `;

  return (
    <RegisterProductGroupComponent flexDirection="column">
      <InputComponent>
        <Label>이미지</Label>
        <ImagePreview url="https://url.kr/quav97" />
      </InputComponent>
      <UploadBtnComponent>
        <Button width="5rem">수정</Button>
        <Button width="5rem">삭제</Button>
      </UploadBtnComponent>
    </RegisterProductGroupComponent>
  );
};

export default RegisterProductImageUploadGroup;
