import React from 'react';
import styled from 'styled-components';

const SideMain = styled.main`
  display: flex;
  background-color: #eaecef;
  border: 1px solid black;
  width: 20rem;
  height: 43rem;
  position: relative;
  top: 45rem;
  left: 19.7rem;
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
    opacity: 0.4;
    border-bottom: 1px solid;
  }
`;

const SideBar = () => {
  return (
    <>
      <SideMain>
        <h2>마이페이지</h2>
        <SideMenu>
          <h3>프로필</h3>
          <h3>위치설정</h3>
          <h3>교환목록</h3>
          <h3>북마크</h3>
          <h3>신고내역</h3>
        </SideMenu>
      </SideMain>
    </>
  );
};

export default SideBar;
