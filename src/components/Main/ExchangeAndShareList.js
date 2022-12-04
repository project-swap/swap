import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
// import SalesProductCard from '../common/SalesProductCard';

const Container = styled.section`
  width: 22.94rem;
`;

const ExchangeAndShareListContainer = styled.div`
  height: 17.75rem;
`;
// const ExchangeAndShareItem = styled.(SalesProductCard)``;

const ExchangeAndShareList = () => {
  return (
    <>
      <Container>
        <SectionTitle titleName={'교환/나눔 물품 리스트'}></SectionTitle>
        <ExchangeAndShareListContainer>
          {/* <ExchangeAndShareItem /> */}
        </ExchangeAndShareListContainer>
      </Container>
    </>
  );
};

export default ExchangeAndShareList;
