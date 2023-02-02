import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IContents {
  width: string;
  height: string;
  children: ReactNode;
}

const Modal = styled.section<IContents>`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
`;

const ModalBox = ({ width, height, children }: IContents) => {
  return (
    <Modal width={`${width}rem`} height={`${height}rem`}>
      {children}
    </Modal>
  );
};

export default ModalBox;
