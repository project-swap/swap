import { firestore } from '../firebase';
import _ from 'lodash';

const test = firestore.collection('mock-api');
const api_data = test.get();
async function isApi() {
  let dataArr = [];
  await api_data
    .then(docs => {
      docs.forEach(doc => {
        const retunrDoc = _.cloneDeep(doc.data());
        dataArr.push(retunrDoc);
      });
    })
    .catch(error => console.log(error));
  return dataArr;
}
export default isApi;
