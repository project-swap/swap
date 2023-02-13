import React from 'react';
import styled from 'styled-components';

const StyledFollowMenu = styled.div`
  background-color: #c5c5c5;
  width: 20rem;
  height: 100%;
`;

const MenuBtn = styled.button`
  background-color: transparent;
  display: block;
  padding: 2.5rem 0 0 2.5rem;
  border: none;
  font-size: 1.4rem;
`;

const FollowMenuBar = () => {
  return (
    <StyledFollowMenu>
      <MenuBtn>검색</MenuBtn>
      <MenuBtn>내 팔로우 보기</MenuBtn>
      <MenuBtn>추천 팔로우</MenuBtn>
      <MenuBtn>차단된 사용자</MenuBtn>
    </StyledFollowMenu>
  );
};

export default FollowMenuBar;
