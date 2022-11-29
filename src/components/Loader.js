import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    top:0rem;
  }
  95% {
    width: 15rem;
  }
  to {
    top: 20rem;
    width: 20rem;
    height: 15rem;
  } 
`;

const LodingAnimation = styled.div`
  position: relative;
  top: 0rem;
  width: 15rem;
  height: 15rem;
  background-color: green;
  border-radius: 50%;
  animation: ${animation} 1s ease-in Infinite Alternate;
`;

const LodingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50vw;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LodingContainer>
      <LodingAnimation />
    </LodingContainer>
  );
};

export default Loader;
