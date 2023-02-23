import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ProductImg from '../common/product_card/ProductImg';
// import SalesTitle from '../common/ProductCard/SalesTitle';

import { useRecoilValue } from 'recoil';
import { getTest, darkModeToggle } from '../../atoms/atoms';

interface IExchangeAndShareItem {
  darkMode: boolean;
}

const Container = styled.section`
  width: 22.94rem;
`;
const ExchangeAndShareListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 23rem;
  height: 10rem;
  margin-top: 1rem;
`;
const ExchangeAndShareItemContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.3rem;
`;

const ExchangeAndShareItem = styled.div<IExchangeAndShareItem>`
  border: ${props => (props.darkMode ? `white solid 1px` : `black solid 1px`)};
  border-radius: 12px;
  cursor: pointer;
`;

const ExchangeAndShareItemCategory = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
  text-align: center;
  font-weight: 600;
`;

const ExchangeAndShareList = () => {
  const data = useRecoilValue(getTest);
  const darkMode = useRecoilValue(darkModeToggle);

  const contents = data.map(content => {
    return {
      postId: content.postId,
      title: content.title,
      content: content.content,
      hash_tag: content.hash_tag,
      name: content.name,
      date: content.date,
      type: content.type,
      imgUrl: content.imgUrl[0].url,
      profileImg:
        'https://dimg.donga.com/wps/NEWS/IMAGE/2003/06/12/6896662.1.jpg',
    };
  });

  return (
    <>
      <Container>
        <SectionTitle
          titleName={'교환/나눔 물품 리스트'}
          border={''}
          titleMargin={0}
          href={'/product-list'}
        />
        <ExchangeAndShareListContainer>
          {contents.map((content, index: number) => {
            return index < 6 ? (
              <ExchangeAndShareItem darkMode={darkMode} key={index}>
                <ProductImg
                  url={content.imgUrl}
                  width={'6rem'}
                  height={'5rem'}
                />
                <ExchangeAndShareItemContents>
                  <ExchangeAndShareItemCategory>
                    {content.type}
                  </ExchangeAndShareItemCategory>
                  {/* <SalesTitle marginBottom={'0.4rem'} title={content.title} /> */}
                </ExchangeAndShareItemContents>
              </ExchangeAndShareItem>
            ) : null;
          })}
        </ExchangeAndShareListContainer>
      </Container>
    </>
  );
};

export default ExchangeAndShareList;
