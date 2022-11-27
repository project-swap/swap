import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

const Container = styled.section`
  width: 22.94rem;
`;

const BannerImg = styled.div`
  height: 17.75rem;
`;

const Banner = () => {
  return (
    <>
      <Container>
        <SectionTitle titleName={'캠패인 배너'} border={'none'} />
        <BannerImg></BannerImg>
      </Container>
    </>
  );
};

export default Banner;
