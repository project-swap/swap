import React from 'react';
import styled from 'styled-components';

const StyledArticlePreview = styled.p`
  margin: ${props => props.margin};
  padding-right: ${props => props.paddingRight};
  line-height: ${props => props.lineHeight};
`;

StyledArticlePreview.defaultProps = {
  margin: '1rem 0 0',
  paddingRight: '1.5rem',
  lineHeight: '1.5rem',
};

const ArticlePreview = ({ content, margin, paddingRight, lineHeight }) => {
  return (
    <StyledArticlePreview
      margin={margin}
      paddingRight={paddingRight}
      lineHeight={lineHeight}
    >
      {content}
    </StyledArticlePreview>
  );
};

export default ArticlePreview;
