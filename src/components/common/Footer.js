import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// image,icon, font-style
import { BsGithub } from 'react-icons/bs';
import { FaBloggerB } from 'react-icons/fa';
import { linkStyle } from '../../styles/linkStyle';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 11.56rem;
  bottom: 0;
  background-color: #c6c2c2;
`;

const EmailAndNameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.88rem;
  margin-left: 4rem;
  margin-bottom: 2.69rem;
`;

const ProjectName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a4a4a;
`;

const ProjectEmail = styled.span`
  font-size: 0.88rem;
  font-weight: bold;
  color: #7a7575;
`;

const CreaterContainer = styled.div`
  display: flex;
  gap: 4.5rem;
  margin-bottom: 3rem;
`;

const CreaterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Creater = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: #4a4a4a;
`;

const CreaterIconsBox = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const LinkBtnList = styled.div`
  display: flex;
  width: 6.88rem;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-right: 9.88rem;
`;

const LinkBtn = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <EmailAndNameBox>
          <ProjectName>SWAP</ProjectName>
          <ProjectEmail>Email: noreplyswap@email.org</ProjectEmail>
        </EmailAndNameBox>

        <CreaterContainer>
          <CreaterBox>
            <Creater>박민주</Creater>
            <CreaterIconsBox>
              <BsGithub
                style={{ fontSize: '1rem', cursor: 'pointer' }}
                onClick={() =>
                  window.open('https://github.com/project-mizzu', '_blank')
                }
              />
              <FaBloggerB style={{ fontSize: '1rem', cursor: 'pointer' }} />
            </CreaterIconsBox>
          </CreaterBox>
          <CreaterBox>
            <Creater>박소예</Creater>
            <CreaterIconsBox>
              <BsGithub
                style={{ fontSize: '1rem', cursor: 'pointer' }}
                onClick={() =>
                  window.open('https://github.com/stardust6653', '_blank')
                }
              />
              <FaBloggerB
                style={{ fontSize: '1rem', cursor: 'pointer' }}
                onClick={() =>
                  window.open('https://velog.io/@stardust6653', '_blank')
                }
              />
            </CreaterIconsBox>
          </CreaterBox>
          <CreaterBox>
            <Creater>서희원</Creater>
            <CreaterIconsBox>
              <BsGithub
                style={{ fontSize: '1rem', cursor: 'pointer' }}
                onClick={() =>
                  window.open('https://github.com/userHWSeo', '_blank')
                }
              />
              <FaBloggerB
                style={{ fontSize: '1rem', cursor: 'pointer' }}
                onClick={() =>
                  window.open('https://velog.io/@userhwseo', '_blank')
                }
              />
            </CreaterIconsBox>
          </CreaterBox>
          <CreaterBox>
            <Creater>정하승</Creater>
            <CreaterIconsBox>
              <BsGithub
                style={{ fontSize: '1rem', cursor: 'pointer' }}
                onClick={() =>
                  window.open('https://github.com/HA-SEUNG-JEONG', '_blank')
                }
              />
              <FaBloggerB
                style={{ fontSize: '1rem', cursor: 'pointer' }}
                onClick={() =>
                  window.open('https://haseungdev.vercel.app/', '_blank')
                }
              />
            </CreaterIconsBox>
          </CreaterBox>
        </CreaterContainer>

        <LinkBtnList>
          <Link to="/" style={linkStyle}>
            <LinkBtn>교환/나눔</LinkBtn>
          </Link>
          <Link to="/" style={linkStyle}>
            <LinkBtn>교환/나눔</LinkBtn>
          </Link>
          <Link to="/" style={linkStyle}>
            <LinkBtn>교환/나눔</LinkBtn>
          </Link>
          <Link to="/" style={linkStyle}>
            <LinkBtn>교환/나눔</LinkBtn>
          </Link>
          <Link to="/" style={linkStyle}>
            <LinkBtn>교환/나눔</LinkBtn>
          </Link>
        </LinkBtnList>
      </FooterContainer>
    </>
  );
}

export default Footer;
