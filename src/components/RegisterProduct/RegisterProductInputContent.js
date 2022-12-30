import React from 'react';
import styled from 'styled-components';

const StyledContentInput = styled.textarea`
  width: 43.8rem;
  height: 28rem;
  border: 1px solid black;
  border-radius: 0;
  margin-bottom: 1.5rem;
  resize: none;
`;

const RegisterProductInputContent = () => {
  return <StyledContentInput />;
};

export default RegisterProductInputContent;
