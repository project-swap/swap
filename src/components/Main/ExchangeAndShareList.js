import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

// import { getTest } from '../../atoms/atoms';
// import { useRecoilValue } from 'recoil';

const Container = styled.section`
  width: 22.94rem;
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
  // const mockData = useRecoilValue(getTest);
  // console.log(mockData);
  return (
    <>
      <Container>
        <SectionTitle titleName={'교환/나눔 물품 리스트'}></SectionTitle>
        <ExchangeAndShareListContainer></ExchangeAndShareListContainer>
      </Container>
    </>
  );
};

export default ExchangeAndShareList;
