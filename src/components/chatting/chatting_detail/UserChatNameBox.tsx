import React from 'react';
import styled from 'styled-components';

const NamingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 3.5rem;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;

const UserChatNameBox = () => {
  return (
    <>
      <NamingContainer>User</NamingContainer>
    </>
  );
};

export default UserChatNameBox;
