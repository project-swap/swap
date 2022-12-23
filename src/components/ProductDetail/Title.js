import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  padding: 2.5rem 3rem 0.7rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
