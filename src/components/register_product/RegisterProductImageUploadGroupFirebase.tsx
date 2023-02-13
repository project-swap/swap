import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  RegisterProductGroupComponent,
  StyledDeleteBtn,
} from '../common/PublicStyle';
import { BsPlusCircle } from 'react-icons/bs';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { useRecoilState } from 'recoil';
import { ImgUrlArrState } from '../../atoms/atoms';
import { CgClose } from 'react-icons/cg';

interface FileTypes {
  name: string;
  lastModified: number;
  lastModifiedDate?: string[];
  size: number;
  type: string;
  webkitRelativePath: string;
}

const InputComponent = styled.div`
  display: flex;
  align-items: center;

  width: 40rem;
`;

const Label = styled.span`
  margin-right: 1.7rem;
`;

const AddImgBtn = styled.input`
  display: none;
`;

const AddImgBtnLabel = styled.label`
  border: 1px solid #444;
  border-radius: 10px;
  width: 3rem;
  height: 4rem;
  text-align: center;
  font-size: 1.2rem;
  line-height: 4.5rem;
  margin-right: 1rem;
`;

const PreviewComponent = styled.div`
  position: relative;
`;

const PreviewImgCard = styled.div<{ url: string }>`
  border: 1px solid #444;
  border-radius: 10px;
  width: 3rem;
  height: 4rem;
  text-align: center;
  font-size: 1.2rem;
  line-height: 4.5rem;
  margin-right: 1rem;
  background: url(${props => props.url});
  background-size: cover;
  background-position: center;
`;

const RegisterProductImageUploadGroupFirebase = () => {
  const storage = getStorage();

  const [imgUpload, setImgUpload] = useState<FileTypes | null>(null);
  const [imgUrl, setImgUrl] = useRecoilState(ImgUrlArrState);

  const upload = () => {
    if (imgUpload === null) return;

    const id = Date.now() / imgUpload.name.length;
    const imageRef = ref(storage, `images/${imgUpload.name}_${id}`);

    uploadBytes(imageRef, imgUpload as any).then(snapshot => {
      getDownloadURL(snapshot.ref).then(url => {
        setImgUrl(prev => [
          ...prev,
          { url: url, id: `images/${imgUpload.name}_${id}` },
        ]);
      });
    });
  };

  const deleteImg = (event: React.MouseEvent<HTMLElement>) => {
    const deleteRef = ref(storage, event.currentTarget.id);
    deleteObject(deleteRef);
    setImgUrl(imgUrl.filter(obj => obj.id !== event.currentTarget.id));
  };

  useEffect(upload, [imgUpload]);

  return (
    <RegisterProductGroupComponent flexDirection="column">
      <InputComponent>
        <>
          <Label>이미지</Label>
          <AddImgBtnLabel htmlFor="imgUpload">
            <BsPlusCircle />
          </AddImgBtnLabel>

          {imgUrl.map(item => {
            return (
              <PreviewComponent key={item.url}>
                <PreviewImgCard url={item.url} />
                <StyledDeleteBtn
                  top="-4px"
                  right="10px"
                  id={item.id}
                  onClick={event => deleteImg(event)}
                >
                  <CgClose width="1.5rem" id={item.id} />
                </StyledDeleteBtn>
              </PreviewComponent>
            );
          })}

          <AddImgBtn
            type="file"
            id="imgUpload"
            accept="image/*"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.currentTarget.files !== null) {
                setImgUpload(event.currentTarget.files[0]);
              }
            }}
            required
          />
        </>
      </InputComponent>
    </RegisterProductGroupComponent>
  );
};

export default RegisterProductImageUploadGroupFirebase;
