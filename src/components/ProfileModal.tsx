import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { IoMdCloudUpload } from 'react-icons/io';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageMessageContainer = styled.div`
  position: relative;
  width: 110%;
  height: 5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const ProfileEdit = styled.div`
  display: flex;
  position: relative;
  right: 10rem;
  font-weight: 600;
  font-size: 1rem;
  bottom: 2rem;
`;

interface ModalCloseProps {
  width: number;
  height: number;
  children?: JSX.Element | JSX.Element[];
  onClick?: () => void;
}
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
    bottom: 3.5rem;
    left: 14rem;
    color: #000;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      opacity: 0.4;
    }
  }
  .previewImage {
    width: 10rem;
    height: 8rem;
    border-radius: 0.5rem;
  }
`;

const ProfileDivider = styled.div`
  border: 1px solid #000;
  width: 27rem;
  margin: 0 auto;
  position: relative;
  bottom: 3rem;
`;

const ImageMessageInput = styled.input`
  width: 100%;
  height: 30%;
  &::placeholder {
    opacity: 0.6;
  }
`;

const Label = styled.label`
  .cloud {
    position: absolute;
    top: 0;
    right: 0.5rem;
    z-index: 1;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

const ImageInputUpload = styled.input`
  display: none;
`;

const ProfileModal = ({ children, onClick }: ModalCloseProps) => {
  const [attachment, setAttachment] = useState<string | ArrayBuffer | null>(
    null,
  );
  // const fileInput = useRef(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {
      target: { files },
    } = event;

    if (!files) return null;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onload = (onLoadEvent: ProgressEvent<FileReader>) => {
      const { currentTarget } = onLoadEvent;
      if (currentTarget instanceof FileReader) {
        const { result } = currentTarget;
        if (result !== null) setAttachment(result);
      }
    };
    reader.readAsDataURL(theFile);
  };
  return (
    <Modal>
      <ProfileEdit>프로필 사진 변경</ProfileEdit>
      <IoClose className="hover" onClick={onClick} />
      {children}
      <ProfileDivider />
      {attachment ? (
        <img
          className="previewImage"
          src={attachment.toString()}
          alt={attachment.toString()}
        />
      ) : null}
      <Form onSubmit={handleSubmit}>
        <ImageMessageContainer>
          <ImageMessageInput type="text" placeholder="이미지를 업로드하세요." />
          <Label htmlFor="file-input">
            <IoMdCloudUpload className="cloud" />
          </Label>
          <ImageInputUpload
            onChange={onChange}
            id="file-input"
            type="file"
            accept="image/*" //이미지 파일만 허용
          />
        </ImageMessageContainer>
      </Form>
    </Modal>
  );
};

export default ProfileModal;
