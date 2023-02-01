import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.article`
  padding: 3rem 3rem;
  line-height: 2.5rem;
  height: 100%;
  font-size: 1.1rem;
  border-bottom: 1px solid black;
  overflow-y: scroll;
`;

const Content = ({ content }) => {
  return <StyledContent>{content}</StyledContent>;
};

export default Content;
