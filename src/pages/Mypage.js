import React from 'react';
import styled from 'styled-components';
import profile from '../assets/logo/android-icon-144x144.png';
import { AiFillEdit, AiOutlinePlusCircle } from 'react-icons/ai';
import SideBar from '../components/SideBar';
import NavBar from '../components/common/NavBar';
import { FaTimes } from 'react-icons/fa';

export const Main = styled.main`
  box-sizing: border-box;
  background-color: #eaecef;
  width: 50rem;
  height: 43rem;
  margin: 10rem auto;
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
  h3 {
    display: flex;
    :nth-child(1) {
      font-weight: bold;
    }
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    margin-left: 0.5rem;
  }

  &:nth-child(2),
  :last-child {
    justify-content: center;
    align-items: center;
  }
  .icon {
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    :nth-child(1),
    :nth-child(2) {
      :hover {
        opacity: 0.5;
      }
    }
  }
  .plus {
    display: flex;
    margin: 3rem auto;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
`;

const SwapContainer = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`;

const SwapAndBookMark = styled.div`
  display: flex;
  width: 33.3%;
  height: 18rem;
  background-color: white;
  padding: 0 2rem;
  border: 1px solid black;
  justify-content: space-between;
  h4 {
    font-weight: 600;
    margin: 1rem -1.5rem;
    display: flex;
    justify-content: space-between;
    :hover {
      :nth-child(2) {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }
`;

const MyPageMain = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative;
  bottom: 40rem; */
  margin: -40rem auto;
  overflow: hidden;
`;

const Mypage = () => {
  return (
    <>
      <NavBar />
      <MyPageMain>
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
            <LocationData>
              <h3>자취방[main]</h3>
              <h3>
                서울특별시 강남구 논현동
                <section className="icon">
                  <AiFillEdit />
                </section>
                <section className="icon">
                  <FaTimes />
                </section>
              </h3>
            </LocationData>
            {[...Array(2)].map(index => (
              <LocationData key={index}>
                <AiOutlinePlusCircle className="plus" size={30} />
              </LocationData>
            ))}
          </LocationDataContainer>
          <SwapContainer>
            {[...Array(2)].map(index => (
              <SwapAndBookMark key={index}>
                <h4>교환목록</h4>
                <h4>더보기</h4>
              </SwapAndBookMark>
            ))}
          </SwapContainer>
        </Main>
      </MyPageMain>
    </>
  );
};

export default Mypage;
