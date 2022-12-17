import React from 'react';
import styled from 'styled-components';

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
  const myId = 'BTS';
  const mockData = [
    {
      key: 1,
      id: 'BTS',
      message: '안녕하세요.',
    },
    {
      key: 2,
      id: 'BlackPink',
      message: '안녕하세요 :)',
    },
    {
      key: 3,
      id: 'BTS',
      message: '혹시 물품 봐도 될까요 ?',
    },
    {
      key: 4,
      id: 'BlackPink',
      message: '네.',
    },
    {
      key: 5,
      id: 'BlackPink',
      message: '아 혹시 강남 쪽에서 보는거 맞죠 ?',
    },
    {
      key: 6,
      id: 'BTS',
      message: '네네.',
    },
    {
      key: 7,
      id: 'BTS',
      message: '나눔 물품이 스티커 맞죠 ?',
    },
    {
      key: 8,
      id: 'BTS',
      message: '노트북에 붙이려구요 ㅎㅎ',
    },
  ];

  return (
    <>
      {mockData.map(el => {
        if (el.id === myId) {
          return <MyChattingBox key={el.key}>{el.message}</MyChattingBox>;
        } else {
          return (
            <TraderChattingBox key={el.key}>{el.message}</TraderChattingBox>
          );
        }
      })}
    </>
  );
};

export default UserChatMessage;
