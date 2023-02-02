import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/common/NavBar';
<<<<<<< HEAD
import UserChatNameBox from '../components/chatting/UserChatNameBox';
import UserAllChatBox from '../components/chatting/UserChatMessageArea';
import UserChatInput from '../components/chatting/UserChatInput';
=======
import UserChatNameBox from '../components/Chatting/ChattingDetail/UserChatNameBox';
import UserAllChatBox from '../components/Chatting/ChattingDetail/UserChatMessageArea';
import UserChatInput from '../components/Chatting/ChattingDetail/UserChatInput';
>>>>>>> 56769b8ebfba99bc67b570318e75be315e63e45a

const UserChattingWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const UserChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
        <UserChatContainer>
          <NamingBoxWrap>
            <UserChatNameBox />
          </NamingBoxWrap>
          <UserAllChatBox />
          <UserChatInput />
        </UserChatContainer>
      </UserChattingWrap>
    </>
  );
};

export default UserChatting;
