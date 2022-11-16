import { selector } from 'recoil';
import { firestore } from '../firebase';
import _ from 'lodash';

export const getTest = selector({
  key: 'get/firestore',
  get: async () => {
    const test = firestore.collection('mock-api');
    const api_data = test.get();
    let dataArr = [];
    await api_data
      .then(dbData => {
        const docs = dbData.docs;
        docs.forEach(doc => {
          const retunrDoc = _.cloneDeep(doc.data());
          dataArr.push(retunrDoc);
        });
      })
      .catch(error => console.log(error));
    return dataArr;
  },
});
