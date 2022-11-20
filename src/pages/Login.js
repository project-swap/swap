import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import ModalBox from '../components/ModalBox';
import SocialBtn from '../components/button/SocialBtn';
import { Link } from 'react-router-dom';
import { TbBrandTwitter } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';
import { linkStyle } from '../styles/linkStyle';

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

const Title = styled.h2`
  margin-bottom: 2.4rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const LinkToSignUp = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
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
        <ModalBox>
          <Title>로그인</Title>
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
          <Link to="/signup" style={linkStyle}>
            <LinkToSignUp>회원가입</LinkToSignUp>
          </Link>
        </ModalBox>
      </LoginPage>
      <BackgroundBlur />
    </>
  );
};

export default Login;
