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
`;

const EmailAndNameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.88rem;
  margin-bottom: 2.69rem;
`;

const ProjectName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 1rem;
`;

const ProjectEmail = styled.span`
  font-size: 0.88rem;
  font-weight: bold;
`;

const CreaterContainer = styled.div`
  display: flex;
  gap: 4.5rem;
  margin-right: 8.13rem;
  margin-left: 9.38rem;
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

const LinkBtn = styled.span<Theme>`
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
      name: '?????????',
      githubUrl: 'https://github.com/project-mizzu',
      blogUrl: null,
    },
    {
      id: 2,
      name: '?????????',
      githubUrl: 'https://github.com/stardust6653',
      blogUrl: 'https://velog.io/@stardust6653',
    },
    {
      id: 3,
      name: '?????????',
      githubUrl: 'https://github.com/userHWSeo',
      blogUrl: 'https://velog.io/@userhwseo',
    },
    {
      id: 4,
      name: '?????????',
      githubUrl: 'https://github.com/HA-SEUNG-JEONG',
      blogUrl: 'https://haseungdev.vercel.app',
    },
  ];

  const routeList = [
    {
      id: 1,
      name: '??????/??????',
    },
    {
      id: 2,
      name: '????????????',
    },
    {
      id: 3,
      name: '???????????????',
    },
    {
      id: 4,
      name: '??????',
    },
    {
      id: 5,
      name: '??????',
    },
  ];
  return (
    <>
      <FooterContainer
        themeMode={themeMode}
        themeColorObject={themeColorObject}
      >
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
      </FooterContainer>
    </>
  );
}

export default Footer;
