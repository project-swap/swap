import { firestore } from '../firebase';
import { collection, query, getDocs } from 'firebase/firestore';

async function isApi() {
  const q = query(collection(firestore, 'mock-api'));

  const querySnapshot = await getDocs(q);
  return querySnapshot;
}
export default isApi;
