import { atom, selector } from 'recoil';
import { ref, onValue } from 'firebase/database';
import { realtimeDatabase } from '../firebase';
import isApi from '../apis/api';
import _ from 'lodash';

// interface FirestoreObj {}

export const getTest = selector({
  key: 'get/firestore',
  get: async () => {
    const dataArr: object[] = [];
    await isApi().then(dbData => {
      const docs = dbData.docs;
      docs.forEach(doc => {
        const retunrDoc: object = _.cloneDeep(doc.data());
        dataArr.push(retunrDoc);
      });
    });
    return dataArr;
  },
});

interface Test {
  darkMain: string;
  darkNavAndFooter: string;
  darkLine: string;
  darkFont: string;
  lightMain: string;
  lightNavAndFooter: string;
  lightLine: string;
  lightFont: string;
}

export const darkModeToggle = atom({
  key: 'darkMode',
  default: false,
});

export const themeColor = atom<Test>({
  key: 'themeColor',
  default: {
    darkMain: '#0D1117',
    darkNavAndFooter: '#161B22',
    darkLine: '#8B949E',
    darkFont: '#E5E7EE',
    lightMain: '#F5F5F5',
    lightNavAndFooter: '#C6C2C2',
    lightLine: '#000000',
    lightFont: '#000000',
  },
});

export const getMessage = selector({
  key: 'get/realtimeDatabase',
  get: async () => {
    let array: string[] = [];
    // onValue는 Promise가 아니기 때문에 await으로 비동기 처리가 불가능하다.
    // 그래서 new Promise로 감싼 다음 비동기 처리를 하도록 함.
    await new Promise(resolve => {
      onValue(ref(realtimeDatabase), snapshot => {
        const data = snapshot.val();
        Object.values(data).map(el => {
          const copyEl: any = _.cloneDeep(el);
          for (const key in copyEl) {
            array = [...array, copyEl[key]];
          }
        });
        resolve(array);
      });
    });
    return array;
  },
});
