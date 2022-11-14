import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: ${props => props.width};
  height: 2rem;
  font-size: 1rem;
  border-radius: 0.8rem;
  background-color: #999;
  color: #fff;
  &:active {
    color: #ddd;
    background-color: #777;
  }
  margin: ${props => props.margin};
`;

export const Label = styled.label`
  width: 4rem;
`;
