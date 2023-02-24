import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';

interface DataProps {
  uid?: string | undefined;
  postId?: string | undefined;
}

const StyledBuyerMenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4.5rem;
`;

const StyledBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 50%;
  height: 100%;
  border: 1px solid black;
  padding: 0.8rem 0;
  :active {
    background-color: #e4e4e4;
  }
`;

const StyledBookmarkBtn = styled(StyledBtn)`
  line-height: 1.2rem;
  font-size: 2.5rem;
`;

const StyledChattingBtn = styled(StyledBtn)`
  font-size: 1.5rem;
  border-bottom-right-radius: 0.4rem;
  width: 100%;
`;

const BuyerMenuBar = ({ uid, postId }: DataProps) => {
  const auth = getAuth().currentUser;
  console.log(postId);
  console.log(`${auth?.uid}-${uid}`);
  return (
    <StyledBuyerMenuBar>
      <StyledBookmarkBtn>
        <AiOutlineHeart />
      </StyledBookmarkBtn>
      {uid === auth?.uid ? (
        <>
          <StyledChattingBtn>수정하기</StyledChattingBtn>
        </>
      ) : (
        <Link
          to={`/chat-user/${auth?.uid}-${uid}`}
          style={{ width: '100%', height: '100%' }}
        >
          <StyledChattingBtn>채팅하기</StyledChattingBtn>
        </Link>
      )}
    </StyledBuyerMenuBar>
  );
};

export default BuyerMenuBar;
