import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/common/NavBar';
import UserChattingNameBox from '../components/Chatting/UserChatNameBox';
import UserAllChatBox from '../components/Chatting/UserChatMessageArea';

const UserChattingWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const UserChattingContainer = styled.div`
  width: 60rem;
  height: 45rem;
  margin-top: 3rem;
  border: 1px solid #000000;
  background-color: grey;
`;

const NamingBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const UserChatting = () => {
  return (
    <>
      <NavBar />
      <UserChattingWrap>
        <UserChattingContainer>
          <NamingBoxWrap>
            <UserChattingNameBox />
          </NamingBoxWrap>
          <UserAllChatBox />
        </UserChattingContainer>
      </UserChattingWrap>
    </>
  );
};

export default UserChatting;
