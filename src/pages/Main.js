import React from 'react';
import { getTest } from '../atoms/atoms';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import ExchangeAndShareList from '../components/Main/ExchangeAndShareList';

// import { firestore } from '../firebase';

// components import
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Carousel from '../components/Carousel';

function Main() {
  const state = useRecoilValue(getTest);
  console.log(state);
  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const SectionContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 59.625rem;
    border: solid 1px black;
    margin-top: 0.88rem;
  `;

  // const storageRef = firebaseStorage.ref();
  // const saveRoute = storageRef.child('images/' + '파일명');
  // const upload = saveRoute.put('업로드 파일');

  return (
    <>
      <NavBar />
      <MainContainer>
        <Carousel />
        {/* {state.map(el => {
        return el.title;
      })} */}
        <SectionContainer>
          <ExchangeAndShareList />
        </SectionContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default Main;
