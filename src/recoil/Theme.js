// recoil/Theme.js
import { atom } from 'recoil';
import {getTheme} from "../utils/getTheme";

export const themeMode = atom({
  key: 'themeMode',
  default: getTheme(), // 초기값 설정: localStorage에서 가져온 현재 테마
});
// Recoil에서 테마 모드를 관리하기 위한 atom
