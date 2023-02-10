import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import SearchBar from '../components/chatting/chatting_list/SearchBar';
import ChattingList from '../components/chatting/chatting_list/ChatItem';

const ChatListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

const ChatListBox = styled.div`
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
  align-items: center;
  width: 52.19rem;
  height: 31.88rem;
  border: solid 1px black;
`;

const UserChattingList = () => {
  return (
    <>
      <NavBar />
      <ChatListContainer>
        <ChatListBox>
          <SearchBar />
          <ChattingList />
        </ChatListBox>
      </ChatListContainer>
    </>
  );
};

export default UserChattingList;
