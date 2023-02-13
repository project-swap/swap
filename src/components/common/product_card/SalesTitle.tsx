import React from 'react';
import styled from 'styled-components';

interface StyleProps {
  fontSize?: string;
  marginBottom?: string;
}

interface SalesTitleProps extends StyleProps {
  title: string;
}

const StyledSalesTitle = styled.h3<StyleProps>`
  font-size: ${props => props.fontSize};
  font-weight: 700;
  margin-bottom: ${props => props.marginBottom};
`;

StyledSalesTitle.defaultProps = {
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
};

const SalesTitle = ({ title, fontSize, marginBottom }: SalesTitleProps) => {
  return (
    <StyledSalesTitle fontSize={fontSize} marginBottom={marginBottom}>
      {title}
    </StyledSalesTitle>
  );
};

export default SalesTitle;
