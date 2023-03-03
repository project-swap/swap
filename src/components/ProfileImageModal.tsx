import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { IoMdCloudUpload } from 'react-icons/io';
import BackgroundBlur from './BackgroundBlur';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { useRecoilState } from 'recoil';

import { ImgUrlArrState } from './../atoms/atoms';

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  width: 28rem;
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

const ImageUploadMessageContainer = styled.div`
  display: flex;
`;

const ImageMessageContainer = styled.section`
  width: 110%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageMessageInput = styled.input`
  width: 100%;
  height: 60%;
  &::placeholder {
    opacity: 0.6;
  }
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

const ProfileWrap = styled.div`
  width: 8rem;
  height: 8rem;
  margin: 0 auto;
  position: relative;
`;

const PreviewImgPositionWrap = styled.div<{ url: string }>`
  &::before {
    content: '';
    background-image: url(${props => props.url});
    background-size: cover;
    opacity: 0.5;
    position: absolute;
    inset: 0;
  }
`;

const PreviewOuterImage = styled.div<{ url?: string }>`
  width: 7.9rem;
  height: 7.9rem;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  position: absolute;
  border-radius: 4rem;
  border: 1px solid black;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;
  .hover {
    cursor: pointer;
    &:hover {
      opacity: 0.3;
    }
  }
`;

const CloseButton = styled(IoClose)`
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;

const Separator = styled.div`
  width: 80%;
  height: 1px;
  background-color: #000;
  display: block;
  margin: 1rem auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 6rem;
  justify-content: space-between;
  button {
    border-radius: 0.8rem;
    background-color: #999;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

interface CloseProps {
  closeEvent: () => void;
}

interface FileTypes {
  name: string;
  lastModified: number;
  lastModifiedDate?: string[];
  size: number;
  type: string;
  webkitRelativePath: string;
}

const ProfileImageModal = ({ closeEvent }: CloseProps) => {
  const storage = getStorage();
  const [imgName, setImgName] = useState('');
  const itemBeDragged = useRef(0);
  const locationBeDragged = useRef(0);

  const [imgUpload, setImgUpload] = useState<FileTypes | null>(null);
  const [imgUrl, setImgUrl] = useRecoilState(ImgUrlArrState);

  const startDrag = (index: number) => {
    itemBeDragged.current = index;
  };

  const setDropLocation = (index: number) => {
    locationBeDragged.current = index;
  };

  const handleDrop = () => {
    const copyListItems = [...imgUrl];
    const itemBeDraggedContent = copyListItems[itemBeDragged.current];

    copyListItems.splice(itemBeDragged.current, 1);
    copyListItems.splice(locationBeDragged.current, 0, itemBeDraggedContent);

    itemBeDragged.current = 0;
    locationBeDragged.current = 0;

    setImgUrl(copyListItems);
  };

  const handleUpload = () => {
    if (imgUpload === null) return;

    const id = Date.now() / imgUpload.name.length;
    const imageRef = ref(storage, `images/${imgUpload.name}_${id}`);

    uploadBytes(imageRef, imgUpload as File).then(snapshot => {
      getDownloadURL(snapshot.ref).then(url => {
        setImgUrl(prev => [
          ...prev,
          { url, id: `images/${imgUpload.name}_${id}` },
        ]);
        setImgUpload(null); // 이미지 업로드 후에는 imgUpload 상태를 null로 초기화
      });
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!imgUpload) return;
    handleUpload();
  };

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    const deleteRef = ref(storage, event.currentTarget.id);
    deleteObject(deleteRef);
    setImgUrl(imgUrl.filter(obj => obj.id !== event.currentTarget.id));
  };

  useEffect(() => {
    if (imgUpload !== null) handleUpload();
  }, [setImgUrl]);

  return (
    <>
      <Modal>
        <ModalContainer>
          <ProfileEdit>프로필 사진 변경</ProfileEdit>
          <CloseButton onClick={closeEvent} />
        </ModalContainer>
        <Separator />
        <ProfileWrap>
          {imgUrl.map((item, index) => {
            return (
              <PreviewImgPositionWrap
                key={item.url}
                url={item.url}
                onDragOver={event => event.preventDefault()}
                onDragStart={() => startDrag(index)}
                onDragEnter={() => setDropLocation(index)}
                onDragEnd={handleDrop}
                draggable
              >
                <PreviewOuterImage url={item.url} />
              </PreviewImgPositionWrap>
            );
          })}
        </ProfileWrap>
        <Form onSubmit={handleSubmit}>
          <ImageMessageContainer>
            <ImageUploadMessageContainer>
              <ImageMessageInput
                id="image-message-input"
                type="text"
                placeholder={imgName || '이미지를 업로드하세요.'}
                disabled
              />
              <Label htmlFor="file-input">
                <IoMdCloudUpload className="cloud" />
              </Label>
            </ImageUploadMessageContainer>

            <ImageInputUpload
              id="file-input"
              type="file"
              accept="image/*" //이미지 파일만 허용
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.currentTarget.files !== null) {
                  const files = event.currentTarget.files[0];
                  setImgUpload(files);
                  setImgName(files.name);
                  const reader = new FileReader();
                  reader.onload = e => {
                    const id = Date.now() / files.name.length;
                    setImgUrl([
                      {
                        url: e.target?.result as string,
                        id: `images/${files.name}_${id}`,
                      },
                    ]);
                  };
                  reader.readAsDataURL(files);
                }
              }}
            />

            <ButtonContainer>
              <button
                onClick={event => {
                  event.preventDefault();
                  if (confirm('사진을 삭제하시겠습니까?')) {
                    handleDelete(event);
                    setImgUpload(null);
                    setImgName('');
                  }
                }}
                id={imgUrl[0]?.id}
              >
                삭제
              </button>
              <button type="submit">저장</button>
            </ButtonContainer>
          </ImageMessageContainer>
        </Form>
      </Modal>
      <BackgroundBlur />
    </>
  );
};

export default ProfileImageModal;
