import styled from 'styled-components';

interface DeleteBtnTypes {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

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

export const Button = styled.button<{ width?: string; margin?: string }>`
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

export const RegisterProductGroupComponent = styled.div<{
  flexDirection?: string;
}>`
  width: 40rem;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  border: 1px solid black;
  padding: 2rem;
  margin-bottom: 1.5rem;
`;

export const StyledDeleteBtn = styled.span<DeleteBtnTypes>`
  position: absolute;
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