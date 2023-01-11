import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import ModalBox from '../components/ModalBox';
import Footer from '../components/common/Footer';
import { EntireAreaWrap } from '../components/common/PublicStyle';
import { ImSearch } from 'react-icons/im';

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

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38rem;
  height: 5rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 3.2rem;
  padding: 0 2rem;
  border: 0.15rem solid #777;
  border-radius: 20rem;
  outline: none;
`;

const WeeklyHashTag = styled.section`
  display: flex;
  justify-content: center;
  width: 37.5rem;
  height: 30rem;
  margin-top: 1.5rem;
  position: relative;
  border: 0.15rem solid #777;
`;

const HashTagList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
  width: 33rem;
  height: 21rem;
  h2 {
    margin-bottom: 2rem 0;
    font-weight: bold;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 3rem 0;
    width: 20rem;
    li {
      width: 10rem;
      text-align: center;
      margin: 1rem 0;
    }
  }
`;

const Search = () => {
  return (
    <EntireAreaWrap>
      <NavBar />
      <SearchPage>
        <ModalBox width={50} height={45}>
          <SearchForm style={{ position: 'relative' }}>
            <SearchInput placeholder="검색어를 입력해주세요." />
            <ImSearch
              style={{
                width: '1.25rem',
                height: '1.25rem',
                position: 'absolute',
                right: '2rem',
                cursor: 'pointer',
              }}
            />
          </SearchForm>
          <WeeklyHashTag>
            <HashTagList>
              <h2>인기 해시태그 목록</h2>
              <ul>
                <li>1. 가나다</li>
                <li>2. 가나다</li>
                <li>3. 가나다</li>
                <li>4. 가나다</li>
                <li>5. 가나다</li>
                <li>6. 가나다</li>
                <li>7. 가나다</li>
                <li>8. 가나다</li>
                <li>9. 가나다</li>
                <li>10. 가나다</li>
              </ul>
            </HashTagList>
          </WeeklyHashTag>
        </ModalBox>
      </SearchPage>
      <Footer />
    </EntireAreaWrap>
  );
};

export default Search;
