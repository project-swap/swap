import React from 'react';
import Footer from '../components/common/Footer.tsx';
import NavBar from '../components/common/NavBar';
import RegisterProduct from '../components/RegisterProduct/RegisterProduct';

const Register = () => {
  return (
    <>
      <NavBar />
      <RegisterProduct />
      <Footer />
    </>
  );
};

export default Register;
