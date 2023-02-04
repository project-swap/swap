import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { FiSend } from 'react-icons/fi';

import { realtimeDatabase } from '../../firebase';
import { ref, push, set, onValue } from 'firebase/database';
import { useSetRecoilState } from 'recoil';
import { getMessage } from '../../atoms/atoms';

interface IMessage {
  [key: string]: string;
}

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
  const messageData = useSetRecoilState(getMessage);
  // Message === 현재 사용자 uid(recoil) + 게시글 uid
  const messageRef = ref(realtimeDatabase, 'Message');

  const sendMessage = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement>,
  ) => {
    e.preventDefault();
    // db를 firebase로 보내겠다 = push
    const newMessageRef = push(messageRef);
    set(newMessageRef, chatMessage);
    // chatMessage => 채팅방에 입장하셨씁니다-
    setChatMessage('');
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatMessage(e.target.value);
  };

  useEffect(() => {
    onValue(ref(realtimeDatabase), snapshot => {
      const data = snapshot.val();
      const array: string[] = [];
      Object.values<IMessage>(data).map(el => {
        for (const key in el) {
          array.push(el[key]);
        }
        messageData(array);
      });
    });
  }, []);

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
