import React from 'react';
import styled from 'styled-components';
import { data, themeColor, darkModeToggle } from '../../atoms/atoms';
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
  const firestoreData = useRecoilValue(data);
  const themeMode = useRecoilValue(darkModeToggle);
  const themeColorObject = useRecoilValue(themeColor);
  return (
    <>
      <Container>
        <SectionTitle
          titleName={'인기 게시글 탐색'}
          border={'none'}
          titleMargin={5}
          href={'/product-list'}
        />
        <PopularPostListContainer>
          {firestoreData.map((el, index: number) => {
            if (index < 7) {
              if (index === 6)
                return (
                  <PopularPostItemBox
                    themeMode={themeMode}
                    themeColorObject={themeColorObject}
                    key={el.postId}
                    style={{ borderBottom: 'none' }}
                  >
                    <PopularPostItemId>{index + 1}</PopularPostItemId>
                    <Link
                      to={`/detail/${el.postId}`}
                      onClick={() => console.log(el.postId)}
                    >
                      <PopularPostItemTitle>{el.title}</PopularPostItemTitle>
                    </Link>
                  </PopularPostItemBox>
                );
              else
                return (
                  <PopularPostItemBox
                    themeMode={themeMode}
                    themeColorObject={themeColorObject}
                    key={el.postId}
                  >
                    <PopularPostItemId>{index + 1}</PopularPostItemId>
                    <Link
                      style={linkStyle}
                      to={`/detail/${el.postId}`}
                      onClick={() => console.log(el.postId)}
                    >
                      <PopularPostItemTitle>{el.title}</PopularPostItemTitle>
                    </Link>
                  </PopularPostItemBox>
                );
            }
          })}
        </PopularPostListContainer>
      </Container>
    </>
  );
};

export default PopularPostList;
