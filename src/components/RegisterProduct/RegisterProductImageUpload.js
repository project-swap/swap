import React from 'react';
import styled from 'styled-components';
import { Button, Label } from '../common/public/PublicStyle';

const RegisterProductImageUpload = () => {
  const RegisterProductInputComponent = styled.div`
    width: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 2rem;
    margin-bottom: 1.5rem;
  `;

  const InputComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40rem;
  `;

  const ConfirmBtnComponent = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 12rem;
  `;

  const ImgPreview = styled.div`
    background: center
      url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTdfMjYy%2FMDAxNjQyNDAyNTMwMjU5.e0JwiX9I8IjdONKcYqzCYaU8YiFHA0igovXbw_8pMEwg.wbwWHTaYLXUhAMUBgzR_K_8d_uyWFVMR68bCS5sa0Cwg.JPEG.fenergy12%2F14.jpg&type=sc960_832');
    width: 35.5rem;
    height: 20rem;
    border: 1px solid black;
    border-radius: 1rem;
  `;

  return (
    <RegisterProductInputComponent>
      <InputComponent>
        <Label>이미지</Label>
        <ImgPreview />
      </InputComponent>
      <ConfirmBtnComponent>
        <Button width="5rem">수정</Button>
        <Button width="5rem">삭제</Button>
      </ConfirmBtnComponent>
    </RegisterProductInputComponent>
  );
};

export default RegisterProductImageUpload;
