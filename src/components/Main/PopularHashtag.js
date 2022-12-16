import React from 'react';
import styled from 'styled-components';
import { getTest } from '../../atoms/atoms';
import { useRecoilValue } from 'recoil';
import SectionTitle from './SectionTitle';

const Container = styled.section`
  width: 14.56rem;
`;

const PopularHashTagList = styled.ul`
  height: 8rem;
  margin-left: 5rem;
`;

const PopularHashTagItem = styled.li`
  font-weight: bold;
  margin-bottom: 0.4rem;
  &:hover {
    border-bottom: solid 1px black;
  }
  cursor: pointer;
`;

const PopularHashTag = () => {
  const mockData = useRecoilValue(getTest);
  const arrangeHashtag = () => {
    const hashTagList = mockData.map(el => el.hash_tag);
    const hashTagObj = {};
    hashTagList.map(items => {
      items.map(el => {
        hashTagObj[el] = (hashTagObj[el] || 0) + 1;
      });
    });
    const hashTagSortList = Object.entries(hashTagObj).sort((a, b) => {
      return b[1] - a[1];
    });
    return hashTagSortList;
  };

  return (
    <>
      <Container>
        <SectionTitle
          titleName={'인기 해시태그'}
          border={'none'}
          titleMargin={2.56}
        />
        <PopularHashTagList>
          {arrangeHashtag(mockData).map((el, index) => {
            if (index < 5) {
              return (
                <PopularHashTagItem key={el[0]}>
                  {index + 1}. {el[0]}
                </PopularHashTagItem>
              );
            }
          })}
        </PopularHashTagList>
      </Container>
    </>
  );
};

export default PopularHashTag;
