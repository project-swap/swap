import React from 'react';
import styled from 'styled-components';
import ExchangeAndShareList from '../components/Main/ExchangeAndShareList';
import PopularPostList from '../components/Main/PopularPost';
import PopularHashtag from '../components/Main/PopularHashtag';
import Banner from '../components/Main/Banner';

// import { firestore } from '../firebase';

// components import
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Carousel from '../components/Carousel';

const MainContainer = styled.div`
  height: 50vw;
`;
const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 60.25rem;
  height: 23.19rem;
  margin-top: 2rem;
  gap: 1rem;
`;

const HashtagAndBannerContainer = styled.div``;

function Main() {
  // const storageRef = firebaseStorage.ref();
  // const saveRoute = storageRef.child('images/' + '파일명');
  // const upload = saveRoute.put('업로드 파일');

  return (
    <MainContainer>
      <NavBar />
      <MainSectionContainer>
        <Carousel />
        {/* {state.map(el => {
        return el.title;
      })} */}
        <SectionContainer>
          <ExchangeAndShareList />
          <PopularPostList />
          <HashtagAndBannerContainer>
            <PopularHashtag />
            <Banner />
          </HashtagAndBannerContainer>
        </SectionContainer>
      </MainSectionContainer>
      <Footer />
    </MainContainer>
  );
}

export default Main;
