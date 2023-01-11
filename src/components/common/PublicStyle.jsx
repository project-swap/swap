import styled from 'styled-components';

export const EntireAreaWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

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
