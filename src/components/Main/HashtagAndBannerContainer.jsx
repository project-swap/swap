import React from 'react';
import styled from 'styled-components';

import PopularHashtag from './PopularHashtag';
import Banner from './Banner';

const HashtagAndBannerContainerBox = styled.div``;

const HashtagAndBannerContainer = () => {
  return (
    <>
      <HashtagAndBannerContainerBox>
        <PopularHashtag />
        <Banner />
      </HashtagAndBannerContainerBox>
    </>
  );
};

export default HashtagAndBannerContainer;
