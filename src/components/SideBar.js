import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { linkStyle } from '../styles/linkStyle';

const SideMain = styled.main`
  display: flex;
  background-color: #eaecef;
  border: 1px solid black;
  width: 20rem;
  height: 43rem;
  position: relative;
  top: 45rem;
  right: -33rem;
  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 2rem 2rem;
  }
`;

const SideMenu = styled.section`
  flex-direction: column;
  margin-top: 7rem;
  align-items: center;
  position: relative;
  width: 8rem;
  right: 10rem;
  line-height: 4rem;
  h3 {
    border-bottom: 1px solid;
    font-weight: bold;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

const SideBar = () => {
  return (
    <>
      <SideMain>
        <h2>마이페이지</h2>
        <SideMenu>
          <Link to="/" style={linkStyle}>
            <h3>프로필</h3>
          </Link>
          <Link to="/locationsetting" style={linkStyle}>
            <h3>위치설정</h3>
          </Link>
          <Link to="/swaplist" style={linkStyle}>
            <h3>교환목록</h3>
          </Link>
          <Link to="/bookmark" style={linkStyle}>
            <h3>북마크</h3>
          </Link>
          <h3>신고내역</h3>
        </SideMenu>
      </SideMain>
    </>
  );
};

export default SideBar;
