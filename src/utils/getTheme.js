// utils/getTheme.js
import {ThemeEnums} from "../enum/ThemeEnum";

export const getTheme = () => {
  const theme = Number(localStorage.getItem('theme'));
  return theme || ThemeEnums.LIGHT; // 기본값은 LIGHT 모드입니다.
};
// localStorage에서 현재 테마 모드를 가져오는 함수
