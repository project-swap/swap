import React from 'react';
import Mypage from './pages/Mypage';

function App() {
  // const [data, setData] = useState();
  // useEffect(() => {
  //   const test = firestore.collection('test');
  //   test
  //     .doc('test_item')
  //     .get()
  //     .then(doc => {
  //       setData(doc.data().food);
  //     });
  // }, []);
  return (
    <div className="App">
      <Mypage />
    </div>
  );
}

export default App;
