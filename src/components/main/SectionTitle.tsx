import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { themeColor, darkModeToggle } from '../../atoms/atoms';

// image,icon, font-style
import { HiChevronRight } from 'react-icons/hi';
import { linkStyle } from '../../styles/linkStyle';

interface IPropsStyle {
  titleName: string;
  border: string;
  titleMargin: number;
  href?: string;
}

interface IViewMore {
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
interface ISectionName {
  titleMargin: number;
}
interface ITopContainer {
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
  border: string;
}

const Container = styled.section`
  width: 23.13rem;
`;
const SectionName = styled.div<ISectionName>`
  height: 2.63rem;
  font-size: 1.25rem;
  font-weight: bold;
  margin-right: ${props =>
    props.titleMargin
      ? `
    ${props.titleMargin}rem`
      : '7.5rem'};
`;
const TopContainer = styled.div<ITopContainer>`
  display: flex;
  justify-content: center;
  border-bottom: ${props => (props.border ? props.border : 'solid 3px')};
  border-color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkLine
      : props.themeColorObject.lightLine};
`;

const ViewMoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ViewMore = styled.div<IViewMore>`
  font-size: 0.63rem;
  margin-bottom: 0.1rem;
  color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkFont
      : props.themeColorObject.lightFont};
`;

const SectionTitle = (props: IPropsStyle) => {
  const themeMode = useRecoilValue(darkModeToggle);
  const themeColorObject = useRecoilValue(themeColor);
  return (
    <>
      <Container>
        <TopContainer
          themeMode={themeMode}
          themeColorObject={themeColorObject}
          border={props.border}
        >
          <SectionName titleMargin={props.titleMargin}>
            {props.titleName}
          </SectionName>
          <ViewMoreContainer>
            <Link to={props.href ? props.href : '/'} style={linkStyle}>
              <ViewMore
                themeMode={themeMode}
                themeColorObject={themeColorObject}
              >
                더보기
              </ViewMore>
            </Link>
            <Link to="/" style={linkStyle}>
              <HiChevronRight
                style={{
                  color: `${
                    themeMode
                      ? themeColorObject.darkFont
                      : themeColorObject.lightFont
                  }`,
                }}
              />
            </Link>
          </ViewMoreContainer>
        </TopContainer>
      </Container>
    </>
  );
};

export default SectionTitle;
