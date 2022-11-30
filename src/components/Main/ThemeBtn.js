import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { darkMode } from '../../atoms/atoms';

// image,icon, font-style

const SlideThemeBtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  height: 3rem;
  background-color: black;
  margin-bottom: -2rem;
  border-radius: 1.5rem;
  transition: all 150ms linear;

  &.active {
    background-color: whitesmoke;
    transition: all 150ms linear;
  }
`;

const SlideThemeBtn = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-color: white;
  margin-left: 1rem;
  border-radius: 50%;
  cursor: pointer;
  transform: translateX(0);
  transition: all 150ms linear;

  &.active {
    background-color: black;
    transform: translateX(6.5rem);
    transition: all 150ms linear;
  }
`;

const ThemeBtn = () => {
  const [themeToggle, setThemeToggle] = useRecoilState(darkMode);

  return (
    <>
      <SlideThemeBtnContainer className={themeToggle ? 'active' : null}>
        <SlideThemeBtn
          className={themeToggle ? 'active' : null}
          onClick={useCallback(() => {
            setThemeToggle(prev => !prev);
          }, [themeToggle])}
        />
      </SlideThemeBtnContainer>
    </>
  );
};

export default React.memo(ThemeBtn);
