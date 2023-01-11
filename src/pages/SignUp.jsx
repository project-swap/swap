import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import ModalBox from '../components/ModalBox';
import SocialBtn from '../components/button/SocialBtn';
import Footer from '../components/common/Footer';
import { EntireAreaWrap } from '../components/common/PublicStyle';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { linkStyle } from '../styles/linkStyle';

const SignUpPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 7rem;
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
    <EntireAreaWrap>
      <NavBar />
      <SignUpPage>
        <ModalBox width={30} height={24}>
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
            background={'#303030'}
            color={'#fff'}
            icon={<BsGithub style={{ fontSize: '1.5rem' }} />}
            location={'signup'}
            name={'Github'}
          />
          <Link to="/login" style={linkStyle}>
            <LinkToLogin>로그인</LinkToLogin>
          </Link>
        </ModalBox>
      </SignUpPage>
      <Footer />
    </EntireAreaWrap>
  );
};

export default SignUp;
