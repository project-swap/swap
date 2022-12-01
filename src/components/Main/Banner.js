import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22.94rem;
`;

const BannerImg = styled.div`
  width: 12.75rem;
  height: 8.5rem;
  background-color: pink;
  margin-right: 1rem;
`;

const Banner = () => {
  return (
    <>
      <Container>
        <SectionTitle
          titleName={'캠패인 배너'}
          border={'none'}
          titleMargin={3.5}
        />
        <BannerImg />
      </Container>
    </>
  );
};

export default Banner;
