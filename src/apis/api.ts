import { firestore } from '../firebase';

function isApi() {
  const test = firestore.collection('posts');
  const api_data = test.get();
  return api_data;
}
export default isApi;
