import React from 'react';
import LoginOrSignUp from '../components/login_or_signup/LoginOrSignUp';

const Login = () => {
  return (
    <>
      <LoginOrSignUp title={'로그인'} link={'/signup'} />
    </>
  );
};

export default Login;
