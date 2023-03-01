import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { linkStyle } from '../styles/linkStyle';

const SideMain = styled.div`
  display: flex;
  background-color: #eaecef;
  border-right: 1px solid black;
  width: 20rem;
  height: 43rem;
  flex-direction: column;
  align-items: baseline;
  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 2rem 2rem;
  }
`;

const SideMenu = styled.section`
  width: 8rem;
  right: 10rem;
  line-height: 4rem;
  h3 {
    font-weight: bold;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

const linkAndText = [
  { link: '/profile', text: '프로필' },
  { link: '/locationsetting', text: '위치설정' },
  { link: '/exchangehistory', text: '교환목록' },
  { link: '/bookmark', text: '북마크' },
  { link: '/report', text: '신고내역' },
];

const SideBar = () => {
  return (
    <SideMain>
      <h2>마이페이지</h2>
      <SideMenu>
        {linkAndText.map(el => (
          <Link key={el.link} to={el.link} style={linkStyle}>
            <h3>{el.text}</h3>
          </Link>
        ))}
      </SideMenu>
    </SideMain>
  );
};

export default SideBar;
