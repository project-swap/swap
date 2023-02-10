import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/common/NavBar';
import UserChatNameBox from '../components/chatting/chatting_detail/UserChatNameBox';
import UserAllChatBox from '../components/chatting/chatting_detail/UserChatMessageArea';
import UserChatInput from '../components/chatting/chatting_detail/UserChatInput';

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
