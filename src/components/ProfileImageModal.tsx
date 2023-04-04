import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
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
import { FileTypes } from './register_product/RegisterProductImageUploadGroup';
import PreviewContainer from './my_page/PreviewContainer';
import ImageUploader from './my_page/ImageUploader';

const Modal = styled.section`
  width: 30rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 0.1rem solid #000;
  border-radius: 0.5rem;
  z-index: 9999;
  position: fixed;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .hover {
    cursor: pointer;
    &:hover {
      opacity: 0.3;
    }
  }
`;

const ProfileEdit = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 6rem;
  justify-content: space-between;
`;

const Button = styled.button`
  border-radius: 0.8rem;
  background-color: #999;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

interface CloseProps {
  closeEvent: () => void;
}

const ProfileImageModal = ({ closeEvent }: CloseProps) => {
  const storage = getStorage();
  const [imgName, setImgName] = useState('');

  const [imgUpload, setImgUpload] = useState<FileTypes | null>(null);
  const [imgUrl, setImgUrl] = useRecoilState(ImgUrlArrState);

  const uploadImageToStorage = () => {
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

  const handleDeleteButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (confirm('사진을 삭제하시겠습니까?')) {
      handleDelete(event);
      setImgUpload(null);
      setImgName('');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!imgUpload) return;
    uploadImageToStorage();
  };

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    const deleteRef = ref(storage, event.currentTarget.id);
    deleteObject(deleteRef);
    setImgUrl(imgUrl.filter(obj => obj.id !== event.currentTarget.id));
  };

  useEffect(() => {
    if (imgUpload !== null) uploadImageToStorage();
  }, [setImgUrl]);

  return (
    <>
      <Modal>
        <ModalContainer>
          <ProfileEdit>프로필 사진 변경</ProfileEdit>
          <CloseButton onClick={closeEvent} />
        </ModalContainer>
        <Separator />
        <PreviewContainer imgUrl={imgUrl} />
        <Form onSubmit={handleSubmit}>
          <ImageUploader
            imgName={imgName}
            setImgUpload={setImgUpload}
            setImgName={setImgName}
          />
          <ButtonContainer>
            <Button onClick={handleDeleteButtonClick} id={imgUrl[0]?.id}>
              삭제
            </Button>
            <Button type="submit">저장</Button>
          </ButtonContainer>
        </Form>
      </Modal>
      <BackgroundBlur />
    </>
  );
};

export default ProfileImageModal;
