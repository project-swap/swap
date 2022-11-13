import React from 'react';
import styled from 'styled-components';
import profile from '../assets/logo/android-icon-144x144.png';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import SideBar from '../components/SideBar';
import LocationSetting from './LocationSetting';

export const Main = styled.main`
  box-sizing: border-box;
  background-color: #eaecef;
  width: 50rem;
  height: 43rem;
  margin: 0 auto;
  margin-top: 2rem;
  margin-right: 16rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
const Profile = styled.section`
  display: flex;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    margin-top: 1rem;
  }
`;

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
  margin: 1rem 1rem;
  justify-content: space-between;
  h4 {
    font-weight: 600;
  }
`;

const LocationDataContainer = styled.div`
  display: flex;

  width: 97%;
  margin-bottom: 2rem;
`;

const LocationData = styled.div`
  width: 33.3%;
  height: 8rem;
  background-color: white;
  border: 1px solid black;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  &:nth-child(2),
  :last-child {
    justify-content: center;
    align-items: center;
  }
`;

const SwapContainer = styled.div`
  width: 100%;
  display: flex;
`;

const SwapAndBookMark = styled.div`
  display: flex;
  width: 30%;
  height: 18rem;
  background-color: white;
  margin: 0 1rem;
  border: 1px solid black;
  justify-content: space-between;
  h4 {
    font-weight: 600;
    margin: 1rem 1rem;
  }
`;

const Mypage = () => {
  return (
    <>
      <SideBar />
      <Main>
        <Profile>
          <img src={profile} alt="미쭈" />
          <Info>
            <h2>박미쭈</h2>
            <h4>팔로잉 59 팔로워 48</h4>
          </Info>
        </Profile>
        <Location>
          <h4>위치설정</h4>
          <h4>더보기</h4>
        </Location>
        <LocationDataContainer>
          <LocationData></LocationData>
          <LocationData>
            <AiOutlinePlusCircle />
          </LocationData>
          <LocationData>
            <AiOutlinePlusCircle />
          </LocationData>
        </LocationDataContainer>
        <SwapContainer>
          <SwapAndBookMark>
            <h4>교환목록</h4>
            <h4>더보기</h4>
          </SwapAndBookMark>
          <SwapAndBookMark>
            <h4>북마크</h4>
            <h4>더보기</h4>
          </SwapAndBookMark>
        </SwapContainer>
      </Main>
      <LocationSetting />
    </>
  );
};

export default Mypage;
