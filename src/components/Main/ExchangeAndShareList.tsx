import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ProductImg from '../common/ProductCard/ProductImg';
// import SalesTitle from '../common/ProductCard/SalesTitle';

import { useRecoilValue } from 'recoil';
import { getTest, darkModeToggle } from '../../atoms/atoms';

interface IExchangeAndShareItem {
  darkMode: boolean;
}

interface IContent {
  id: number;
  title: string;
  content: string;
  hash_tag: string[];
  name: string;
  date: string;
  category?: string;
  productImgUrl?: string;
  profileImgUrl?: string;
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
`;

const ExchangeAndShareList = () => {
  const data = useRecoilValue(getTest);
  const darkMode = useRecoilValue(darkModeToggle);

  const contents = data.map<IContent>(content => {
    return {
      id: content.id,
      title: content.title,
      content: content.content,
      hash_tag: content.hash_tag,
      name: content.name,
      date: content.date,
      category: '교환',
      productImgUrl: 'https://url.kr/quav97',
      profileImgUrl:
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
        />
        <ExchangeAndShareListContainer>
          {contents.map((content, index: number) => {
            return index < 6 ? (
              <ExchangeAndShareItem darkMode={darkMode} key={index}>
                <ProductImg
                  url={content.productImgUrl}
                  width={'6rem'}
                  height={'5rem'}
                />
                <ExchangeAndShareItemContents>
                  <ExchangeAndShareItemCategory>
                    {content.category}
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
