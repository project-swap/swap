import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ProductImg from '../common/ProductCard/ProductImg';
import SalesTitle from '../common/ProductCard/SalesTitle';

import { useRecoilValue } from 'recoil';
import { getTest, darkModeToggle } from '../../atoms/atoms';

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

const ExchangeAndShareItem = styled.div`
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

  const contents = data.map(content => {
    return {
      key: content.id,
      title: content.title,
      content: content.content,
      hash: content.hash_tag,
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
        <SectionTitle titleName={'교환/나눔 물품 리스트'} />
        <ExchangeAndShareListContainer>
          {contents.map((content, index) => {
            return index < 6 ? (
              <ExchangeAndShareItem darkMode={darkMode} key={content.key}>
                <ProductImg
                  url={content.productImgUrl}
                  width={'6rem'}
                  height={'5rem'}
                />
                <ExchangeAndShareItemContents>
                  <ExchangeAndShareItemCategory>
                    {content.category}
                  </ExchangeAndShareItemCategory>
                  <SalesTitle marginBottom={'0.4rem'} title={content.title} />
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
