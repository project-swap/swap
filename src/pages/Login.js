import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { TbBrandTwitter } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';

// const Div = styled.div`
//   font-size: 20px;
//   color: red;
// `;

const LoginPage = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const LoginBox = styled.section`
  width: 30rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  border: 0.1rem solid #000;
  border-radius: 0.5rem;
  h2 {
    margin-bottom: 2rem;
  }
  .sign-in {
    margin-top: 3rem;
    color: #333;
    font-size: 0.8rem;
    text-decoration: none;
    cursor: pointer;
  }
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13rem;
  height: 2.6rem;
  margin: 0.8rem 0;
  padding: 0 1rem;
  background-color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
`;

const Login = () => {
  return (
    <LoginPage>
      <LoginBox>
        <Link to="/">
          <IoClose
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              fontSize: '2rem',
              cursor: 'pointer',
            }}
          />
        </Link>
        <h2>로그인</h2>
        <LoginButton>
          <FcGoogle style={{ fontSize: '1.4rem' }} />
          <span>Login with Google</span>
        </LoginButton>
        <LoginButton style={{ backgroundColor: '#3C87F8', color: '#fff' }}>
          <TbBrandTwitter style={{ fontSize: '1.4rem' }} />
          <span>Login with Twitter</span>
        </LoginButton>
        <Link to="/" className="sign-in">
          회원가입
        </Link>
      </LoginBox>
    </LoginPage>
  );
};

export default Login;
