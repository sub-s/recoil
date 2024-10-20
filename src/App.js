// App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { themeMode } from './recoil/Theme';
import ToggleTheme from './components/ToggleTheme';
import './App.css'; // 스타일시트 파일 (필요 시 추가)


import { ThemeEnums } from './enum/ThemeEnum';
import {useRecoilValue} from "recoil";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact"; // './'로 상대 경로 지정

const App = () => {
  const theme = useRecoilValue(themeMode);

  return (
    <BrowserRouter>
      <div className={theme === ThemeEnums.LIGHT ? 'light' : 'dark'}>
        <ToggleTheme />
        <Routes>
          {/* 라우팅 설정 추가 */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
// 애플리케이션의 전체 구조를 설정하는 컴포넌트
