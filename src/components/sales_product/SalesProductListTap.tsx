import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React, { useState } from 'react';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { db } from '../../firebase';
import { filterData } from '../../atoms/atoms';

interface DataTypes {
  postId: string;
  title: string;
  content: string;
  hash_tag: string[];
  name: string;
  date: string;
  type: string;
  imgUrl: { url: string; id: string }[];
  uid: string;
  convertDate: string;
  profileImg: string;
}

type OrderByDirection = 'desc' | 'asc';

const TapComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem 2rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
`;

const Bar = styled.span`
  display: inline-block;
  margin: 0 0.5rem;
  background-color: black;
  height: 10px;
  width: 2px;
  border: 1px;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Filter = styled.div`
  display: flex;
  margin: 0.25rem;
  &:nth-child(5) {
  }
  cursor: pointer;
`;

const FilterName = styled.span`
  margin-left: 0.3rem;
`;

const SalesProductListTap = () => {
  const [filterType, setFilterType] = useState('');
  const setFilterDataArr = useSetRecoilState(filterData);

  const filter = async (type: OrderByDirection) => {
    const postRef = await collection(db, 'posts');
    const queryData = query(postRef, orderBy('convertDate', type), limit(12));
    const querySnapShot = await getDocs(queryData);
    const dataArr: DataTypes[] = [];

    querySnapShot.forEach(item => {
      const returnDoc = item.data() as DataTypes;
      dataArr.push(returnDoc);
    });

    setFilterDataArr(dataArr);
  };

  const setMineFilter = async () => {
    setFilterType('mine');
  };

  const setAscFilter = async () => {
    setFilterType('asc');
    filter('asc');
  };

  const setDescFilter = () => {
    setFilterType('desc');
    filter('desc');
  };

  const filterIcon = (filterType: string, type: string) => {
    if (filterType === type) return <FiCheckSquare />;
    return <FiSquare />;
  };

  return (
    <TapComponent>
      <PageTitle>교환/나눔</PageTitle>
      <FilterGroup>
        <Filter onClick={setMineFilter}>
          <>
            {filterIcon(filterType, 'mine')}
            <FilterName>내가 쓴 글</FilterName>
          </>
        </Filter>
        <Bar />
        <Filter onClick={setDescFilter}>
          <>
            {filterIcon(filterType, 'desc')}
            <FilterName>최신 순</FilterName>
          </>
        </Filter>

        <Filter onClick={setAscFilter}>
          <>
            {filterIcon(filterType, 'asc')}
            <FilterName>오래된 순</FilterName>
          </>
        </Filter>
      </FilterGroup>
    </TapComponent>
  );
};

export default SalesProductListTap;
