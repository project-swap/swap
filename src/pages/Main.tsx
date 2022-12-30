import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { themeColor, darkModeToggle } from '../atoms/atoms';

// import Components
import SectionContainer from '../components/Main/SectionContainer';

// components import
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Carousel from '../components/Carousel';

interface Theme {
  themeMode: boolean;
  themeColorObject: {
    darkMain: string;
    darkNavAndFooter: string;
    darkLine: string;
    darkFont: string;
    lightMain: string;
    lightNavAndFooter: string;
    lightLine: string;
    lightFont: string;
  };
}

const MainContainer = styled.div<Theme>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkFont
      : props.themeColorObject.lightFont};
  background-color: ${props =>
    props.themeMode
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
  const themeMode = useRecoilValue(darkModeToggle);
  const themeColorObject = useRecoilValue(themeColor);

  return (
    <MainContainer themeMode={themeMode} themeColorObject={themeColorObject}>
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
