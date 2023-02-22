import React from 'react';
import styled from 'styled-components';

const StyledUser = styled.li`
  display: flex;
  width: 45rem;
  height: 5rem;
  border-radius: 10px;
  background-color: #f0f0f0;
  margin: 1rem 2.5rem;
`;

const ProfileImg = styled.div`
  background: center url(${props => props.url}) no-repeat;
  width: 3rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 50%;
  margin: 1rem 1.5rem;
`;

ProfileImg.defaultProps = {
  url: 'src/assets/logo/ms-icon-144x144.png',
};

const User = () => {
  return (
    <StyledUser>
      <ProfileImg />
    </StyledUser>
  );
};

export default User;
