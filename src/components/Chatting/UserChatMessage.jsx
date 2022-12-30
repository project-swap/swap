import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { getMessage } from '../../atoms/atoms';
import { useRecoilValue } from 'recoil';

const MyChattingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: auto;
  border-radius: 1rem;
  background-color: white;
  margin-left: 5rem;
  margin-top: 1rem;
  padding: 1rem 1rem 1rem 1rem;
  word-break: keep-all;
  word-wrap: normal;
`;

const TraderChattingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: auto;
  border-radius: 1rem;
  background-color: white;
  margin-left: 45rem;
  margin-top: 1rem;
  padding: 1rem 1rem 1rem 1rem;
  word-break: keep-all;
  word-wrap: normal;
`;

const UserChatMessage = () => {
  const messageData = useRecoilValue(getMessage);
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current.scrollIntoView();
  }, [messageData]);

  return (
    <>
      {messageData
        ? messageData.map((el, index) => {
            if (el) {
              return <MyChattingBox key={index}>{el}</MyChattingBox>;
            } else {
              return <TraderChattingBox key={index}>{el}</TraderChattingBox>;
            }
          })
        : null}
      <div ref={bottomRef}></div>
    </>
  );
};

export default UserChatMessage;
