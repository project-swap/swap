import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// image,icon, font-style
import { HiChevronRight } from 'react-icons/hi';
import { linkStyle } from '../../styles/linkStyle';

const SectionTitle = props => {
  const { titleName, border, titleMargin } = props;

  const Container = styled.section`
    width: 23.13rem;
  `;
  const SectionName = styled.div`
    height: 2.63rem;
    color: #4a4a4a;
    font-size: 1.25rem;
    font-weight: bold;
    margin-right: ${titleMargin
      ? `
    ${titleMargin}rem`
      : '7.5rem'};
  `;
  const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: ${border ? border : 'solid 3px black'};
  `;

  const ViewMoreContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `;

  const ViewMore = styled.div`
    font-size: 0.63rem;
    margin-bottom: 0.1rem;
  `;
  return (
    <>
      <Container>
        <TopContainer>
          <SectionName>{titleName}</SectionName>
          <ViewMoreContainer>
            <Link to="/" style={linkStyle}>
              <ViewMore>더보기</ViewMore>
            </Link>
            <Link to="/" style={linkStyle}>
              <HiChevronRight />
            </Link>
          </ViewMoreContainer>
        </TopContainer>
      </Container>
    </>
  );
};

export default SectionTitle;
