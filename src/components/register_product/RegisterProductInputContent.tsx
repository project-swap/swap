import React from 'react';
import styled from 'styled-components';

interface ContentProps {
  // eslint-disable-next-line no-unused-vars
  getContentProps: (content: string) => void;
}

const StyledContentInput = styled.textarea`
  width: 40rem;
  height: 24.6rem;
  border: 1px solid black;
  border-radius: 0;
  margin-bottom: 1.5rem;
  resize: none;
  padding: 2rem;
`;

const RegisterProductInputContent = ({
  getContentProps,
}: ContentProps): JSX.Element => {
  const getContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    getContentProps(event.target.value);
  };

  return (
    <StyledContentInput
      placeholder="글을 입력하세요! (최소 10자)"
      onChange={getContent}
      minLength={10}
      required
    />
  );
};

export default RegisterProductInputContent;
