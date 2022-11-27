import React from 'react';
import styled from 'styled-components';
import { getTest } from '../../atoms/atoms';
import { useRecoilValue } from 'recoil';
import SectionTitle from './SectionTitle';

const WeeklyHashtag = () => {
  const mockData = useRecoilValue(getTest);
  console.log(mockData);

  const Container = styled.section`
    width: 14.56rem;
  `;

  const WeeklyHashtagContainer = styled.div`
    height: 12rem;
  `;

  return (
    <>
      <Container>
        <SectionTitle
          titleName={'주간 해시태그'}
          border={'none'}
          titleMargin={2.56}
        />
        <WeeklyHashtagContainer></WeeklyHashtagContainer>
      </Container>
    </>
  );
};

export default WeeklyHashtag;
