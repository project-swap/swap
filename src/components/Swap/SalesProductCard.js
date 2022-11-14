import React from 'react';
import styled from 'styled-components';

const SalesProductCardFrame = styled.div`
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

const SalesProductImg = styled.div`
  background: center url(${props => props.url});
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

const SalesProductInfo = styled.div`
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

const ProfilePicture = styled.div`
  background: center url(${props => props.url}) no-repeat;
  background-size: 70px;
  border: 1px solid black;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin-right: 0.8rem;
`;

const SalesInfo = styled.div``;

const SalesTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const SellerName = styled.span`
  margin-right: 0.5rem;
`;

const PostingTime = styled.span`
  margin-right: 0.5rem;
  font-size: 0.8rem;
`;

const ArticlePreview = styled.p`
  margin: 1rem 0 0;
  padding-right: 1.5rem;
  line-height: 1.5rem;
`;

const SalesProductCard = () => {
  return (
    <SalesProductCardFrame>
      <SalesProductImg url="https://url.kr/quav97" />
      <SalesProductInfo>
        <SummaryInfo>
          <ProfilePicture url="https://dimg.donga.com/wps/NEWS/IMAGE/2003/06/12/6896662.1.jpg" />
          <SalesInfo>
            <SalesTitle>예지 사진... 교환..</SalesTitle>
            <SellerName>개똥이</SellerName>
            <PostingTime>6분 전</PostingTime>
          </SalesInfo>
        </SummaryInfo>
        <ArticlePreview>
          저 이거 진짜 교환 안하려고 했는데.. 진짜 가지고 싶은 게 있어요!
        </ArticlePreview>
      </SalesProductInfo>
    </SalesProductCardFrame>
  );
};

export default SalesProductCard;
