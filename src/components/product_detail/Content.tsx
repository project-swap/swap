import React from 'react';
import styled from 'styled-components';

interface ContentProps {
  content: string;
  hash_tag: string[];
}

const StyledContent = styled.article`
  padding: 1rem 3rem 3rem;
  line-height: 2.1rem;
  height: 100%;
  font-size: 1.1rem;
  border-bottom: 1px solid black;
  overflow-y: scroll;
`;

const StyledHashtagGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledHashtag = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 0.5rem 0.5rem 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
  line-height: 1.4rem;
  text-align: center;
`;

const Content = ({ content, hash_tag }: ContentProps): JSX.Element => {
  return (
    <StyledContent>
      <StyledHashtagGroup>
        {hash_tag.map(item => {
          return <StyledHashtag key={item}>{item}</StyledHashtag>;
        })}
      </StyledHashtagGroup>

      {content}
    </StyledContent>
  );
};

export default Content;
