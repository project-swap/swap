import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Logo from '../assets/logo/favicon-96x96.png';
import { ImSearch } from 'react-icons/im';
import { RiBarChartLine, RiChat1Line } from 'react-icons/ri';

const CustomerServiceWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;

const ContentWrap = styled.section`
  display: flex;
  width: 65rem;
  height: 40rem;
  border: 0.1rem solid #000;
  border-radius: 1.4rem;
  background-color: white;
  overflow: hidden;
`;

const InfoBox = styled.div`
  width: 17rem;
  height: 40rem;
  border-right: 0.1rem solid #ccc;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 7rem;
  border-bottom: 0.1rem solid #ccc;
  p:first-child {
    font-size: 1.2rem;
    font-weight: bold;
  }
  img {
    width: 4rem;
    height: 4rem;
    background-color: #ccc;
    border: 0.1rem solid #000;
    border-radius: 50%;
  }
`;

const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
  p {
    width: 93%;
    height: 2.5rem;
    margin: 0.7rem 0;
    border-bottom: 0.1rem solid #000;
    text-align: center;
    cursor: pointer;
  }
`;

const SearchInput = styled.form`
  width: 94%;
  position: relative;
  input {
    width: 90%;
    height: 2rem;
    margin: 2rem 0;
    padding-left: 1rem;
    border: 0.1rem solid #000;
    border-radius: 0.5rem;
  }
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48rem;
  height: 40rem;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35rem;
    height: 5rem;
    box-sizing: border-box;
    margin-bottom: 1.7rem;
    padding: 0 2rem;
    border: 1px solid #000;
    border-radius: 1rem;
    p:last-child {
      color: #999;
    }
  }
`;

const CurrentMenu = styled.div`
  margin: 3rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CustomerService = () => {
  return (
    <>
      <NavBar />
      <CustomerServiceWrap>
        <ContentWrap>
          <InfoBox>
            <UserInfo>
              <div>
                <p>MIZZU</p>
                <p>abc@gmail.com</p>
              </div>
              <img src={Logo} alt="프로필 이미지" />
            </UserInfo>
            <MenuGroup>
              <SearchInput>
                <input placeholder="Search..." />
                <ImSearch
                  style={{
                    position: 'absolute',
                    top: '2.7rem',
                    right: '1rem',
                    cursor: 'pointer',
                  }}
                />
              </SearchInput>

              <p>
                <RiBarChartLine style={{ marginRight: '1rem' }} />
                공지사항
              </p>
              <p>
                <RiChat1Line style={{ marginRight: '1rem' }} />
                FAQ
              </p>
            </MenuGroup>
          </InfoBox>
          <ListBox>
            <CurrentMenu>Menuname</CurrentMenu>
            <ul>
              <li>
                <p>개인정보 처리 방침이 변경됩니다.</p>
                <p>4 hours ago</p>
              </li>
              <li>
                <p>개인정보 처리 방침이 변경됩니다.</p>
                <p>4 hours ago</p>
              </li>
              <li>
                <p>개인정보 처리 방침이 변경됩니다.</p>
                <p>4 hours ago</p>
              </li>
              <li>
                <p>개인정보 처리 방침이 변경됩니다.</p>
                <p>4 hours ago</p>
              </li>
            </ul>
          </ListBox>
        </ContentWrap>
      </CustomerServiceWrap>
      <Footer />
    </>
  );
};

export default CustomerService;
