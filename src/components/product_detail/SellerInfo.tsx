import React from 'react';
import styled from 'styled-components';

interface SellerInfoProps {
  name?: string;
  url: string;
}

const StyledSellerInfo = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid black;
  padding: 1.2rem 0;
`;

const StyledSellerProfileImg = styled.div<SellerInfoProps>`
  width: 3rem;
  height: 3rem;
  margin-left: 3rem;
  background: center url('${props => props.url}') no-repeat;
  background-size: 100px;
  border: 1px solid black;
  border-radius: 50%;
`;

const StyledSellerInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSellerName = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

const StyledSellerGrade = styled.span`
  font-size: 0.8rem;
  margin-left: 1rem;
  margin-top: 0.3rem;
  width: 85%;
  text-align: left;
`;

const SellerInfo = ({ name, url }: SellerInfoProps): JSX.Element => {
  return (
    <StyledSellerInfo>
      <StyledSellerProfileImg url={url} />
      <StyledSellerInfoBox>
        <StyledSellerName>{name}</StyledSellerName>
        <StyledSellerGrade>브론즈</StyledSellerGrade>
      </StyledSellerInfoBox>
    </StyledSellerInfo>
  );
};

export default SellerInfo;
