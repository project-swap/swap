import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAuth, signOut } from 'firebase/auth';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { themeColor, darkModeToggle, userInfo } from '../../atoms/atoms';

// image,icon, font-style
import Logo from '../../assets/logo/android-icon-48x48.png';
import { linkStyle } from '../../styles/linkStyle';
import { GoLocation } from 'react-icons/go';
import { ImSearch } from 'react-icons/im';
import { BsPerson, BsChatLeftDots, BsBell } from 'react-icons/bs';

interface IProps {
  themeMode: boolean;
  themeColorObject: {
    darkMain: string;
    darkNavAndFooter: string;
    darkLine: string;
    darkFont: string;
    lightLine: string;
    lightFont: string;
  };
}

const NavContainer = styled.nav<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${props =>
    props.themeMode ? props.themeColorObject.darkNavAndFooter : 'white'};
  border-bottom: ${props =>
    props.themeMode
      ? `solid ${props.themeColorObject.darkLine} 1px`
      : `solid ${props.themeColorObject.lightLine} 1px`};
  box-sizing: border-box;
`;
const TopNavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60rem;
  height: 1.875rem;
`;
const MainNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60rem;
  height: 5rem;
`;
const MainLogo = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: url(${Logo});
  border: none;
`;
const MainLinkBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10rem;
`;
const MainLinkBtn = styled.div<IProps>`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkFont
      : props.themeColorObject.lightFont};
`;
const LocationBox = styled.div<IProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20rem;
  height: 2.5rem;
  border: ${props =>
    props.themeMode
      ? `solid ${props.themeColorObject.darkLine} 1px`
      : `solid ${props.themeColorObject.lightLine} 1px`};
  border-radius: 1.25rem;
`;
const TopBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.875rem;
`;
const TopLinkBtn = styled.div<IProps>`
  font-size: 0.625rem;
  color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkFont
      : props.themeColorObject.lightFont};
  cursor: pointer;
`;
const LoginSuccessIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
  height: 2rem;
`;

export const sessionUserData = () => {
  for (const key of Object.keys(sessionStorage)) {
    if (key.includes('firebase:authUser:')) {
      return JSON.parse(sessionStorage.getItem(key) || '{}');
    }
  }
};

const NavBar = () => {
  const themeMode = useRecoilValue(darkModeToggle);
  const themeColorObject = useRecoilValue(themeColor);
  const setLoginUserData = useSetRecoilState(userInfo);
  const [loginState, setLoginState] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const userData = sessionUserData();
    if (userData) {
      setLoginState(true);
      setLoginUserData(userData);
    }
  }, []);

  const handleGoogleLogout = () => {
    const isLogout = confirm('로그아웃 하시겠습니까?');
    if (isLogout) {
      setLoginState(false);
      window.location.reload();
      signOut(auth).catch(error => {
        console.log(error);
      });
    }
  };

  return (
    <>
      <NavContainer themeMode={themeMode} themeColorObject={themeColorObject}>
        <TopNavBar>
          <TopBtnContainer>
            <TopLinkBtn
              themeMode={themeMode}
              themeColorObject={themeColorObject}
            >
              고객센터
            </TopLinkBtn>

            <TopLinkBtn
              themeMode={themeMode}
              themeColorObject={themeColorObject}
            >
              {loginState ? (
                <span onClick={handleGoogleLogout}>로그아웃</span>
              ) : (
                <Link to="/login" style={linkStyle}>
                  <span
                    style={{
                      color: `${
                        themeMode
                          ? themeColorObject.darkFont
                          : themeColorObject.lightFont
                      }`,
                    }}
                  >
                    로그인
                  </span>
                </Link>
              )}
            </TopLinkBtn>
          </TopBtnContainer>
        </TopNavBar>
        <MainNavBar>
          <Link to="/">
            <MainLogo />
          </Link>
          <MainLinkBtnContainer>
            <Link to="/" style={linkStyle}>
              <MainLinkBtn
                themeMode={themeMode}
                themeColorObject={themeColorObject}
              >
                교환/나눔
              </MainLinkBtn>
            </Link>
            <Link to="/" style={linkStyle}>
              <MainLinkBtn
                themeMode={themeMode}
                themeColorObject={themeColorObject}
              >
                커뮤니티
              </MainLinkBtn>
            </Link>
          </MainLinkBtnContainer>
          <LocationBox
            themeMode={themeMode}
            themeColorObject={themeColorObject}
          >
            <GoLocation
              style={{
                width: '1rem',
                height: '1.25rem',
                marginRight: '1.25rem',
              }}
            />
          </LocationBox>
          <LoginSuccessIconContainer>
            {loginState && (
              <>
                <BsPerson style={{ fontSize: '1.4rem' }} />
                <BsChatLeftDots style={{ fontSize: '1.4rem' }} />
                <BsBell style={{ fontSize: '1.4rem' }} />
              </>
            )}
          </LoginSuccessIconContainer>
          <div>
            <Link to="/search" style={linkStyle}>
              <ImSearch
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  marginRight: '0.5rem',
                  color: `${
                    themeMode
                      ? themeColorObject.darkFont
                      : themeColorObject.lightFont
                  }`,
                }}
              />
            </Link>
          </div>
        </MainNavBar>
      </NavContainer>
    </>
  );
};

export default NavBar;
