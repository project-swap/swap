import React, { useState, useEffect } from 'react';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

const Test = () => {
  const [loginState, setLoginState] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const userData = sessionUserData();
    if (userData) {
      setCommonState(true, userData);
    }
  }, []);

  const sessionUserData = () => {
    for (let key of Object.keys(sessionStorage)) {
      if (key.includes('firebase:authUser:')) {
        return JSON.parse(sessionStorage.getItem(key));
      }
    }
  };

  const setCommonState = (boolean, data) => {
    setLoginState(boolean);
    setUserInfo(data);
  };

  const handleErrorMsg = error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  };

  const handleGoogleLogin = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
          .then(result => {
            const user = result.user;
            setCommonState(true, user);
          })
          .catch(error => {
            handleErrorMsg(error);
          });
      })
      .catch(error => {
        handleErrorMsg(error);
      });
  };

  const handleGoogleLogout = () => {
    const isLogout = confirm('로그아웃 하시겠습니까?');
    if (isLogout) {
      setCommonState(false, null);
      signOut(auth).catch(error => {
        console.log(error);
      });
    }
  };

  return (
    <>
      <div>
        {loginState ? (
          <button onClick={handleGoogleLogout}>로그아웃</button>
        ) : (
          <button onClick={handleGoogleLogin}>로그인</button>
        )}
      </div>
      <div>
        {userInfo
          ? `${userInfo.displayName}님 환영합니다!`
          : '로그인을 해주세요'}
      </div>
    </>
  );
};

export default Test;
