import React from 'react';
import styled from 'styled-components';
import NavBar from '../common/NavBar';
import ModalBox from '../ModalBox';
import SocialBtn from './SocialBtn';
import Footer from '../common/Footer';
import { EntireAreaWrap } from '../common/PublicStyle';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { linkStyle } from '../../styles/linkStyle';
import { BsGithub } from 'react-icons/bs';

const LoginOrSignUpPage = styled.section`
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

const LinkToReverse = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
`;

const LoginOrSignUp = ({ title, link }) => {
  return (
    <EntireAreaWrap>
      <NavBar />
      <LoginOrSignUpPage>
        <ModalBox width={30} height={24}>
          <Title>{title}</Title>
          <SocialBtn
            background={'#fff'}
            color={'#000'}
            icon={<FcGoogle style={{ fontSize: '1.6rem' }} />}
            name={'Google'}
          />
          <SocialBtn
            background={'#303030'}
            color={'#fff'}
            icon={<BsGithub style={{ fontSize: '1.5rem' }} />}
            name={'Github'}
          />
          <Link to={link} style={linkStyle}>
            <LinkToReverse>
              {title === '로그인' ? '회원가입' : '로그인'}
            </LinkToReverse>
          </Link>
        </ModalBox>
      </LoginOrSignUpPage>
      <Footer />
    </EntireAreaWrap>
  );
};

export default LoginOrSignUp;
