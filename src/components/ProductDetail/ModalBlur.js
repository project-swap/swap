import React from 'react';
import styled from 'styled-components';

const StyledModalBlur = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalBlur = () => {
  return <StyledModalBlur />;
};

export default ModalBlur;
