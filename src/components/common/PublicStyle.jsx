import styled from 'styled-components';

export const ComponentForCenterAlignment = styled.div`
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

export const RegisterProductGroupComponent = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  border: 1px solid black;
  padding: 2rem;
  margin-bottom: 1.5rem;
`;

export const StyledDeleteBtn = styled.span`
  position: absolute;
  /* top: -6px;
  right: -8px; */

  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  border: 1px solid black;
  font-size: 0.8rem;
  width: 0.8rem;
  height: 0.8rem;
  text-align: center;
  line-height: 0.9rem;
  background-color: white;
  border-radius: 50%;
  :hover {
    background-color: #e88e6b;
    cursor: pointer;
  }
  :active {
    background-color: #d76c6c;
  }
`;
