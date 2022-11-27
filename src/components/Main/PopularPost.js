import React from 'react';
import styled from 'styled-components';
import { getTest } from '../../atoms/atoms';
import { useRecoilValue } from 'recoil';
import SectionTitle from './SectionTitle';

const Container = styled.section`
  width: 17.31rem;
`;

const PopularPostListContainer = styled.div`
  height: 17.75rem;
  margin-left: 3.06rem;
`;
const PopularPostItemBox = styled.div`
  display: flex;
  width: 17.31rem;
  border-bottom: solid 2px black;
  padding-bottom: 0.69rem;
  margin-bottom: 1.25rem;
`;
const PopularPostItemId = styled.span`
  margin-right: 1.25rem;
`;
const PopularPostItemTitle = styled.span`
  font-size: 1rem;
`;

const PopularPostList = () => {
  const mockData = useRecoilValue(getTest);
  console.log(mockData);
  return (
    <>
      <Container>
        <SectionTitle
          titleName={'인기 게시글 탐색'}
          border={'none'}
          titleMargin={5}
        />
        <PopularPostListContainer>
          {mockData.map((el, index) => {
            if (index < 7) {
              if (index === 6)
                return (
                  <PopularPostItemBox
                    key={el.id}
                    style={{ borderBottom: 'none' }}
                  >
                    <PopularPostItemId>{el.id}</PopularPostItemId>
                    <PopularPostItemTitle>{el.title}</PopularPostItemTitle>
                  </PopularPostItemBox>
                );
              else
                return (
                  <PopularPostItemBox key={el.id}>
                    <PopularPostItemId>{el.id}</PopularPostItemId>
                    <PopularPostItemTitle>{el.title}</PopularPostItemTitle>
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
