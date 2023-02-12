import { atom, selector } from 'recoil';
import isApi from '../apis/api';
import _ from 'lodash';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';

interface DataTypes {
  postId: string;
  title: string;
  content: string;
  hash_tag: string[];
  name: string;
  date: string;
  type: string;
  imgUrl: { url: string; id: string }[];
  uid: string;
  convertDate: string;
  profileImg: string;
}

export const getTest = selector({
  key: 'get/firestore',
  get: async () => {
    const dataArr: DataTypes[] = [];
    await isApi().then(dbData => {
      const docs = dbData.docs;
      docs.forEach(doc => {
        const returnDoc = _.cloneDeep(doc.data()) as DataTypes;
        dataArr.push(returnDoc);
      });
    });
    return dataArr;
  },
});

export const data = selector({
  key: 'defaultData',
  get: async () => {
    const postRef = await collection(db, 'posts');
    const q = query(postRef);
    const querySnapShot = await getDocs(q);
    const dataArr: DataTypes[] = [];

    querySnapShot.forEach(item => {
      const returnDoc = item.data() as DataTypes;
      dataArr.push(returnDoc);
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

export const getMessage = atom<string[]>({
  key: 'get/realtimeDatabase',
  default: [],
});

export const hashArrState = atom<string[]>({
  key: 'hashArrState',
  default: [],
});

export const ImgUrlArrState = atom<string[]>({
  key: 'ImgUrlArrState',
  default: [],
});

export const userInfo = atom({
  key: 'userInfo',
  default: '',
});

export const profileImage = atom({
  key: 'profileImage',
  default: true,
});

export const filterData = atom({
  key: 'filterData',
  default: data,
});
