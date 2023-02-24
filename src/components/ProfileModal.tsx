import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { IoMdCloudUpload } from 'react-icons/io';
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
//   deleteObject,
// } from 'firebase/storage';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageMessageContainer = styled.section`
  position: relative;
  width: 110%;
  height: 5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const ProfileEdit = styled.span`
  display: flex;
  position: relative;
  right: 10rem;
  font-weight: 600;
  font-size: 1rem;
  bottom: 2rem;
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
    bottom: 3.5rem;
    left: 14rem;
    color: #000;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      opacity: 0.4;
    }
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

const PreviewImageContainer = styled.section`
  width: 8rem;
  height: 8rem;
  img {
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
    position: relative;
    bottom: 0.75rem;
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

const PreviewOuterImage = styled.img`
  width: 8rem;
  height: 8rem;
  position: absolute;
  z-index: -9999;
  left: 11rem;
  top: 5rem;
  filter: contrast(20%);
  border: 2px solid black;
`;

const PreviewInnerImage = styled.div`
  background-color: rgb(0, 0, 0, 0.3);
  position: relative;
  width: 8rem;
  height: 8rem;
  z-index: 1;
  display: none;
`;

interface CloseProps {
  closeEvent: () => void;
}

const ProfileModal = ({ closeEvent }: CloseProps) => {
  const [attachment, setAttachment] = useState<string | ArrayBuffer | null>(
    null,
  );
  const fileRef = useRef<HTMLDivElement | null>(null);
  const [file, setFile] = useState<FileList | null>();

  const storage = getStorage();
  const uniqueKey = new Date().getTime();

  const saveToFirebaseStorage = (file: File) => {
    const newName = file.name
      .replace(/[~`!#$%^&*+=\-[\]\\';,/{}()|\\":<>?]/g, '')
      .split(' ')
      .join('');

    const metaData = {
      contentType: file.type,
    };

    const storageRef = ref(storage, `images/${newName + uniqueKey}`);

    const uploadTask = uploadBytesResumable(storageRef, file, metaData);
    uploadTask.on(
      'state_changed',
      snapshot => {
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadurl => {
          console.log(`완료:${downloadurl}`);
        });
      },
    );
  };

  const deleteFile = (file: any) => {
    const newName = file.name
      .replace(/[~`!#$%^&*+=\-[\]\\';,/{}()|\\":<>?]/g, '')
      .split(' ')
      .join('');

    const desertRef = ref(storage, `images/${newName + uniqueKey}`);
    deleteObject(desertRef)
      .then(() => {
        console.log(`delete success`);
      })
      .catch(error => {
        console.log(`delete ${error}`);
      });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {
      target: { files },
    } = event;

    setFile(files);
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
    saveToFirebaseStorage(theFile);
  };

  const handleFileButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    fileRef.current?.click();
  };

  return (
    <Modal>
      <ProfileEdit>프로필 사진 변경</ProfileEdit>
      {/*여기 onClick 다시 확인.*/}
      <IoClose className="hover" onClick={closeEvent} />
      <ProfileDivider />
      <PreviewOuterImage src={attachment?.toString()} />
      <PreviewImageContainer>
        <PreviewInnerImage></PreviewInnerImage>
        {attachment ? (
          <img src={attachment.toString()} alt={attachment.toString()} />
        ) : null}
      </PreviewImageContainer>
      <Form>
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
        <div style={{ display: 'flex' }}>
          <button onClick={handleFileButtonClick}>Upload</button>
          <button type="button" onClick={() => deleteFile(file)}>
            Delete
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default ProfileModal;
