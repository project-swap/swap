import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAuth, signOut } from 'firebase/auth';

import { useRecoilValue } from 'recoil';
import { themeColor, darkModeToggle } from '../../atoms/atoms';

// image,icon, font-style
import Logo from '../../assets/logo/android-icon-48x48.png';
import { linkStyle } from '../../styles/linkStyle';
import { GoLocation } from 'react-icons/go';
import { ImSearch } from 'react-icons/im';
import { BsPerson, BsChatLeftDots, BsBell } from 'react-icons/bs';

const NavContainer = styled.nav`
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
const MainLinkBtn = styled.div`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkFont
      : props.themeColorObject.lightFont};
`;
const LocationBox = styled.div`
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
const TopLinkBtn = styled.div`
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

const NavBar = () => {
  const themeMode = useRecoilValue(darkModeToggle);
  const themeColorObject = useRecoilValue(themeColor);
  const [loginState, setLoginState] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const userData = sessionUserData();
    if (userData) {
      setLoginState(true);
    }
  }, []);

  const sessionUserData = () => {
    for (const key of Object.keys(sessionStorage)) {
      if (key.includes('firebase:authUser:')) {
        return JSON.parse(sessionStorage.getItem(key));
      }
    }
  };

  const handleGoogleLogout = () => {
    const isLogout = confirm('???????????? ???????????????????');
    if (isLogout) {
      setLoginState(false);
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
              ????????????
            </TopLinkBtn>

            <TopLinkBtn
              themeMode={themeMode}
              themeColorObject={themeColorObject}
            >
              {loginState ? (
                <span onClick={handleGoogleLogout}>????????????</span>
              ) : (
                <Link to="/login" style={linkStyle}>
                  <span>?????????</span>
                </Link>
              )}
            </TopLinkBtn>
          </TopBtnContainer>
        </TopNavBar>
        <MainNavBar themeMode={themeMode} themeColorObject={themeColorObject}>
          <Link to="/">
            <MainLogo />
          </Link>
          <MainLinkBtnContainer>
            <Link to="/" style={linkStyle}>
              <MainLinkBtn
                themeMode={themeMode}
                themeColorObject={themeColorObject}
              >
                ??????/??????
              </MainLinkBtn>
            </Link>
            <Link to="/" style={linkStyle}>
              <MainLinkBtn
                themeMode={themeMode}
                themeColorObject={themeColorObject}
              >
                ????????????
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
