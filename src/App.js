import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Level1 from './component/level1Description';
import Level2 from './component/level2Description';
import Level3 from './component/level3Description';

const App = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 리사이즈 이벤트가 발생할 때마다 화면 크기 업데이트
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트되면 리사이즈 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 배열은 마운트될 때만 실행

  const backgroundColor = '#F8F1DC';

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<d/>} />
          <Route path="/level/1" element={<Level1 />} />
          <Route path="/level/2" element={<Level2 />} />
          <Route path="/level/3" element={<Level3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
