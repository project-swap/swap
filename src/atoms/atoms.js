import { atom } from 'recoil';
import isApi from '../apis/api';

export const userApi = atom({
  key: 'userData',
  default: isApi(),
});
