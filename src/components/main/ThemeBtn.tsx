import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { darkModeToggle } from '../../atoms/atoms';

const SlideThemeBtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: 5.5rem;
  height: 2.2rem;
  background-color: #0d1117;
  margin-bottom: -2rem;
  border: 0.1rem solid #999999;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 150ms linear;

  &.active {
    background-color: whitesmoke;
    border: 0.1rem solid #8b949e;
    transition: all 150ms linear;
  }
`;

const SlideThemeBtn = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: whitesmoke;
  margin-left: 0.5rem;
  border: 0.1rem solid #8b949e;
  border-radius: 50%;
  cursor: pointer;
  transform: translateX(0);
  transition: all 150ms linear;

  &.active {
    background-color: #0d1117;
    border: 0.1rem solid #999999;
    transform: translateX(3rem);
    transition: all 150ms linear;
  }
`;

const ThemeBtn = () => {
  const [themeToggle, setThemeToggle] = useRecoilState(darkModeToggle);

  useEffect(() => {
    const themeState = localStorage.getItem('darkmode');
    if (!themeState) {
      localStorage.setItem('darkmode', themeToggle + '');
    }
    if (themeState) {
      setThemeToggle(JSON.parse(themeState));
    }
  }, []);

  const setThemeState = () => {
    setThemeToggle(prev => !prev);
    localStorage.setItem('darkmode', !themeToggle + '');
  };

  return (
    <>
      <SlideThemeBtnContainer
        className={themeToggle ? 'active' : 'inactive'}
        onClick={setThemeState}
      >
        <SlideThemeBtn className={themeToggle ? 'active' : 'inactive'} />
      </SlideThemeBtnContainer>
    </>
  );
};

export default ThemeBtn;
