import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import { ComponentForCenterAlignment } from '../components/common/PublicStyle';
import { MdConstruction } from 'react-icons/md';
import Progress from '../assets/wip.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65vh;
`;

const Text = styled.div`
  font-size: 4rem;
  line-height: 4.5rem;
  margin-right: 1rem;
`;

const WIP = () => {
  return (
    <>
      <NavBar />
      <ComponentForCenterAlignment>
        <Container>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}
          >
            <MdConstruction
              style={{ fontSize: '10rem', marginRight: '1rem', padding: '0' }}
            />
            <Text>
              공사 중입니다 <br /> 돌아가 주세요
            </Text>
          </div>
          <img src={Progress} style={{ width: '33rem' }} />
        </Container>
      </ComponentForCenterAlignment>
      <Footer />
    </>
  );
};

export default WIP;
