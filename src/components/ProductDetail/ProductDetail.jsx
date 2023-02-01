import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getTest } from '../../atoms/atoms';
import BuyerMenuBar from './BuyerMenuBar';
import Content from './Content';
import PostInfo from './PostInfo';
import ProductDetailComponent from './ProductDetailComponent';
import ProductImgList from './ProductImgList';
import SellerInfo from './SellerInfo';
import Title from './Title';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const StyledContentField = styled.div`
  display: flex;
  flex-direction: column;
  width: 280rem;
`;

const StyledTitleField = styled.div`
  padding: 1.5rem 3.12rem;
  border-bottom: 1px solid black;
`;

const StyledBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  width: 95%;
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

const ProductDetail = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const data = useRecoilValue(getTest);
  const { postId } = useParams();

  let currentData;

  data.map(item => {
    if (item.postId === String(postId)) {
      return (currentData = item);
    }
  });

  const increaseImgIndex = () => {
    if (imageIndex === currentData.imgUrl.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const decreaseImgIndex = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(currentData.imgUrl.length - 1);
    }
  };

  return (
    <ProductDetailComponent>
      <ProductImgList url={currentData.imgUrl[imageIndex].url}>
        <StyledBtnBox>
          <StyledBtn onClick={decreaseImgIndex}>
            <AiOutlineArrowLeft />
          </StyledBtn>
          <StyledBtn onClick={increaseImgIndex}>
            <AiOutlineArrowRight />
          </StyledBtn>
        </StyledBtnBox>
      </ProductImgList>

      <StyledContentField>
        <StyledTitleField>
          <Title title={currentData.title} />
          <PostInfo
            convertDate={currentData.convertDate}
            date={currentData.date}
          />
        </StyledTitleField>
        <SellerInfo name={currentData.name} />
        <Content content={currentData.content} />
        <BuyerMenuBar />
      </StyledContentField>
    </ProductDetailComponent>
  );
};

export default ProductDetail;
