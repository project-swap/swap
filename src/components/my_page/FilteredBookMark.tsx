import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import styled from 'styled-components';

const BookMarkFilter = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  font-weight: 300;
  font-size: 1rem;
  position: relative;
  left: 3rem;
  height: 1rem;
`;

const filteredBookMark = [
  { id: 1, text: '최신순' },
  { id: 2, text: '오래된순' },
  { id: 3, text: '교환중' },
  { id: 4, text: '교환 완료' },
];

const FilteredBookMark = () => {
  return (
    <BookMarkFilter>
      {filteredBookMark.map(filtered => (
        <>
          <FiCheckSquare />
          <h4 key={filtered.id}>최신순</h4>
        </>
      ))}
    </BookMarkFilter>
  );
};

export default FilteredBookMark;
