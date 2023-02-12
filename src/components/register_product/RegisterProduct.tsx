import React, { useState } from 'react';
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
import { getAuth } from 'firebase/auth';

interface DataType {
  postId: string;
  title: string;
  hash_tag: string[];
  content: string;
  type: string;
  name?: string | null;
  uid?: string | null;
  date: string;
  convertDate: string;
  imgUrl: string[];
  profileImg?: string | null;
}

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
  const navigate = useNavigate();
  const auth = getAuth().currentUser;

  const hashArr = useRecoilValue(hashArrState);
  const imgUrlArr = useRecoilValue(ImgUrlArrState);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [type, setType] = useState<string | undefined>();

  const getTitleProps = (title: string) => {
    setTitle(title);
  };

  const getContentProps = (content: string) => {
    setContent(content);
  };

  const getTypeProps = (type: string) => {
    setType(type);
  };

  const displayName = auth?.displayName;
  const photoURL = auth?.photoURL;
  const uid = auth?.uid;

  const date = new Date();

  const postDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const checkType = () => {
    if (type === '교환') {
      return 'swap';
    } else {
      return 'share';
    }
  };

  const data: DataType = {
    postId: `${Date.now()}`,
    title: title,
    hash_tag: hashArr,
    content: content,
    type: checkType(),
    name: displayName,
    uid: uid,
    date: postDate,
    convertDate: `${Date.now()}`,
    imgUrl: imgUrlArr,
    profileImg: photoURL,
  };

  const update = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await addDoc(postsCollectionRef, data);

    navigate(`/detail/${data.postId}`, { replace: true });
  };

  return (
    <ComponentForCenterAlignment>
      <RegisterProductComponent>
        <ExitButton>
          <IoMdArrowRoundBack />
        </ExitButton>
        <RegisterForm onSubmit={update}>
          <RegisterProductInputGroup getTitleProps={getTitleProps} />
          <RegisterProductImageUploadGroupFirebase />
          <RegisterProductInputContent getContentProps={getContentProps} />
          <RegisterProductTradeTypeGroup getTypeProps={getTypeProps} />
          <RegisterProductPostBtn />
        </RegisterForm>
      </RegisterProductComponent>
    </ComponentForCenterAlignment>
  );
};

export default RegisterProduct;
