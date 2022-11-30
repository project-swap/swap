import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { darkMode } from '../atoms/atoms';

// import Components
import SectionContainer from '../components/Main/SectionContainer';

// import { firestore } from '../firebase';

// components import
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Carousel from '../components/Carousel';

const MainContainer = styled.div`
  height: 80vw;
  background-color: ${props => (props.themeMode ? '#C6C2C2' : 'white')};
  transition: all 150ms linear;
`;
const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  // const storageRef = firebaseStorage.ref();
  // const saveRoute = storageRef.child('images/' + '파일명');
  // const upload = saveRoute.put('업로드 파일');

  const themeMode = useRecoilValue(darkMode);
  console.log(themeMode);

  return (
    <MainContainer themeMode={themeMode}>
      <NavBar />
      <MainSectionContainer>
        <Carousel />
        <SectionContainer />
      </MainSectionContainer>
      <Footer />
    </MainContainer>
  );
};

export default Main;
