// src/App.tsx
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MovieCardPage from './components/pages/MovieCardPage';

const App: React.FC = () => {
  return (
    // HashRouter 사용!  (BrowserRouter 아님)
    <HashRouter>
      <Routes>
        {/* 홈 화면 */}
        <Route path="/" element={<HomePage />} />

        {/* MovieCard 페이지 */}
        <Route path="/moviecard" element={<MovieCardPage />} />

        {/* 혹시 모를 나머지 경로 → 홈으로 보내기 */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
