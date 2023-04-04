import React from 'react';
import styled from 'styled-components';

const ProfileWrap = styled.div`
  width: 8rem;
  height: 8rem;
  margin: 0 auto;
  position: relative;
`;

const PreviewOuterImage = styled.div<{ url?: string }>`
  width: 7.9rem;
  height: 7.9rem;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  position: absolute;
  border-radius: 4rem;
  border: 1px solid black;
`;

const PreviewImgPositionWrap = styled.div<{ url: string }>`
  &::before {
    content: '';
    background-image: url(${props => props.url});
    background-size: cover;
    opacity: 0.5;
    position: absolute;
    inset: 0;
  }
`;

interface ImgUrlProps {
  imgUrl: {
    url: string;
    id: string;
  }[];
}

const PreviewContainer = ({ imgUrl }: ImgUrlProps) => {
  return (
    <ProfileWrap>
      {imgUrl.map(item => {
        return (
          <PreviewImgPositionWrap key={item.url} url={item.url}>
            <PreviewOuterImage url={item.url} />
          </PreviewImgPositionWrap>
        );
      })}
    </ProfileWrap>
  );
};

export default PreviewContainer;
