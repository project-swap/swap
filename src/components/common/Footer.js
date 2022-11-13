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
  const userData = [
    {
      id: 1,
      name: '박민주',
      githubUrl: 'https://github.com/project-mizzu',
      blogUrl: null,
    },
    {
      id: 2,
      name: '박소예',
      githubUrl: 'https://github.com/stardust6653',
      blogUrl: 'https://velog.io/@stardust6653',
    },
    {
      id: 3,
      name: '서희원',
      githubUrl: 'https://github.com/userHWSeo',
      blogUrl: 'https://velog.io/@userhwseo',
    },
    {
      id: 4,
      name: '정하승',
      githubUrl: 'https://github.com/HA-SEUNG-JEONG',
      blogUrl: 'https://haseungdev.vercel.app',
    },
  ];

  const routeList = [
    {
      id: 1,
      name: '교환/나눔',
    },
    {
      id: 2,
      name: '커뮤니티',
    },
    {
      id: 3,
      name: '마이페이지',
    },
    {
      id: 4,
      name: '채팅',
    },
    {
      id: 5,
      name: '알림',
    },
  ];
  return (
    <>
      <FooterContainer>
        <EmailAndNameBox>
          <ProjectName>SWAP</ProjectName>
          <ProjectEmail>Email: noreplyswap@email.org</ProjectEmail>
        </EmailAndNameBox>

        <CreaterContainer>
          {userData.map(el => {
            return (
              <div key={`unique${el.name}`}>
                <CreaterBox>
                  <Creater>{el.name}</Creater>
                  <CreaterIconsBox>
                    <BsGithub
                      style={{ fontSize: '1rem', cursor: 'pointer' }}
                      onClick={() => window.open(`${el.githubUrl}`, '_blank')}
                    />
                    <FaBloggerB
                      style={{ fontSize: '1rem', cursor: 'pointer' }}
                      onClick={() => window.open(`${el.blogUrl}`, '_blank')}
                    />
                  </CreaterIconsBox>
                </CreaterBox>
              </div>
            );
          })}
        </CreaterContainer>

        <LinkBtnList>
          {routeList.map(el => {
            return (
              <div key={`unique${el.id}`}>
                <Link to="/" style={linkStyle}>
                  <LinkBtn>{el.name}</LinkBtn>
                </Link>
              </div>
            );
          })}
        </LinkBtnList>
      </FooterContainer>
    </>
  );
}

export default Footer;
