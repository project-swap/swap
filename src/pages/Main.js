import React from 'react';
import { getTest } from '../atoms/atoms';
import { useRecoilValue } from 'recoil';

// import { firestore } from '../firebase';

// components import
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Casousel from '../components/Carousel';


function Main() {
  const state = useRecoilValue(getTest);
  console.log(state);

  // const storageRef = firebaseStorage.ref();
  // const saveRoute = storageRef.child('images/' + '파일명');
  // const upload = saveRoute.put('업로드 파일');

  return (
    <>
      <NavBar />
      <Casousel />
      <Footer />
    </>
  );
}

export default Main;
