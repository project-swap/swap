import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getTest } from '../../atoms/atoms';
import { useRecoilValue } from 'recoil';

// image,icon, font-style
import { HiChevronRight } from 'react-icons/hi';
import { linkStyle } from '../../styles/linkStyle';

const Container = styled.section`
  width: 22.94rem;
`;
const ExchangeAndShareListTitle = styled.div`
  height: 2.63rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 2px black;
`;

const ViewMoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.3rem;
`;

const ViewMore = styled.span`
  font-size: 0.63rem;
`;

const ExchangeAndShareListContainer = styled.div`
  height: 17.75rem;
`;
// const ExchangeAndShareItem = styled.div``;
// const ExchangeAndShareImage = styled.div``;
// const ExchangeAndSharetitle = styled.div``;
// const ExchangeAndShareContent = styled.div``;
// const ExchangeAndShareBtn = styled.div``;

const ExchangeAndShareList = () => {
  const state = useRecoilValue(getTest);
  console.log(state);
  return (
    <>
      <Container>
        <TopContainer>
          <ExchangeAndShareListTitle>
            교환/나눔 물품 리스트
          </ExchangeAndShareListTitle>
          <Link to="/" style={linkStyle}>
            <ViewMoreContainer>
              <ViewMore>더보기</ViewMore>
              <HiChevronRight />
            </ViewMoreContainer>
          </Link>
        </TopContainer>
        <ExchangeAndShareListContainer></ExchangeAndShareListContainer>
      </Container>
    </>
  );
};

export default ExchangeAndShareList;
