import React from 'react';
import styled from 'styled-components';

interface propsType {
  type: string;
}

const TypeComponent = styled.div`
  width: 4rem;
  height: 2rem;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const Type = ({ type }: propsType) => {
  return <TypeComponent>{type}</TypeComponent>;
};
export default Type;
