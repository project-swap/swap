import React from 'react';
import styled from 'styled-components';

interface ProfileImgProps {
  url: string;
  backgroundSize?: string;
  width?: string;
  height?: string;
  marginRight?: string;
}

const StyledProfileImg = styled.div<ProfileImgProps>`
  background: center url('${props => props.url}') no-repeat;
  background-size: ${props => props.backgroundSize};
  border: 1px solid black;
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 50%;
  margin-right: ${props => props.marginRight};
`;

StyledProfileImg.defaultProps = {
  backgroundSize: '70px',
  height: '3rem',
  width: '3rem',
  marginRight: '0.8rem',
};

const ProfileImg = ({
  url,
  backgroundSize,
  width,
  height,
  marginRight,
}: ProfileImgProps) => {
  return (
    <StyledProfileImg
      url={url}
      backgroundSize={backgroundSize}
      width={width}
      height={height}
      marginRight={marginRight}
    />
  );
};

export default ProfileImg;
