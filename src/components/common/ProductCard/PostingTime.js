import React from 'react';
import styled from 'styled-components';

const StyledPostingTime = styled.span`
  font-size: ${props => props.fontSize};
  margin-right: ${props => props.marginRight};
`;

StyledPostingTime.defaultProps = {
  fontSize: '0.8rem',
  marginRight: '0.5rem',
};

const PostingTime = ({ date, fontSize, marginRight }) => {
  const krCurrentDate = new Date();
  const postDate = new Date(date);

  const minusDiff = (krCurrentDate.valueOf() - postDate.valueOf()) / 1000;

  return (
    <StyledPostingTime fontSize={fontSize} marginRight={marginRight}>
      {(function () {
        if (minusDiff < 10) {
          return '몇초 전';
        } else if (minusDiff > 10 && minusDiff < 60) {
          return '1분 전';
        } else if (minusDiff > 60 && minusDiff < 600) {
          return '몇분 전';
        } else if (minusDiff > 600 && minusDiff < 3600) {
          return '몇십분 전';
        } else if (minusDiff > 3600 && minusDiff < 7200) {
          return '한시간 전';
        } else if (minusDiff > 7200 && minusDiff < 10800) {
          return '두시간 전';
        } else {
          return date;
        }
      })()}
    </StyledPostingTime>
  );
};

export default PostingTime;
