import { atom, selector } from 'recoil';
import isApi from '../apis/api';
import _ from 'lodash';

interface IContent {
  id: number;
  title: string;
  content: string;
  hash_tag: string[];
  name: string;
  date: string;
}

export const getTest = selector({
  key: 'get/firestore',
  get: async () => {
    const dataArr: IContent[] = [];
    await isApi().then(dbData => {
      const docs = dbData.docs;
      docs.forEach(doc => {
        const retunrDoc: any = _.cloneDeep(doc.data());
        dataArr.push(retunrDoc);
      });
    });
    return dataArr;
  },
});

export const darkModeToggle = atom({
  key: 'darkMode',
  default: false,
});

export const themeColor = atom({
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

export const getMessage = atom({
  key: 'get/realtimeDatabase',
  default: [],
});
