import styled from 'styled-components';
import React from 'react';

const Content = styled.h4`
  margin: 12rem auto;
  opacity: 0.4;
`;

const ContentChildren = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <Content>{children}</Content>;
};

export default ContentChildren;
