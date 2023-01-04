import React from 'react';
import styled from 'styled-components';

import { BiDotsVerticalRounded } from 'react-icons/bi';

const ChattingItems = styled.ul``;
const ChattingItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 43.25rem;
  height: 2.8rem;
  border: solid 1px black;
  margin-bottom: 1rem;
`;
const UserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2rem;
  margin-left: 1rem;
  border: solid 1px black;
  border-radius: 2rem;
  cursor: pointer;
`;
const LastMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 2rem;
  border: solid 1px black;
  cursor: pointer;
`;
const Notification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border: solid 1px black;
  border-radius: 50%;
`;

const NotNotification = styled.div`
  width: 2rem;
  height: 2rem;
`;

const DotsVerticalIcon = styled(BiDotsVerticalRounded)`
  font-size: 2rem;
  cursor: pointer;
`;

const ChatItem = () => {
  const mockData = [
    {
      id: 0,
      userName: '서희원',
      lastMessage: '뉴진스 하입보이요.',
      notification: 0,
    },
    {
      id: 1,
      userName: '박소예',
      lastMessage: '반갑습니다.',
      notification: 0,
    },
    {
      id: 2,
      userName: '정하승',
      lastMessage: '안녕하세요.',
      notification: 1,
    },
    {
      id: 3,
      userName: '박민주',
      lastMessage: '감사합니다.',
      notification: 3,
    },
  ];
  return (
    <>
      <ChattingItems>
        {mockData.map(el => {
          return (
            <ChattingItem key={el.id}>
              <UserName>{el.userName}</UserName>
              <LastMessage>{el.lastMessage}</LastMessage>
              {el.notification ? (
                <Notification>{el.notification}</Notification>
              ) : (
                <NotNotification />
              )}
              <DotsVerticalIcon />
            </ChattingItem>
          );
        })}
      </ChattingItems>
    </>
  );
};

export default ChatItem;
