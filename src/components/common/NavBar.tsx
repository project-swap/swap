import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { themeColor, darkModeToggle } from '../../atoms/atoms';

// image,icon, font-style
import Logo from '../../assets/logo/android-icon-48x48.png';
import { linkStyle } from '../../styles/linkStyle';
import { GoLocation } from 'react-icons/go';
import { ImSearch } from 'react-icons/im';

interface ThemeProps {
  themeMode: boolean;
  themeColorObject: {
    darkMain: string;
    darkNavAndFooter: string;
    darkLine: string;
    darkFont: string;
    lightMain: string;
    lightNavAndFooter: string;
    lightLine: string;
    lightFont: string;
  };
}

const NavContainer = styled.nav<ThemeProps>`
  background-color: ${props =>
    props.themeMode ? props.themeColorObject.darkNavAndFooter : 'white'};
`;
const TopNavBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1.875rem;
`;
const MainNavBar = styled.div<ThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border-top: ${props =>
    props.themeMode
      ? `solid ${props.themeColorObject.darkLine} 1px`
      : `solid ${props.themeColorObject.lightLine} 1px`};
  border-bottom: ${props =>
    props.themeMode
      ? `solid ${props.themeColorObject.darkLine} 1px`
      : `solid ${props.themeColorObject.lightLine} 1px`};
`;
const MainLogo = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 5.06rem;
  background-image: url(${Logo});
  border: none;
`;
const MainLinkBtnContainer = styled.div`
  display: flex;
  gap: 3.125rem;
  margin-right: 4.38rem;
`;
const MainLinkBtn = styled.div<ThemeProps>`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkFont
      : props.themeColorObject.lightFont};
`;

const LocationBox = styled.div<ThemeProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 22.5rem;
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
  margin-left: 60rem;
  gap: 1.875rem;
`;
const TopLinkBtn = styled.div<ThemeProps>`
  font-size: 0.625rem;
  color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkFont
      : props.themeColorObject.lightFont};
  cursor: pointer;
`;
const LoginSuccessIconContainer = styled.div`
  width: 9.375rem;
  height: 2rem;
  gap: 3rem;
`;

function NavBar() {
  const themeMode = useRecoilValue(darkModeToggle);
  const themeColorObject = useRecoilValue(themeColor);

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
            <Link to="/login" style={linkStyle}>
              <TopLinkBtn
                themeMode={themeMode}
                themeColorObject={themeColorObject}
              >
                로그인
              </TopLinkBtn>
            </Link>
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
            {/*로그인 성공 시 안쪽에 컴포넌트 추가 생성*/}
          </LoginSuccessIconContainer>
          <div
            style={{
              marginLeft: '7.5rem ',
            }}
          >
            <Link to="/search" style={linkStyle}>
              <ImSearch
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
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
}

export default NavBar;
