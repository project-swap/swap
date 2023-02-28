import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { IoMdCloudUpload } from 'react-icons/io';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

import BackgroundBlur from './BackgroundBlur';
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
  width: 110%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileEdit = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
`;

const Modal = styled.section`
  width: 30rem;
  height: 24rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 0.1rem solid #000;
  border-radius: 0.5rem;
  z-index: 9999;
  position: fixed;
`;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;
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
  }
`;

const PreviewImgPositionWrap = styled.div`
  position: relative;
`;

const Label = styled.label`
  .cloud {
    display: flex;
    align-items: center;
    width: 200%;
    height: 70%;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const ImageInputUpload = styled.input`
  display: none;
`;

const PreviewOuterImage = styled.img`
  position: absolute;
  width: 8rem;
  height: 8rem;
  z-index: -9999;
  filter: contrast(20%);
  border: 2px solid black;
`;

const PreviewInnerImage = styled.div`
  background-color: rgb(0, 0, 0, 0.3);
  width: 8rem;
  height: 8rem;
  z-index: 1;
  display: none;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;
`;

const CloseButton = styled(IoClose)`
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
  font-size: x-large;
`;

const Separator = styled.div`
  width: 80%;
  height: 1px;
  background-color: #000;
  display: block;
  margin: 1rem auto;
`;

const ClickButton = styled.button`
  margin-right: 0.5rem;
`;

const ButtonContainer = styled.div``;

const ImageUploadMessageContainer = styled.div`
  display: flex;
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

  const readImageFile = (file: File): Promise<string | null> => {
    return new Promise<string | null>(async resolve => {
      // 파일을 읽어들이고 base64로 변환하는 코드
      const reader = new FileReader();
      reader.onload = (onLoadEvent: ProgressEvent<FileReader>) => {
        const { currentTarget } = onLoadEvent;
        // currentTarget이 FileReader에 들어있는지 확인
        // 그렇지 않으면 resolve를 null 값으로 처리하여 이행
        if (currentTarget instanceof FileReader) {
          const { result } = currentTarget;
          resolve((result as string) || null);
        } else resolve(null);
      };
      reader.readAsDataURL(file);

      // 파일 읽기 작업이 완료될때까지 기다리기
      try {
        await new Promise<void>(resolve => {
          reader.onloadend = () => {
            resolve();
          };
        });
      } catch (error) {
        resolve(null);
      }
    });
  };

  const uploadImageToFirebase = (file: File) => {
    saveToFirebaseStorage(file);
  };

  const handleFileUpload = async (file: File) => {
    const result = await readImageFile(file);
    if (result !== null) {
      setAttachment(result);
      uploadImageToFirebase(file);
    }
  };

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {
      target: { files },
    } = event;

    setFile(files);
    if (!files) return null;
    const theFile = files[0];

    await handleFileUpload(theFile);

    // 파일을 올리면 해당 파일 이름이 보이도록 함
    const fileName = theFile.name;
    const input = document.getElementById(
      'image-message-input',
    ) as HTMLInputElement;

    if (input) input.placeholder = fileName;
  };

  const handleFileButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    fileRef.current?.click();
  };

  return (
    <>
      <Modal>
        <ModalContainer>
          <ProfileEdit>프로필 사진 변경</ProfileEdit>
          <CloseButton onClick={closeEvent} />
        </ModalContainer>
        <Separator />
        <ProfileWrap>
          <PreviewImgPositionWrap>
            <PreviewOuterImage src={attachment?.toString()} />
            <PreviewImageContainer>
              <PreviewInnerImage />
              {attachment ? (
                <img src={attachment.toString()} alt={attachment.toString()} />
              ) : null}
            </PreviewImageContainer>
          </PreviewImgPositionWrap>
          <Form>
            <ImageMessageContainer>
              <ImageUploadMessageContainer>
                <ImageMessageInput
                  id="image-message-input"
                  type="text"
                  placeholder="이미지를 업로드하세요."
                  disabled
                />
                <Label htmlFor="file-input">
                  <IoMdCloudUpload className="cloud" />
                </Label>
              </ImageUploadMessageContainer>

              <ImageInputUpload
                onChange={onChange}
                id="file-input"
                type="file"
                accept="image/*" //이미지 파일만 허용
              />
            </ImageMessageContainer>

            <ButtonContainer>
              <ClickButton onClick={handleFileButtonClick}>Upload</ClickButton>
              <ClickButton type="button" onClick={() => deleteFile(file)}>
                Delete
              </ClickButton>
            </ButtonContainer>
          </Form>
        </ProfileWrap>
      </Modal>

      <BackgroundBlur />
    </>
  );
};

export default ProfileModal;
