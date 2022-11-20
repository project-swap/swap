import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';

const BackgroundBlur = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Search = () => {
  return (
    <>
      <NavBar />
      search
      <BackgroundBlur />
    </>
  );
};

export default Search;
