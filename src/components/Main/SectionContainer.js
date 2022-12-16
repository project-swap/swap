import React from 'react';
import styled from 'styled-components';

import ExchangeAndShareList from '../Main/ExchangeAndShareList';
import PopularPostList from '../Main/PopularPost';
import HashtagAndBannerContainer from './HashtagAndBannerContainer';

const SectionContainerBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  margin-left: 5rem;
  gap: 1rem;
`;

const SectionContainer = () => {
  return (
    <>
      <SectionContainerBox>
        <ExchangeAndShareList />
        <PopularPostList />
        <HashtagAndBannerContainer />
      </SectionContainerBox>
    </>
  );
};

export default SectionContainer;
