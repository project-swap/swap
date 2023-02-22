import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { themeColor, darkModeToggle } from '../atoms/atoms';

interface IContents {
  width: string;
  height: string;
  children: ReactNode;
  themeMode: boolean;
  themeColorObject: {
    darkNavAndFooter: string;
    darkFont: string;
    lightNavAndFooter: string;
    lightFont: string;
  };
}

const Modal = styled.section<IContents>`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  background-color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkNavAndFooter
      : props.themeColorObject.lightNavAndFooter};
  color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkFont
      : props.themeColorObject.lightFont};
`;

const ModalBox = ({ width, height, children }: IContents) => {
  const themeMode = useRecoilValue(darkModeToggle);
  const themeColorObject = useRecoilValue(themeColor);

  return (
    <Modal
      width={`${width}rem`}
      height={`${height}rem`}
      themeMode={themeMode}
      themeColorObject={themeColorObject}
    >
      {children}
    </Modal>
  );
};

export default ModalBox;
