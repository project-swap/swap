import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { darkModeToggle } from '../../atoms/atoms';

const SlideThemeBtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: 7rem;
  height: 3rem;
  background-color: black;
  margin-bottom: -2rem;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 150ms linear;

  &.active {
    background-color: whitesmoke;
    transition: all 150ms linear;
  }
`;

const SlideThemeBtn = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: white;
  margin-left: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transform: translateX(0);
  transition: all 150ms linear;

  &.active {
    background-color: black;
    transform: translateX(4rem);
    transition: all 150ms linear;
  }
`;

const ThemeBtn = () => {
  const [themeToggle, setThemeToggle] = useRecoilState(darkModeToggle);

  return (
    <>
      <SlideThemeBtnContainer
        className={themeToggle ? 'active' : 'inactive'}
        onClick={() => {
          setThemeToggle(prev => !prev);
        }}
      >
        <SlideThemeBtn className={themeToggle ? 'active' : 'inactive'} />
      </SlideThemeBtnContainer>
    </>
  );
};

export default ThemeBtn;
