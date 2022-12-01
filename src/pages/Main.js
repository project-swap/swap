import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { darkMode } from '../atoms/atoms';

// import Components
import SectionContainer from '../components/Main/SectionContainer';

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


function Main() {
const Main = () => {
  const themeMode = useRecoilValue(darkMode);

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
