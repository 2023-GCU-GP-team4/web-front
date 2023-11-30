import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Level1 from './component/level1Description';
import Level2 from './component/level2Description';
import Level3 from './component/level3Description';

function App() {
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
}

export default App;
