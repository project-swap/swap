import React, { useEffect, useState } from 'react';
import { firestore } from './firebase';

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const test = firestore.collection('test');
    test
      .doc('test_item')
      .get()
      .then(doc => {
        setData(doc.data().food);
      });
  }, []);
  return <div className="App">{data}</div>;
}

export default App;
