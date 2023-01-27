import React from 'react';
import { Link } from 'react-router-dom';
import { linkStyle } from '../styles/linkStyle';
import styled from 'styled-components';
import logo_grayscale from '../assets/logo/logo_grayscale.svg';
import frame from '../assets/frame.svg';

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 5.5rem;
  background-color: #eeeeee;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  color: #404040;
`;

const Title = styled.h2`
  position: relative;
  font-size: 8rem;
  font-weight: bold;
  span {
    font-size: 6.5rem;
    position: absolute;
    top: 0.3rem;
    left: 15rem;
  }
`;

const Messages = styled.p`
  h3 {
    margin-top: -0.4rem;
    margin-bottom: 1.2rem;
    font-size: 3rem;
    font-weight: bold;
  }
  p {
    margin-bottom: 0.25rem;
  }
`;

const Button = styled.button`
  width: 15rem;
  height: 2.5rem;
  margin-top: 1.4rem;
  border: none;
  border-radius: 2.4rem;
  border: 0.2rem solid #404040;
  background-color: transparent;
  font-weight: bold;
  color: #404040;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.2s background-color ease-in-out;
  &:hover {
    background-color: #404040;
    color: #eeeeee;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 16rem;
    opacity: 0.8;
  }
`;

const Frame = styled.div`
  position: absolute;
  z-index: 1;
  top: -6.5rem;
  left: -1.4rem;
  img {
    width: 18.5rem;
    opacity: 1;
  }
`;

const NotFound = () => {
  return (
    <>
      <Wrap>
        <Image>
          <Frame>
            <img src={frame} alt="액자프레임" />
          </Frame>
          <img src={logo_grayscale} alt="흑백로고" />
        </Image>
        <Contents>
          <Title>
            404 <span>:(</span>
          </Title>
          <Messages>
            <h3>page not found</h3>
            <p>We looked everywhere for this page</p>
            <p>Are you sure the website URL is correct?</p>
            <p>Get in touch with the site owner</p>
          </Messages>
          <Link to="/" style={linkStyle}>
            <Button>Go Back Home</Button>
          </Link>
        </Contents>
      </Wrap>
    </>
  );
};

export default NotFound;
