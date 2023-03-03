import React from 'react';
import { IoMdCloudUpload } from 'react-icons/io';
import styled from 'styled-components';

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

const ImageUpload = () => {
  return (
    <Label htmlFor="file-input">
      <IoMdCloudUpload className="cloud" />
    </Label>
  );
};

export default ImageUpload;
