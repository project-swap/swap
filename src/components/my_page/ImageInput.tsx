import React from 'react';
import styled from 'styled-components';
import ImageUpload from './ImageUpload';

const ImageUploadMessageContainer = styled.div`
  display: flex;
`;

const ImageMessageInput = styled.input`
  width: 100%;
  height: 60%;
  &::placeholder {
    opacity: 0.6;
  }
`;

const ImageInput = ({ imgName = '' }: { imgName: string }) => {
  return (
    <ImageUploadMessageContainer>
      <ImageMessageInput
        id="image-message-input"
        type="text"
        placeholder={imgName || '이미지를 업로드하세요.'}
        disabled
      />
      <ImageUpload />
    </ImageUploadMessageContainer>
  );
};

export default ImageInput;
