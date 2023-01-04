import React from 'react';
import styled from 'styled-components';

const StyledHashtagGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40rem;
  height: 4rem;
`;

const StyledHashtagInput = styled.input`
  width: 34.5rem;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 0.8rem;
  &:active {
    border-color: #f8d3f5;
  }
`;

const HashtagInput = () => {
  return (
    <StyledHashtagGroup>
      <StyledHashtagInput type="text" placeholder="해시태그" />
    </StyledHashtagGroup>
  );
};

export default HashtagInput;
