import React from 'react';
import BuyerMenuBar from './BuyerMenuBar';
import Content from './Content';
import PostInfo from './PostInfo';
import ProductDetailComponent from './ProductDetailComponent';
import ProductImgList from './ProductImgList';
import SellerInfo from './SellerInfo';
import Title from './Title';

const ProductDetail = () => {
  return (
    <ProductDetailComponent>
      <ProductImgList />
      <SellerInfo />
      <Title title="내 돈 들고 튄 사람 잡습니다." />
      <PostInfo />
      <Content />
      <BuyerMenuBar />
    </ProductDetailComponent>
  );
};

export default ProductDetail;
