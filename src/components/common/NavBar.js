import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// image,icon, font-style
import Logo from '../../assets/logo/android-icon-48x48.png';
import { linkStyle } from '../../styles/linkStyle';
import { GoLocation } from 'react-icons/go';
import { ImSearch } from 'react-icons/im';

const NavContainer = styled.nav``;
const TopNavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 1.875rem;
`;
const MainNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  border-top: solid black 0.1rem;
  border-bottom: solid black 0.1rem;
`;
const MainLogo = styled.div`
  width: 3rem;
  height: 3rem;
  margin-left: 6.25rem;
  background-image: url(${Logo});
  border: none;
`;
const MainLinkBtnContainer = styled.div`
  display: flex;
  gap: 3.125rem;
`;
const MainLinkBtn = styled.div`
  font-size: 0.875rem;
  text-decoration: none;
`;

const LocationBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 22.5rem;
  height: 2.5rem;
  border: solid black 0.1rem;
  border-radius: 1.25rem;
`;

const TopBtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6.25rem;
  gap: 1.875rem;
`;
const TopLinkBtn = styled.div`
  font-size: 0.625rem;
  cursor: pointer;
`;
const LoginSuccessIconContainer = styled.div`
  width: 9.375rem;
  height: 2rem;
  gap: 3rem;
`;

function NavBar() {
  return (
    <>
      <NavContainer>
        <TopNavBar>
          <TopBtnContainer>
            <TopLinkBtn>고객센터</TopLinkBtn>
            <TopLinkBtn>로그인</TopLinkBtn>
          </TopBtnContainer>
        </TopNavBar>
        <MainNavBar>
          <Link to="/">
            <MainLogo />
          </Link>
          <MainLinkBtnContainer>
            <Link to="/" style={linkStyle}>
              <MainLinkBtn>교환/나눔</MainLinkBtn>
            </Link>
            <Link to="/" style={linkStyle}>
              <MainLinkBtn>커뮤니티</MainLinkBtn>
            </Link>
          </MainLinkBtnContainer>
          <LocationBox>
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
          <ImSearch
            style={{
              width: '1.25rem',
              height: '1.25rem',
              marginRight: '6.5rem ',
            }}
          />
        </MainNavBar>
      </NavContainer>
    </>
  );
}

export default NavBar;
