import React from 'react';
import styled from 'styled-components';
import loader from '../assets/loader.gif';

const LodingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Loader = () => {
  return (
    <LodingContainer>
      <img src={loader} alt="loader" />
    </LodingContainer>
  );
};

export default Loader;
