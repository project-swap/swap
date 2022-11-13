import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

const Modal = styled.section`
  width: 30rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  border: 0.1rem solid #000;
  border-radius: 0.5rem;
`;

const ModalBox = props => {
  return (
    <Modal>
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
      {props.children}
    </Modal>
  );
};

ModalBox.propTypes = {
  children: propTypes.any,
};

export default ModalBox;
