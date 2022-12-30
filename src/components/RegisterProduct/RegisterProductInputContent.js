import React from 'react';
import styled from 'styled-components';

const StyledContentInput = styled.textarea`
  width: 40rem;
  height: 24rem;
  border: 1px solid black;
  border-radius: 0;
  margin-bottom: 1.5rem;
  resize: none;
  padding: 2rem;
`;

const RegisterProductInputContent = () => {
  return <StyledContentInput placeholder="글을 입력하세요!" />;
};

export default RegisterProductInputContent;
