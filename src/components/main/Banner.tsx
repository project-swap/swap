import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import banner_04 from '../../assets/banner/banner_04.jpg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22.94rem;
`;

const BannerImg = styled.div`
  width: 13rem;
  height: 12rem;
  margin-right: 1rem;
  img {
    width: inherit;
    height: inherit;
  }
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
        <BannerImg>
          <img src={banner_04} alt="우리 swap, 푸르게 푸르게" />
        </BannerImg>
      </Container>
    </>
  );
};

export default Banner;
