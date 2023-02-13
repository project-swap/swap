import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getTest } from '../../atoms/atoms';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ProductDetailComponent from './ProductDetailComponent';
import ProductImgList from './ProductImgList';
import Title from './Title';
import PostInfo from './PostInfo';
import SellerInfo from './SellerInfo';
import Content from './Content';
import BuyerMenuBar from './BuyerMenuBar';

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

  const currentData = data.filter(item => item.postId === String(postId));

  const increaseImgIndex = () => {
    if (imageIndex === currentData[0].imgUrl.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const decreaseImgIndex = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(currentData[0].imgUrl.length - 1);
    }
  };

  return (
    <ProductDetailComponent>
      <ProductImgList url={currentData[0].imgUrl[imageIndex].url}>
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
          <Title title={currentData[0].title} />
          <PostInfo
            convertDate={currentData[0].convertDate}
            date={currentData[0].date}
          />
        </StyledTitleField>
        <SellerInfo
          name={currentData[0].name}
          url={currentData[0].profileImg}
        />
        <Content
          content={currentData[0].content}
          hash_tag={currentData[0].hash_tag}
        />
        <BuyerMenuBar />
      </StyledContentField>
    </ProductDetailComponent>
  );
};

export default ProductDetail;
