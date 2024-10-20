// components/ToggleTheme.js
import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import {themeMode} from "../recoil/Theme";
import {ThemeEnums} from "../enum/ThemeEnum";

const ToggleTheme = () => {
  const [theme, setTheme] = useRecoilState(themeMode); // Recoil 상태 가져오기
  const { LIGHT, DARK } = ThemeEnums;

  const handleChangeTheme = useCallback(() => {
    if (theme === DARK) {
      localStorage.setItem('theme', LIGHT); // localStorage에 LIGHT 모드 저장
      setTheme(LIGHT);
    } else {
      localStorage.setItem('theme', DARK); // localStorage에 DARK 모드 저장
      setTheme(DARK);
    }
  }, [DARK, LIGHT, setTheme, theme]);

  return (
    <div className='ToggleTheme' onClick={handleChangeTheme}>
      {theme === LIGHT ? '기본 테마': '다크 테마'}
      {/* 테마에 따라 아이콘 변경 */}
    </div>
  );
};

export default ToggleTheme;
// 테마 전환 기능을 수행하는 컴포넌트
