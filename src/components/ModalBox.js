import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

const Modal = styled.section`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  border: 0.1rem solid #000;
  border-radius: 0.5rem;
`;

const ModalBox = ({ width, height, children }) => {
  return (
    <Modal width={`${width}rem`} height={`${height}rem`}>
      <Link to="/">
        <IoClose
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            color: '#000',
            fontSize: '2rem',
            cursor: 'pointer',
          }}
        />
      </Link>
      {children}
    </Modal>
  );
};

export default ModalBox;
