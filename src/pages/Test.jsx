import React from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

function Test() {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then(data => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
        sessionStorage.setItem('token', data.user.accessToken);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleGoogleLogout() {
    setUserData(null);
    sessionStorage.removeItem('token');
  }

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login</button>
      <button onClick={handleGoogleLogout}>Logout</button>
      {userData ? userData.displayName : null}
    </div>
  );
}

export default Test;
