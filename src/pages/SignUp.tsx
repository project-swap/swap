import React from 'react';
import LoginOrSignUp from '../components/login_or_signup/LoginOrSignUp';

const SignUp = () => {
  return (
    <>
      <LoginOrSignUp title={'회원가입'} link={'/login'} />
    </>
  );
};

export default SignUp;
