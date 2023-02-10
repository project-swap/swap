import { firestore } from '../firebase';
import { collection, query, getDocs } from 'firebase/firestore';

async function isApi() {
  const q = query(collection(firestore, 'posts'));

  const querySnapshot = await getDocs(q);
  return querySnapshot;
}
export default isApi;
