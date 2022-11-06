import React from 'react';
import styled from 'styled-components';

const CardFrame = styled.div`
  width: 25rem;
  height: 35rem;
  border: 2px solid #757575;

  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 15px;
  margin: 0 1rem 2rem;
  transition: border 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    border: 2px solid #000;
  }
`;

const CardImg = styled.div`
  background: center
    url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTdfMjYy%2FMDAxNjQyNDAyNTMwMjU5.e0JwiX9I8IjdONKcYqzCYaU8YiFHA0igovXbw_8pMEwg.wbwWHTaYLXUhAMUBgzR_K_8d_uyWFVMR68bCS5sa0Cwg.JPEG.fenergy12%2F14.jpg&type=sc960_832');
  box-sizing: border-box;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 25rem;
  width: 25rem;
  border-bottom: 1px solid black;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.01);
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10rem;
  padding-left: 1.5rem;
`;

const SummaryInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePic = styled.div`
  background-color: #392010;
  border: 1px solid black;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin-right: 0.8rem;
`;

const SalesInfo = styled.div``;

const SalesTitle = styled.h3`
  margin: 0 0 0.5rem;
`;

const SellerInfo = styled.span`
  margin-right: 0.5rem;
`;

const ArticlePreview = styled.p`
  margin: 1rem 0 0;
  padding-right: 1.5rem;
  line-height: 1.5rem;
`;

const ProductCard = () => {
  return (
    <CardFrame>
      <CardImg />
      <CardInfo>
        <SummaryInfo>
          <ProfilePic />
          <SalesInfo>
            <SalesTitle>예지 사진... 교환..</SalesTitle>
            <SellerInfo>작성자</SellerInfo>
            <SellerInfo>6분 전</SellerInfo>
          </SalesInfo>
        </SummaryInfo>
        <ArticlePreview>
          저 이거 진짜 교환 안하려고 했는데.. 진짜 가지고 싶은 게 있어요!
        </ArticlePreview>
      </CardInfo>
    </CardFrame>
  );
};

export default ProductCard;
