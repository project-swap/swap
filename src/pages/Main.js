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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: ${props => (props.themeMode ? '#C6C2C2' : 'white')};
`;

const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const SectionFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Main = () => {
  const themeMode = useRecoilValue(darkMode);

  return (
    <>
      <MainContainer themeMode={themeMode}>
        <NavBar />
        <MainSectionContainer>
          <SectionFlexContainer>
            <Carousel />
            <SectionContainer />
          </SectionFlexContainer>
        </MainSectionContainer>
        <Footer />
      </MainContainer>
    </>
  );
};

export default Main;
