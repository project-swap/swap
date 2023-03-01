import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import styled from 'styled-components';

const Filter = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  height: 1rem;
  position: relative;
  left: 6rem;
  font-weight: 300;
  font-size: 1rem;
`;

const filteredPost = [
  { id: 1, text: '내가 쓴 글' },
  { id: 2, text: '최신순' },
  { id: 3, text: '오래된 순' },
];

const FilteredPost = () => {
  return (
    <Filter>
      {filteredPost.map(filtered => (
        <>
          <FiCheckSquare />
          <h4 key={filtered.id} className="title">
            {filtered.text}
          </h4>
        </>
      ))}
    </Filter>
  );
};

export default FilteredPost;
