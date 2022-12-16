import React, { useState } from 'react';
import styled from 'styled-components';

import { FiSend } from 'react-icons/fi';

import { realtimeDatabase } from '../../firebase';

const ChatForm = styled.form`
  display: flex;
  position: relative;
`;

const ChatInput = styled.input`
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  border: none;
`;

const ChatEnterBtn = styled(FiSend)`
  width: 2rem;
  height: 1.7rem;
  position: absolute;
  right: 0.1rem;
  margin-top: 0.5rem;
  border: none;
  outline: none;
  background-color: white;
  font-size: 1.8rem;
  cursor: pointer;
`;

const UserChatInput = () => {
  const [chatMessage, setChatMessage] = useState('');
  const sendMessage = e => {
    e.preventDefault();
    const messageRef = realtimeDatabase.ref('Message');
    messageRef.push(chatMessage);
    setChatMessage('');
    console.log('실행');
  };
  const handleOnChange = e => {
    setChatMessage(e.target.value);
  };

  return (
    <>
      <ChatForm onSubmit={sendMessage}>
        <ChatInput onChange={handleOnChange} value={chatMessage} />
        <ChatEnterBtn onClick={sendMessage} />
      </ChatForm>
    </>
  );
};

export default UserChatInput;
