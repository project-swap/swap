import React from 'react';
import styled from 'styled-components';

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
  border-top: solid black 1px;
  border-bottom: solid black 1px;
`;
const MainLogo = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  margin-left: 6.25rem;
  border: solid black 1px;
  border-radius: 50%;
`;
const MainLinkBtnContainer = styled.div`
  display: flex;
  gap: 3.125rem;
`;
const MainLinkBtn = styled.div`
  font-size: 0.875rem;
  cursor: pointer;
`;

const LocationBox = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 22.5rem;
  height: 2.5rem;
  border: solid black 1px;
  border-radius: 1.25rem;
`;
const LocationIcon = styled.img`
  width: 1rem;
  height: 1.25rem;
  margin-right: 1.25rem;
  background-color: orange;
`;
const SearchIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 6.5rem;
  background-color: green;
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
  background-color: grey;
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
          <MainLogo />
          <MainLinkBtnContainer>
            <MainLinkBtn>교환/나눔</MainLinkBtn>
            <MainLinkBtn>커뮤니티</MainLinkBtn>
          </MainLinkBtnContainer>
          <LocationBox>
            <LocationIcon />
          </LocationBox>
          <LoginSuccessIconContainer>
            {/*로그인 성공 시 안쪽에 컴포넌트 추가 생성*/}
          </LoginSuccessIconContainer>
          <SearchIcon />
        </MainNavBar>
      </NavContainer>
    </>
  );
}

export default NavBar;
