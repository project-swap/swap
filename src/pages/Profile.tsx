import React from 'react';
// import { FiCheckSquare } from 'react-icons/fi';
import styled from 'styled-components';
import MainContainer from '../components/common/MainContainer';
// import ContainerChildren from '../components/ContainerChildren';
// import ContentChildren from '../components/ContentChildren';
import SideBar from '../components/SideBar';
import profile from '../assets/logo/android-icon-144x144.png';

const Info = styled.section`
  margin-top: 2rem;
  margin-left: 1rem;
  flex-direction: column;
  line-height: 1.5rem;
  h2 {
    font-weight: 600;
  }
`;

const Location = styled.div`
  display: flex;
  margin: 1.5rem 1rem;
  justify-content: space-between;
  h4 {
    font-weight: 600;
  }
`;

const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: -40rem auto;
`;

// const Title = styled.h3`
//   font-weight: 600;
//   margin: 2.5rem 5rem;
//   font-size: 1.5rem;
//   display: flex;
//   position: relative;
//   top: -3rem;

const ProfileContainer = styled.section`
  display: flex;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    margin-top: 1rem;
  }
`;

const InputContainer = styled.section`
  input {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    margin-bottom: 1rem;
    height: 3rem;
    width: 30rem;
  }
`;

const Line = styled.div`
  border: 1px solid black;
  width: 45rem;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  margin-left: 9.5rem;
  position: relative;
  top: 1rem;
  font-weight: 600;
`;

const Button = styled.button`
  width: 4rem;
  background-color: black;
  color: white;
  border-radius: 1rem;
  height: 2rem;
  z-index: 1;
  cursor: pointer;
  position: absolute;
  right: 26rem;
  top: 19rem;
  &:hover {
    opacity: 0.7;
  }
`;

const StyleContainer = styled.div`
  display: flex;
`;

const Profile = () => {
  return (
    <SwapContainer>
      <SideBar />
      <MainContainer>
        <ProfileContainer>
          <img src={profile} alt="미쭈" />
          <Info>
            <h2>박미쭈</h2>
            <h4>팔로잉 59 팔로워 48</h4>
          </Info>
        </ProfileContainer>
        <Location>
          <h4>위치설정</h4>
          <h4>더보기</h4>
        </Location>
        <Line />
        <InputContainer>
          <form>
            <Label htmlFor="">닉네임</Label>
            <StyleContainer>
              <input type="text" />
              <Button>수정</Button>
            </StyleContainer>
            <Label htmlFor="">이메일</Label>
            <StyleContainer>
              <input type="email" disabled />
            </StyleContainer>
            <Label htmlFor="">비밀번호</Label>
            <StyleContainer>
              <input type="password" disabled />
            </StyleContainer>
            <Label htmlFor="">소셜</Label>
            <StyleContainer>
              <input type="text" disabled />
            </StyleContainer>
          </form>
        </InputContainer>
      </MainContainer>
    </SwapContainer>
  );
};

export default Profile;
