import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { ImgUrlArrState } from '../../atoms/atoms';
import { FileTypes } from '../register_product/RegisterProductImageUploadGroup';
import ImageNameInput from './ImageNameInput';

const ImageMessageContainer = styled.section`
  width: 105%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: bisque;
`;

const ImageInputUpload = styled.input`
  display: none;
`;

interface Props {
  setImgUpload: React.Dispatch<React.SetStateAction<FileTypes | null>>;
  setImgName: React.Dispatch<React.SetStateAction<string>>;
  imgName: string;
}

const ImageUploader = ({ setImgUpload, setImgName, imgName }: Props) => {
  const setImgUrl = useSetRecoilState(ImgUrlArrState);
  const handleImageUpload = (files: File) => {
    setImgUpload(files);
    setImgName(files.name);
    const reader = new FileReader();
    reader.onload = () => {
      const id = Date.now() / files.name.length;
      const url = URL.createObjectURL(files);
      const imgUrlObj = {
        url,
        id: `images/${files.name}_${id}`,
      };
      setImgUrl(prevImgUrl => [...prevImgUrl, imgUrlObj]);
    };
    reader.readAsDataURL(files);
  };

  const handleImageInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.currentTarget.files !== null) {
      const files = event.currentTarget.files[0];
      handleImageUpload(files);
    }
  };

  return (
    <ImageMessageContainer>
      <ImageNameInput imgName={imgName} />
      <ImageInputUpload
        id="file-input"
        type="file"
        accept="image/*"
        required
        onChange={handleImageInputChange}
      />
    </ImageMessageContainer>
  );
};

export default ImageUploader;
