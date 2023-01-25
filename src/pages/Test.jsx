import React from 'react';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

const Test = () => {
  const handleTwitterLogin = () => {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.

        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });
  };
  return (
    <>
      <button onClick={handleTwitterLogin}>로그인</button>
    </>
  );
};

export default Test;
