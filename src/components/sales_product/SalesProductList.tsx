import React from 'react';
import { useNavigate } from 'react-router';
import styled, { keyframes } from 'styled-components';
import { ComponentForCenterAlignment } from '../common/PublicStyle';
import SalesProductCardGroup from './SalesProductCardGroup';
import SalesProductListTap from './SalesProductListTap';

const ani = keyframes`
  0%{
    rotate: 90deg;
    box-shadow: 0 0 0 1px #e55a66, inset 0 0 0 1px #f3bb10;
  }
  100%{
    rotate: 270deg;
    box-shadow: 0 0 0 10px #e55a66, inset 0 0 0 10px #f3bb10;
  }
`;

const reverseAni = keyframes`
  to{
    rotate: 90deg;
    box-shadow: 0 0 0 1px #e55a66, inset 0 0 0 1px #f3bb10;

  }
  from{
    rotate: 270deg;
    box-shadow: 0 0 0 10px #e55a66, inset 0 0 0 10px #f3bb10;

  }
`;

const SalesProductListComponent = styled.div`
  margin: 3rem 0;
  width: 80%;
  padding: 2rem 5rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const AddPostBtn = styled.button`
  position: fixed;
  bottom: 4rem;
  right: 6rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  font-size: 5rem;
  text-align: center;
  line-height: 1rem;
  color: #2c2a2a;
  border: 3px solid black;
  box-shadow: 0 0 0 1px #e55a66, inset 0 0 0 1px #f3bb10;
  animation: ${reverseAni} 0.8s forwards;
  :hover {
    animation: ${ani} 0.8s forwards;
  }
  :active {
    color: black;
  }
`;

const SalesProductList = () => {
  const navigate = useNavigate();

  const userInfo = sessionStorage.getItem(
    'firebase:authUser:AIzaSyDopZC4cfYJSrlMB_QTcAG7nIv59F0PaIg:[DEFAULT]',
  );

  return (
    <ComponentForCenterAlignment>
      <SalesProductListComponent>
        <AddPostBtn
          onClick={() => {
            if (userInfo) {
              navigate('/register');
            } else {
              navigate('/login');
            }
          }}
        >
          +
        </AddPostBtn>
        <SalesProductListTap />
        <SalesProductCardGroup />
      </SalesProductListComponent>
    </ComponentForCenterAlignment>
  );
};

export default SalesProductList;
