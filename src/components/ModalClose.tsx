import React from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import profile from '../assets/logo/android-icon-144x144.png';
import { AiOutlineUpload } from 'react-icons/ai';

const ProfileEdit = styled.div`
  display: flex;
  position: relative;
  right: 10rem;
  font-weight: 600;
  font-size: 1rem;
  bottom: 3rem;
`;

const Modal = styled.section`
  width: 30rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  background-color: #fff;
  border: 0.1rem solid #000;
  border-radius: 0.5rem;
  margin: 5rem 26rem;
  z-index: 1;
  .hover {
    position: relative;
    bottom: 4.5rem;
    left: 14rem;
    color: #000;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      opacity: 0.4;
    }
  }
`;

const Lines = styled.div`
  border: 1px solid #000;
  width: 27rem;
  margin: 0 auto;
  position: relative;
  bottom: 4rem;
`;

const Label = styled.label`
  position: relative;
  bottom: 7.3rem;
  left: 8.9rem;
  z-index: 1;
  .plus {
    width: 1rem;
    height: 1rem;
    margin: 1rem;
  }
`;

const ImageInputMessage = styled.input`
  width: 50%;
  height: 5%;
  position: relative;
  top: 2rem;
  &::placeholder {
    opacity: 0.6;
  }
`;

const ImageInputUpload = styled.input`
  display: none;
`;

interface ModalCloseProps {
  width: number;
  height: number;
  children: JSX.Element | JSX.Element[];
  onClick: () => void;
}

const ModalClose = ({ width, height, children, onClick }: ModalCloseProps) => {
  console.log(typeof width, typeof height, typeof children, typeof onClick);
  return (
    <Modal>
      <ProfileEdit>프로필 사진 변경</ProfileEdit>
      <IoClose className="hover" onClick={onClick} />
      {children}
      <Lines />
      <img src={profile} alt="미쭈" />
      <ImageInputMessage type="text" placeholder="이미지를 업로드하세요." />
      <Label htmlFor="file-input">
        <AiOutlineUpload className="plus" />
      </Label>
      <ImageInputUpload
        id="file-input"
        type="file"
        accept="image/*" //이미지 파일만 허용
      />
    </Modal>
  );
};

export default ModalClose;
