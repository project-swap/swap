import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../atoms/atoms';

const TestWarp = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
  }
  .user-name {
    margin: 1rem 0;
    font-weight: bold;
    font-size: 1.5rem;
  }

  p {
    margin: 0.3rem 0;
    font-size: 1.2rem;
  }
`;

const Title = styled.h2`
  margin: 3rem 0;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

const Test = () => {
  const userData = useRecoilValue(userInfo);
  const [loading, setLoading] = useState(false);
  console.log(userData);
  useEffect(() => {
    if (userData) {
      setLoading(true);
    }
  }, [userData]);
  return (
    <>
      <NavBar />
      <TestWarp>
        <Title>User Data</Title>
        {loading ? (
          <>
            <img src={userData.photoURL} alt="" />
            <p className="user-name">{userData.displayName}</p>
            <p className="user-email">email : {userData.email}</p>
            <p className="user-uid">uid : {userData.uid}</p>
          </>
        ) : (
          'Please Login First'
        )}
      </TestWarp>
    </>
  );
};

export default Test;
