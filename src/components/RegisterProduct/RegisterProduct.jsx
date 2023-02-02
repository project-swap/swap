import React from 'react';
import styled from 'styled-components';
import RegisterProductInputGroup from './RegisterProductInputGroup';
import RegisterProductTradeTypeGroup from './RegisterProductTradeTypeGroup';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { ComponentForCenterAlignment } from '../common/PublicStyle';
import RegisterProductPostBtn from './RegisterProductPostBtn';
import RegisterProductInputContent from './RegisterProductInputContent';
import { useRecoilValue } from 'recoil';
import { hashArrState, ImgUrlArrState } from '../../atoms/atoms';
import RegisterProductImageUploadGroupFirebase from './RegisterProductImageUploadGroupFirebase';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router';

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
  const postsCollectionRef = collection(db, 'posts');

  const hashArr = useRecoilValue(hashArrState);
  const imgUrlArr = useRecoilValue(ImgUrlArrState);

  const navigate = useNavigate();

  const userInfo = sessionStorage.getItem(
    'firebase:authUser:AIzaSyDopZC4cfYJSrlMB_QTcAG7nIv59F0PaIg:[DEFAULT]',
  );

  const date = new Date();

  const postDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const update = async event => {
    event.preventDefault();

    const type = () => {
      if (event.target[4].checked) {
        return 'swap';
      } else {
        return 'share';
      }
    };

    const data = {
      postId: `${Date.now()}`,
      title: event.target[0].value,
      hash_tag: hashArr,
      content: event.target[3].value,
      type: type(),
      name: JSON.parse(userInfo)['displayName'],
      uid: JSON.parse(userInfo)['uid'],
      date: postDate,
      convertDate: `${Date.now()}`,
      imgUrl: imgUrlArr,
    };

    try {
      const addData = await addDoc(postsCollectionRef, data);
      console.log(addData);
      navigate('/product-list');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ComponentForCenterAlignment>
      <RegisterProductComponent>
        <ExitButton>
          <IoMdArrowRoundBack />
        </ExitButton>
        <RegisterForm onSubmit={update}>
          <RegisterProductInputGroup />
          <RegisterProductImageUploadGroupFirebase />
          <RegisterProductInputContent />
          <RegisterProductTradeTypeGroup />
          <RegisterProductPostBtn />
        </RegisterForm>
      </RegisterProductComponent>
    </ComponentForCenterAlignment>
  );
};

export default RegisterProduct;
