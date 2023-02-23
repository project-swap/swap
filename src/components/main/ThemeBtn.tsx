<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> 1acda4596e7fcf1452235dd839d2e43003cc5513
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { darkModeToggle } from '../../atoms/atoms';

const SlideThemeBtnContainer = styled.div`
  display: flex;
  align-items: center;
<<<<<<< HEAD
  width: 7rem;
  height: 3rem;
  background-color: black;
  margin-bottom: -2rem;
=======
  width: 5.5rem;
  height: 2.2rem;
  background-color: #0d1117;
  margin-bottom: -2rem;
  border: 0.1rem solid #999999;
>>>>>>> 1acda4596e7fcf1452235dd839d2e43003cc5513
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 150ms linear;

  &.active {
    background-color: whitesmoke;
<<<<<<< HEAD
=======
    border: 0.1rem solid #8b949e;
>>>>>>> 1acda4596e7fcf1452235dd839d2e43003cc5513
    transition: all 150ms linear;
  }
`;

const SlideThemeBtn = styled.div`
<<<<<<< HEAD
  width: 2rem;
  height: 2rem;
  background-color: white;
  margin-left: 0.5rem;
=======
  width: 1.5rem;
  height: 1.5rem;
  background-color: whitesmoke;
  margin-left: 0.5rem;
  border: 0.1rem solid #8b949e;
>>>>>>> 1acda4596e7fcf1452235dd839d2e43003cc5513
  border-radius: 50%;
  cursor: pointer;
  transform: translateX(0);
  transition: all 150ms linear;

  &.active {
<<<<<<< HEAD
    background-color: black;
    transform: translateX(4rem);
=======
    background-color: #0d1117;
    border: 0.1rem solid #999999;
    transform: translateX(3rem);
>>>>>>> 1acda4596e7fcf1452235dd839d2e43003cc5513
    transition: all 150ms linear;
  }
`;

const ThemeBtn = () => {
  const [themeToggle, setThemeToggle] = useRecoilState(darkModeToggle);

<<<<<<< HEAD
=======
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

>>>>>>> 1acda4596e7fcf1452235dd839d2e43003cc5513
  return (
    <>
      <SlideThemeBtnContainer
        className={themeToggle ? 'active' : 'inactive'}
<<<<<<< HEAD
        onClick={() => {
          setThemeToggle(prev => !prev);
        }}
=======
        onClick={setThemeState}
>>>>>>> 1acda4596e7fcf1452235dd839d2e43003cc5513
      >
        <SlideThemeBtn className={themeToggle ? 'active' : 'inactive'} />
      </SlideThemeBtnContainer>
    </>
  );
};

export default ThemeBtn;
