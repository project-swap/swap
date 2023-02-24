import React from 'react';
import styled from 'styled-components';
import PostingTime from '../common/product_card/PostingTime';

interface PostInfoProps {
  convertDate: string;
  date: string;
}

const StyledPostInfo = styled.div`
  font-size: 0.8rem;
`;

const PostInfo = ({ convertDate, date }: PostInfoProps) => {
  return (
    <StyledPostInfo>
      <PostingTime convertDate={convertDate} date={date} />• 대림동
    </StyledPostInfo>
  );
};

export default PostInfo;
