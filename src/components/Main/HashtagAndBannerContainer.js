import React from 'react';
import styled from 'styled-components';

import PopularHashtag from '../Main/PopularHashtag';
import Banner from '../Main/Banner';

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

export default React.memo(HashtagAndBannerContainer);
