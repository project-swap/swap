import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThemeBtn from '../Main/ThemeBtn';
import { useRecoilValue } from 'recoil';
import { themeColor, darkModeToggle } from '../../atoms/atoms';

// image,icon, font-style
import { BsGithub } from 'react-icons/bs';
import { FaBloggerB } from 'react-icons/fa';
import { linkStyle } from '../../styles/linkStyle';

interface Theme {
  themeMode: boolean;
  themeColorObject: {
    darkMain: string;
    darkNavAndFooter: string;
    darkLine: string;
    darkFont: string;
    lightMain: string;
    lightNavAndFooter: string;
    lightLine: string;
    lightFont: string;
  };
}

const FooterContainer = styled.footer<Theme>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  margin-top: 8rem;
  background-color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkNavAndFooter
      : props.themeColorObject.lightNavAndFooter};
  border-top: ${props =>
    props.themeMode
      ? `solid ${props.themeColorObject.darkLine} 1px`
      : `solid ${props.themeColorObject.lightLine} 1px`};
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60rem;
  height: inherit;
`;

const EmailAndNameBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
`;

const ProjectName = styled.span`
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ProjectEmail = styled.span`
  margin: 0.5rem 0 1.2rem;
  font-size: 0.8rem;
`;

const CreaterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25rem;
  height: inherit;
  padding-left: 3rem;
`;

const CreaterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 4rem;
  height: 3.2rem;
  margin-top: 2rem;
`;

const Creater = styled.span`
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
`;

const CreaterIconsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0.25rem;
  opacity: 0.9;
`;

const LinkBtnList = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 16rem;
  height: 4rem;
  padding-top: 2rem;
`;

const LinkBtn = styled.span<Theme>`
  padding-right: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  color: ${props =>
    props.themeMode
      ? props.themeColorObject.darkFont
      : props.themeColorObject.lightFont};
`;

function Footer() {
  const themeMode = useRecoilValue(darkModeToggle);
  const themeColorObject = useRecoilValue(themeColor);

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
      <FooterContainer
        themeMode={themeMode}
        themeColorObject={themeColorObject}
      >
        <ContentWrap>
          <EmailAndNameBox>
            <ProjectName>SWAP</ProjectName>
            <ProjectEmail>Email: noreplyswap@email.org</ProjectEmail>
            <ThemeBtn />
          </EmailAndNameBox>
          <CreaterContainer>
            {userData.map(el => {
              return (
                <div key={`unique${el.name}`}>
                  <CreaterBox>
                    <Creater>{el.name}</Creater>
                    <CreaterIconsBox>
                      <BsGithub
                        style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                        onClick={() => window.open(`${el.githubUrl}`, '_blank')}
                      />
                      <FaBloggerB
                        style={{ fontSize: '1.2rem', cursor: 'pointer' }}
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
                    <LinkBtn
                      themeMode={themeMode}
                      themeColorObject={themeColorObject}
                    >
                      {el.name}
                    </LinkBtn>
                  </Link>
                </div>
              );
            })}
          </LinkBtnList>
        </ContentWrap>
      </FooterContainer>
    </>
  );
}

export default Footer;
