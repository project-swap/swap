import React from 'react';
import styled from 'styled-components';

const StyledContentInput = styled.textarea`
  width: 40rem;
  height: 24.6rem;
  border: 1px solid black;
  border-radius: 0;
  margin-bottom: 1.5rem;
  resize: none;
  padding: 2rem;
`;

const RegisterProductInputContent = (): React.ReactNode => {
  return (
    <StyledContentInput
      placeholder="글을 입력하세요! (최소 10자)"
      minLength={10}
      required
    />
  );
};

export default RegisterProductInputContent;
