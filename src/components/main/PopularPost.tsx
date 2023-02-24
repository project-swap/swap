import React from 'react';
import styled from 'styled-components';
import { getTest, themeColor, darkModeToggle } from '../../atoms/atoms';
import { useRecoilValue } from 'recoil';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';
import { linkStyle } from '../../styles/linkStyle';

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

const Container = styled.section`
  width: 17.31rem;
`;

const PopularPostListContainer = styled.div`
  height: 17.75rem;
  margin-left: 3.06rem;
`;
const PopularPostItemBox = styled.div<Theme>`
  display: flex;
  width: 17.31rem;
  border-bottom: ${props =>
    props.themeMode
      ? `solid ${props.themeColorObject.darkLine} 1px`
      : `solid ${props.themeColorObject.lightLine} 1px`};
  padding-bottom: 0.69rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
`;
const PopularPostItemId = styled.span`
  margin-right: 1.25rem;
`;
const PopularPostItemTitle = styled.span`
  font-size: 1rem;
`;

const PopularPostList = () => {
  const mockData = useRecoilValue(getTest);
  const themeMode = useRecoilValue(darkModeToggle);
  const themeColorObject = useRecoilValue(themeColor);
  return (
    <>
      <Container>
        <SectionTitle
          titleName={'인기 게시글 탐색'}
          border={'none'}
          titleMargin={5}
        />
        <PopularPostListContainer>
          {mockData.map((el, index: number) => {
            if (index < 7) {
              if (index === 6)
                return (
                  <Link to={`/detail/${el.postId}`} style={linkStyle}>
                    <PopularPostItemBox
                      themeMode={themeMode}
                      themeColorObject={themeColorObject}
                      key={el.postId}
                      style={{ borderBottom: 'none' }}
                    >
                      <PopularPostItemId>{el.date}</PopularPostItemId>

                      <PopularPostItemTitle>{el.title}</PopularPostItemTitle>
                    </PopularPostItemBox>
                  </Link>
                );
              else
                return (
                  <Link to={`/detail/${el.postId}`} style={linkStyle}>
                    <PopularPostItemBox
                      themeMode={themeMode}
                      themeColorObject={themeColorObject}
                      key={el.postId}
                    >
                      <PopularPostItemId>{el.date}</PopularPostItemId>

                      <PopularPostItemTitle>{el.title}</PopularPostItemTitle>
                    </PopularPostItemBox>
                  </Link>
                );
            }
          })}
        </PopularPostListContainer>
      </Container>
    </>
  );
};

export default PopularPostList;
