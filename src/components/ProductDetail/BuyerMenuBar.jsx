import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

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
  :active {
    background-color: #e4e4e4;
  }
`;

const StyledBookmarkBtn = styled(StyledBtn)`
  line-height: 1.2rem;
  font-size: 2.5rem;
  border-bottom-left-radius: 0.4rem;
`;

const StyledChattingBtn = styled(StyledBtn)`
  font-size: 1.5rem;
  border-bottom-right-radius: 0.4rem;
`;

const BuyerMenuBar = () => {
  return (
    <StyledBuyerMenuBar>
      <StyledBookmarkBtn>
        <AiOutlineHeart />
      </StyledBookmarkBtn>
      <StyledChattingBtn>채팅하기</StyledChattingBtn>
    </StyledBuyerMenuBar>
  );
};

export default BuyerMenuBar;
