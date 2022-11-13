import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import SocialBtn from '../components/button/SocialBtn';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { TbBrandTwitter } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10rem;
  position: relative;
  box-sizing: border-box;
  z-index: 2;
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
  .sign-up {
    margin-top: 3rem;
    color: #333;
    font-size: 0.8rem;
    text-decoration: none;
    cursor: pointer;
  }
`;

const BackgroundBlur = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Login = () => {
  return (
    <>
      <NavBar />
      <LoginPage>
        <LoginBox>
          <Link to="/">
            <IoClose
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                color: '#000',
                fontSize: '2rem',
                cursor: 'pointer',
              }}
            />
          </Link>
          <h2>로그인</h2>
          <SocialBtn
            background={'#fff'}
            color={'#000'}
            icon={<FcGoogle style={{ fontSize: '1.6rem' }} />}
            location={'signup'}
            name={'Google'}
          />
          <SocialBtn
            background={'#3C87F8'}
            color={'#fff'}
            icon={<TbBrandTwitter style={{ fontSize: '1.6rem' }} />}
            location={'signup'}
            name={'Twitter'}
          />
          <Link to="/signup" className="sign-up">
            회원가입
          </Link>
        </LoginBox>
      </LoginPage>
      <BackgroundBlur />
    </>
  );
};

export default Login;
