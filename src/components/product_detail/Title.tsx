import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
}

const StyledTitle = styled.h1`
  margin-bottom: 0.6rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Title = ({ title }: TitleProps) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
