import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import ModalBox from '../components/ModalBox';
import BackgroundBlur from '../components/BackgroundBlur';

const SearchPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3.5rem;
  position: relative;
  box-sizing: border-box;
  z-index: 2;
`;

const Search = () => {
  return (
    <>
      <NavBar />
      <SearchPage>
        <ModalBox width={50} height={45}>
          search
        </ModalBox>
      </SearchPage>
      <BackgroundBlur />
    </>
  );
};

export default Search;
