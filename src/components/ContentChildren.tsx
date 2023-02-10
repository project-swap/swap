import styled from 'styled-components';
import React from 'react';
import { ChildrenProps } from '../utils/utils';

const Content = styled.h4`
  margin: 12rem auto;
  opacity: 0.4;
`;

const ContentChildren = ({ children }: ChildrenProps) => {
  return <Content>{children}</Content>;
};

export default ContentChildren;
