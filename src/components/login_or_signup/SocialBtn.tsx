import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

interface ISocialBtn {
  background: string;
  color: string;
  icon: React.ReactElement;
  name: string;
}

const SocialButton = styled.button<{ background: string }>`
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

const SocialBtn = ({ background, color, icon, name }: ISocialBtn) => {
  const currentURL = window.location.href.split('/');
  const pathName = currentURL[currentURL.length - 1];
  const firstLetter = pathName.charAt(0).toUpperCase();
  const otherLetters = pathName.slice(1);

  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickTarget = e.currentTarget;
    const loginType = clickTarget.innerText.split(' ')[2];
    const auth = getAuth();

    const provider =
      loginType === 'Google'
        ? new GoogleAuthProvider()
        : new GithubAuthProvider();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithPopup(auth, provider)
          .then(() => {
            navigate(-1);
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SocialButton onClick={handleLogin} background={background} color={color}>
      {icon}
      <span>
        {firstLetter + otherLetters} with {name}
      </span>
    </SocialButton>
  );
};

export default SocialBtn;
