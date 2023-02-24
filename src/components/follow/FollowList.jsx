import React from 'react';
import styled from 'styled-components';
import User from './User';

const StyledFollowList = styled.ul`
  width: 50rem;
  height: 100%;
  border-right: 2px solid #f0f0f0;
`;

const StyledTitleComponent = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.h2`
  font-size: 1.8rem;
  margin: 2.5rem 0.5rem 2.5rem 2.5rem;
`;

const StyledFollowAmount = styled.span`
  font-size: 1.2rem;
  line-height: 1rem;
`;

const FollowList = () => {
  return (
    <StyledFollowList>
      <StyledTitleComponent>
        <StyledTitle>내 팔로우 보기</StyledTitle>
        <StyledFollowAmount>∙ 5명</StyledFollowAmount>
      </StyledTitleComponent>
      <User />
    </StyledFollowList>
  );
};

export default FollowList;
