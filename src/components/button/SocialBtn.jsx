import React from 'react';
import styled from 'styled-components';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

const SocialButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13rem;
  height: 2.6rem;
  margin: 0.8rem 0;
  padding: 0 1rem;
  background-color: ${props => props.background};
  color: ${props => props.color};
  font-size: 1rem;
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
`;

const SocialBtn = ({ background, color, icon, name }) => {
  const currentURL = window.location.href.split('/');
  const pathName = currentURL[currentURL.length - 1];
  const firstLetter = pathName.charAt(0).toUpperCase();
  const otherLetters = pathName.slice(1);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleErrorMsg = error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  };

  const handleLogin = provider => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithPopup(auth, provider)
          .then(() => {
            window.location.href = '/';
          })
          .catch(error => {
            handleErrorMsg(error);
          });
      })
      .catch(error => {
        handleErrorMsg(error);
      });
  };

  return (
    <SocialButton
      onClick={
        name === 'Google'
          ? () => {
              handleLogin(googleProvider);
            }
          : () => {
              handleLogin(githubProvider);
            }
      }
      background={background}
      color={color}
    >
      {icon}
      <span>
        {firstLetter + otherLetters} with {name}
      </span>
    </SocialButton>
  );
};

export default SocialBtn;
