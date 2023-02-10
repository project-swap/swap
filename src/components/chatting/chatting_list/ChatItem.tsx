import React, { useState } from 'react';
import styled from 'styled-components';

import { BiDotsVerticalRounded } from 'react-icons/bi';

interface IUserData {
  id: number;
  userName: string;
  lastMessage: string;
  notification: number;
  active: boolean;
}

const ChattingItems = styled.ul``;
const ChattingItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 43.25rem;
  height: 2.8rem;
  border: solid 1px black;
  margin-bottom: 1rem;
  gap: 1rem;
  overflow: hidden;
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
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 20rem;
  height: 2rem;
  cursor: pointer;
`;
const Notification = styled.div`
  display: flex;
  position: absolute;
  left: 39rem;
  justify-content: center;
  align-items: center;
  width: 1.2rem;
  height: 1.2rem;
  border: solid 1px black;
  border-radius: 50%;
  font-size: 0.8rem;
  background-color: orange;
`;

const NotNotification = styled.div`
  display: flex;
  position: absolute;
  left: 39rem;
  width: 1.2rem;
  height: 1.2rem;
`;

const DotsVerticalIcon = styled(BiDotsVerticalRounded)`
  font-size: 2rem;
  position: absolute;
  cursor: pointer;
  left: 41rem;
  z-index: 5;
  &.active {
    left: 32rem;
    animation-duration: 0.4s;
    animation-name: dotsSlideAnimation;
    @keyframes dotsSlideAnimation {
      from {
        left: 40rem;
      }
      to {
        left: 32rem;
      }
    }
  }
`;

const SlideOptionsWrap = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  left: 34rem;
  &.active {
    left: 34rem;
    animation-duration: 0.4s;
    animation-name: openSlideAnimation;
    @keyframes openSlideAnimation {
      from {
        left: 40rem;
      }
      to {
        left: 34rem;
      }
    }
  }
`;
const SlideOption = styled.div`
  display: flex;
  align-items: center;
  height: 2.8rem;
  padding: 0 0.5rem 0 0.5rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  white-space: nowrap;
`;

const ChatItem = () => {
  const mockData = [
    {
      id: 0,
      userName: '서희원',
      lastMessage: '뉴진스 하입보이요.',
      notification: 0,
      active: false,
    },
    {
      id: 1,
      userName: '박소예',
      lastMessage: '반갑습니다.',
      notification: 0,
      active: false,
    },
    {
      id: 2,
      userName: '정하승',
      lastMessage: '안녕하세요.',
      notification: 1,
      active: false,
    },
    {
      id: 3,
      userName: '박민주',
      lastMessage: '감사합니다.',
      notification: 3,
      active: false,
    },
  ];
  const [userState, setUserState] = useState(mockData);
  const copyUserState = [...userState];

  const clickSlideOption = (el: IUserData) => {
    if (!el.active) {
      copyUserState.filter(el => {
        el.active = false;
      });
    }
    el.active = !el.active;
    setUserState(copyUserState);
  };

  return (
    <>
      <ChattingItems>
        {copyUserState.map(el => {
          return (
            <ChattingItem key={el.id}>
              <UserName>{el.userName}</UserName>
              <LastMessage>{el.lastMessage}</LastMessage>
              {el.notification ? (
                <Notification>{el.notification}</Notification>
              ) : (
                <NotNotification />
              )}
              <DotsVerticalIcon
                onClick={() => {
                  clickSlideOption(el);
                }}
                className={el.active ? 'active' : 'inactive'}
              />
              {el.active ? (
                <SlideOptionsWrap className={el.active ? 'active' : 'inactive'}>
                  <SlideOption style={{ backgroundColor: 'red' }}>
                    신고하기
                  </SlideOption>
                  <SlideOption style={{ backgroundColor: 'white' }}>
                    나가기
                  </SlideOption>
                </SlideOptionsWrap>
              ) : null}
            </ChattingItem>
          );
        })}
      </ChattingItems>
    </>
  );
};

export default React.memo(ChatItem);
