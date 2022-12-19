import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import UserChatMessage from './UserChatMessage';

const ChatTextArea = styled.div`
  height: 30rem;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 1rem;
    border: 2px solid grey;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 1rem;
    border: 2px solid black;
  }
`;

const UserChatMessageArea = () => {
  const areaRef = useRef();
  useEffect(() => {
    areaRef.current.scrollTop = areaRef.current.scrollHeigt;
  }, []);
  return (
    <>
      <ChatTextArea ref={areaRef}>
        <UserChatMessage />
      </ChatTextArea>
    </>
  );
};

export default UserChatMessageArea;
