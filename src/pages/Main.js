import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

// components import
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';

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
      {dataArr.map(el => {
        return <div key={el.id}>{el.title}</div>;
      })}
      <Footer />
    </>
  );
}

export default Main;
