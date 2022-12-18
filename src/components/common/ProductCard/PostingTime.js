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

const PostingTime = ({ fontSize, marginRight }) => {
  return <StyledPostingTime fontSize={fontSize} marginRight={marginRight} />;
};

export default PostingTime;
