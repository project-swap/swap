import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { filterData } from '../../atoms/atoms';
import ProductImg from '../common/ProductCard/ProductImg';
import ProfileImg from '../common/ProductCard/ProfileImg';
import SalesTitle from '../common/ProductCard/SalesTitle';
import SellerName from '../common/ProductCard/SellerName';
import PostingTime from '../common/ProductCard/PostingTime';
import ArticlePreview from '../common/ProductCard/ArticlePreview';
import { useNavigate } from 'react-router';

const SalesProductCardFrame = styled.li`
  width: 23%;
  height: 35rem;
  border: 2px solid #757575;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 15px;
  margin: 0 1rem 2rem;
  transition: all 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    border: 2px solid #000;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 6px 15px;
  }
  list-style: none;
`;

const SummaryInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SalesProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10rem;
  padding-left: 1.5rem;
`;

const SalesProductCard = () => {
  const filteredData = useRecoilValue(filterData);

  const navigate = useNavigate();

  const contents = filteredData.map(content => {
    return {
      key: content.postId.stringValue,
      title: content.title.stringValue,
      content: content.content.stringValue,
      name: content.name.stringValue,
      date: content.date.stringValue,
      convertDate: content.convertDate.stringValue,
      productImgUrl:
        content.imgUrl.arrayValue.values[0].mapValue.fields.url.stringValue,
      profileImgUrl: content.profileImg.stringValue,
    };
  });

  return (
    <>
      {contents.map(content => {
        return (
          <SalesProductCardFrame
            key={content.key}
            onClick={() => {
              navigate(`/detail/${content.key}`);
            }}
          >
            <ProductImg url={content.productImgUrl} />
            <SalesProductInfo>
              <SummaryInfo>
                <ProfileImg url={content.profileImgUrl} />
                <div>
                  <SalesTitle title={content.title} />
                  <SellerName name={content.name} />
                  <PostingTime
                    convertDate={content.convertDate}
                    date={content.date}
                  />
                </div>
              </SummaryInfo>
              <ArticlePreview content={content.content} />
            </SalesProductInfo>
          </SalesProductCardFrame>
        );
      })}
    </>
  );
};

export default SalesProductCard;
