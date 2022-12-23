import React from 'react';
import styled from 'styled-components';

const StyledPostInfo = styled.div`
  margin: 0 3rem 1.5rem;
  font-size: 0.8rem;
`;

const PostInfo = () => {
  return <StyledPostInfo>방금 전 ∙ 서울 대림동</StyledPostInfo>;
};

export default PostInfo;
