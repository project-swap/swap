import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

// components import
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Carousel from '../components/Carousel';

function Main() {
  const test = firestore.collection('mock-api');
  const api_data = test.get();
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    api_data
      .then(docs => {
        docs.forEach(doc => {
          if (doc) setDataArr(prev => [...prev, doc.data()]);
        });
      })
      .catch(error => console.log(error));
  }, []);
  console.log(dataArr);

  return (
    <>
      <NavBar />
      <Carousel />
<<<<<<< HEAD
=======
      {dataArr.map(el => {
        return <div key={el.id}>{el.title}</div>;
      })}
>>>>>>> f3a2c4f7b73688bce61440cc715a99abf8b77ce1
      <Footer />
    </>
  );
}

export default Main;
