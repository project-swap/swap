import React, { useState } from 'react';
import styled from 'styled-components';

import { ImSearch } from 'react-icons/im';

const SearchForm = styled.form`
  width: 48rem;
  height: 4rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 43.25rem;
  height: 2.19rem;
  padding-left: 3rem;
  padding-right: 1rem;
  border-radius: 5rem;
  font-size: 1.2rem;
`;

const SearchIcon = styled(ImSearch)`
  width: 1.7rem;
  height: 1.2rem;
  position: absolute;
  left: 1rem;
  margin-top: 0.65rem;
  border: none;
  outline: none;
  background-color: white;
  font-size: 1.8rem;
`;

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const changeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <SearchForm onSubmit={searchHandler}>
        <SearchIcon />
        <SearchInput onChange={changeKeyword} value={keyword} />
      </SearchForm>
    </>
  );
};

export default SearchBar;
