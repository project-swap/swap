import React from 'react';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';
import styled from 'styled-components';

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
  return (
    <TapComponent>
      <PageTitle>교환/나눔</PageTitle>
      <FilterGroup>
        <Filter>
          <FiCheckSquare />
          <FilterName>내가 쓴 글</FilterName>
        </Filter>
        <Bar />
        <Filter>
          <FiSquare />
          <FilterName>최신 순</FilterName>
        </Filter>

        <Filter>
          <FiCheckSquare />
          <FilterName>오래된 순</FilterName>
        </Filter>
      </FilterGroup>
    </TapComponent>
  );
};

export default SalesProductListTap;
