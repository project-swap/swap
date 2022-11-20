import { selector } from 'recoil';
import isApi from '../apis/api';
import _ from 'lodash';

export const getTest = selector({
  key: 'get/firestore',
  get: async () => {
    let dataArr = [];
    await isApi().then(dbData => {
      const docs = dbData.docs;
      docs.forEach(doc => {
        const retunrDoc = _.cloneDeep(doc.data());
        dataArr.push(retunrDoc);
      });
    });
    return dataArr;
  },
});
