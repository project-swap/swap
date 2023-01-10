import React, { useState } from 'react';
import styled from 'styled-components';
import {
  RegisterProductGroupComponent,
  StyledDeleteBtn,
} from '../common/PublicStyle';
import { BsPlusCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

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

const PreviewImgCard = styled.div`
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
`;

const RegisterProductImageUploadGroup = () => {
  const [fileUrl, setFileUrl] = useState([]);

  const onLoadFile = event => {
    const fileArr = event.target.files;

    let fileUrlArr = [];

    let file;
    let fileLength = fileArr.length > 5 ? 5 : fileArr.length;

    for (let i = 0; i < fileLength; i++) {
      file = fileArr[i];

      const reader = new FileReader();

      reader.onload = () => {
        fileUrlArr[i] = reader.result;
        setFileUrl([...fileUrlArr]);
      };
      reader.readAsDataURL(file);
    }

    console.log(fileUrl);
  };

  return (
    <RegisterProductGroupComponent flexDirection="column">
      <InputComponent>
        <Label>이미지</Label>
        <AddImgBtnLabel htmlFor="imgUpload">
          <BsPlusCircle />
        </AddImgBtnLabel>
        <AddImgBtn
          type="file"
          id="imgUpload"
          accept="image/*"
          onChange={onLoadFile}
          require
          multiple
        />
        {fileUrl.map(url => {
          return (
            <PreviewComponent key="1">
              <PreviewImgCard url={url} />
              <StyledDeleteBtn top="-4px" right="10px">
                <CgClose width="1.5rem" />
              </StyledDeleteBtn>
            </PreviewComponent>
          );
        })}
      </InputComponent>
    </RegisterProductGroupComponent>
  );
};

export default RegisterProductImageUploadGroup;
