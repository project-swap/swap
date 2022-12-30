import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { themeColor, darkModeToggle } from '../atoms/atoms';

// import Components
import SectionContainer from '../components/Main/SectionContainer';

// components import
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer.tsx';
import Carousel from '../components/Carousel';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  color: ${props =>
    props.darkMode
      ? props.themeColorObject.darkFont
      : props.themeColorObject.lightFont};
  background-color: ${props =>
    props.darkMode
      ? props.themeColorObject.darkMain
      : props.themeColorObject.lightMain};
`;

const MainSectionContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Main = () => {
  const darkMode = useRecoilValue(darkModeToggle);
  const themeColorObject = useRecoilValue(themeColor);

  return (
    <MainContainer darkMode={darkMode} themeColorObject={themeColorObject}>
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
