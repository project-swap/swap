import React from 'react';
import styled from 'styled-components';
import FollowList from './FollowList';
import FollowMenuBar from './FollowMenuBar';

const StyledFollowComponent = styled.div`
  display: flex;
  margin: 3rem;
  height: 50rem;
`;

const FollowComponent = () => {
  return (
    <StyledFollowComponent>
      <FollowMenuBar />
      <FollowList />
    </StyledFollowComponent>
  );
};

export default FollowComponent;
