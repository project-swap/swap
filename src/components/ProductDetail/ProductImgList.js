import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const StyledProductImgList = styled.div`
  background-color: black;
  width: 100%;
  height: 18.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 4rem;
`;

const StyledBtn = styled.button`
  font-size: 3rem;
  color: #eee;
  background-color: transparent;
  border: none;
  :active {
    color: #000;
  }
`;

const ProductImgList = () => {
  return (
    <StyledProductImgList>
      <StyledBtnBox>
        <StyledBtn>
          <AiOutlineArrowLeft />
        </StyledBtn>
        <StyledBtn>
          <AiOutlineArrowRight />
        </StyledBtn>
      </StyledBtnBox>
    </StyledProductImgList>
  );
};

export default ProductImgList;
