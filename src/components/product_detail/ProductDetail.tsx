import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { data } from '../../atoms/atoms';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ProductDetailComponent from './ProductDetailComponent';
import ProductImgList from './ProductImgList';
import Title from './Title';
import PostInfo from './PostInfo';
import SellerInfo from './SellerInfo';
import Content from './Content';
import BuyerMenuBar from './BuyerMenuBar';
import Type from './Type';

const StyledContentField = styled.div`
  display: flex;
  flex-direction: column;
  width: 280rem;
`;

const StyledTitleField = styled.div`
  padding: 1.5rem 3.12rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  const productData = useRecoilValue(data);
  const { postId } = useParams();

  const currentDatArr = productData.filter(
    item => item.postId === String(postId),
  );

  const currentData = currentDatArr[0];

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
          <div>
            <Title title={currentData.title} />
            <PostInfo
              convertDate={currentData.convertDate}
              date={currentData.date}
            />
          </div>
          <Type type={currentData.type} />
        </StyledTitleField>
        <SellerInfo name={currentData.name} url={currentData.profileImg} />
        <Content
          content={currentData.content}
          hash_tag={currentData.hash_tag}
        />
        <BuyerMenuBar />
      </StyledContentField>
    </ProductDetailComponent>
  );
};

export default ProductDetail;
