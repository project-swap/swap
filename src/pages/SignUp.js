import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import ModalBox from '../components/ModalBox';
import SocialBtn from '../components/button/SocialBtn';
import BackgroundBlur from '../components/BackgroundBlur';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { TbBrandTwitter } from 'react-icons/tb';
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

const LinkToLogin = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
`;

const SignUp = () => {
  return (
    <>
      <NavBar />
      <LoginPage>
        <ModalBox>
          <Link to="/"></Link>
          <Title>회원가입</Title>
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
          <Link to="/login" style={linkStyle}>
            <LinkToLogin>로그인</LinkToLogin>
          </Link>
        </ModalBox>
      </LoginPage>
      <BackgroundBlur />
    </>
  );
};

export default SignUp;
