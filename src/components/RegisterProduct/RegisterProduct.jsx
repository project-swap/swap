import React from 'react';
import styled from 'styled-components';
import RegisterProductImageUploadGroup from './RegisterProductImageUploadGroup';
import RegisterProductInputGroup from './RegisterProductInputGroup';
import RegisterProductTradeTypeGroup from './RegisterProductTradeTypeGroup';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { ComponentForCenterAlignment } from '../common/PublicStyle';
import RegisterProductPostBtn from './RegisterProductPostBtn';
import RegisterProductInputContent from './RegisterProductInputContent';
import { useRecoilValue } from 'recoil';
import { hashArrState, ImgUrlArrState } from '../../atoms/atoms';

const RegisterProductComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 62rem;
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
  const hashArr = useRecoilValue(hashArrState);
  const imgUrlArr = useRecoilValue(ImgUrlArrState);

  const onSubmit = event => {
    event.preventDefault();

    const postedObj = {
      //게시자의 아이디
      //게시자의 닉네임
      //uid
      //몇번째 게시글

      title: event.target[0].value,
      hashtag: hashArr,
      img: imgUrlArr,
      text: event.target[3].value,
      swap: event.target[4].checked,
      share: event.target[5].checked,
    };

    console.log(postedObj);
  };

  return (
    <ComponentForCenterAlignment>
      <RegisterProductComponent>
        <ExitButton>
          <IoMdArrowRoundBack />
        </ExitButton>
        <RegisterForm onSubmit={onSubmit}>
          <RegisterProductInputGroup />
          <RegisterProductImageUploadGroup />
          <RegisterProductInputContent />
          <RegisterProductTradeTypeGroup />
          <RegisterProductPostBtn />
        </RegisterForm>
      </RegisterProductComponent>
    </ComponentForCenterAlignment>
  );
};

export default RegisterProduct;
