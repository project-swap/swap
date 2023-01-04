import React from 'react';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

const Test = () => {
  const [loginState, setLoginState] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const already = () => {
    for (let key of Object.keys(sessionStorage)) {
      if (key.includes('firebase:authUser:')) {
        return JSON.parse(sessionStorage.getItem(key));
      }
    }
  };

  useEffect(() => {
    const data = already();
    if (data) {
      setLoginState(true);
      setUserInfo(data);
    }
  }, []);

  const auth = getAuth();

  const handleGoogleLogout = () => {
    signOut(auth)
      .then(() => {
        const isLogout = confirm('로그아웃 하시겠습니까?');
        if (isLogout) {
          setLoginState(false);
          setUserInfo(null);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const sessionData = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth, provider)
          .then(result => {
            const user = result.user;
            setLoginState(true);
            setUserInfo(user);
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div>
        {loginState ? (
          <button onClick={handleGoogleLogout}>로그아웃</button>
        ) : (
          <button onClick={sessionData}>로그인</button>
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
// import { auth } from '../firebase';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { useState } from 'react';

// function Test() {
//   const [userData, setUserData] = useState(null);

//   function handleGoogleLogin() {
//     const provider = new GoogleAuthProvider(); // provider를 구글로 설정
//     signInWithPopup(auth, provider) // popup을 이용한 signup
//       .then(data => {
//         setUserData(data.user); // user data 설정
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   function handleGoogleLogout() {
//     const isLogout = confirm('로그아웃 하시겠습니까?');
//     if (isLogout) {
//       window.location.reload();
//     } else {
//       return;
//     }
//   }

//   return (
//     <div>
//       {userData ? (
//         <>
//           <button onClick={handleGoogleLogout}>Logout</button>
//           <div>{userData.displayName}님 환영합니다!</div>
//         </>
//       ) : (
//         <>
//           <button onClick={handleGoogleLogin}>Login</button>
//           <div>로그아웃 상태랍니다.</div>
//         </>
//       )}
//     </div>
//   );
// }

export default Test;
