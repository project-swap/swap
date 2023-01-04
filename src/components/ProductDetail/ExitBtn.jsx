import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

const StyledExitBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  margin: 3rem;
  font-size: 2.5rem;
  color: #000;
  z-index: 1;
  background-color: transparent;
  border: none;
  :active {
    color: #eee;
  }
`;

const ExitBtn = () => {
  return (
    <StyledExitBtn>
      <IoMdClose />
    </StyledExitBtn>
  );
};

export default ExitBtn;
