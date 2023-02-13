import { collection, getDocs, orderBy, query } from 'firebase/firestore';
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

  const filter = async (type: any) => {
    const postRef = await collection(db, 'posts');
    const queryData = query(postRef, orderBy('convertDate', type));
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

  return (
    <TapComponent>
      <PageTitle>교환/나눔</PageTitle>
      <FilterGroup>
        <Filter onClick={setMineFilter}>
          {filterType === 'mine' ? <FiCheckSquare /> : <FiSquare />}
          <FilterName>내가 쓴 글</FilterName>
        </Filter>
        <Bar />
        <Filter onClick={setDescFilter}>
          {filterType === 'desc' ? <FiCheckSquare /> : <FiSquare />}
          <FilterName>최신 순</FilterName>
        </Filter>

        <Filter onClick={setAscFilter}>
          {filterType === 'asc' ? <FiCheckSquare /> : <FiSquare />}
          <FilterName>오래된 순</FilterName>
        </Filter>
      </FilterGroup>
    </TapComponent>
  );
};

export default SalesProductListTap;
