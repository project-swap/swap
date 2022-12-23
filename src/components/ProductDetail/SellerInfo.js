import React from 'react';
import styled from 'styled-components';

const StyledSellerInfo = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid black;
`;

const StyledSellerProfileImg = styled.div`
  width: 3rem;
  height: 3rem;
  margin-left: 3rem;
  background: center
    url('https://dimg.donga.com/wps/NEWS/IMAGE/2003/06/12/6896662.1.jpg')
    no-repeat;
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
`;

const SellerInfo = () => {
  return (
    <StyledSellerInfo>
      <StyledSellerProfileImg />
      <StyledSellerInfoBox>
        <StyledSellerName>개똥</StyledSellerName>
        <StyledSellerGrade>브론즈</StyledSellerGrade>
      </StyledSellerInfoBox>
    </StyledSellerInfo>
  );
};

export default SellerInfo;
