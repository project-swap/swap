import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    top:0rem;
    border-radius: 10%;
  }
  50%{
    border-radius: 50%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0rem;
  width: 15rem;
  height: 15rem;
  background-color: green;
  border-radius: 50%;
  font-size: 1.8rem;
  color: black;
  font-weight: bold;
  animation: ${animation} 1s ease-in Infinite Alternate;
`;

const LodingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40vw;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LodingContainer>
      <LodingAnimation>Loading...</LodingAnimation>
    </LodingContainer>
  );
};

export default Loader;
