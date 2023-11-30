import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Level1 from './component/level1Description';
import Level2 from './component/level2Description';
import Level3 from './component/level3Description';
import Login from './component/loginPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/level/1" element={<Level1 />} />
          <Route path="/level/2" element={<Level2 />} />
          <Route path="/level/3" element={<Level3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useState } from 'react';
// import Level1 from './component/level1Description';
// import Level2 from './component/level2Description';
// import Level3 from './component/level3Description';
// import Login from './component/loginPage';

// function App() {
//   const [isLogged, setLogged] = useState(false);

//   // Function to simulate a login process
//   const handleLogin = () => {
//     // Perform your actual login logic here
//     // For demonstration purposes, I'm just setting isLogged to true after a delay
//     setTimeout(() => {
//       setLogged(true);
//     }, 1000);
//   };

//   return (
//     <div className='App'>
//       <BrowserRouter>
//         <Routes>
//           <Route path="" element={<Login onLogin={handleLogin} />} />
//           {isLogged ? (
//             <>
//               <Route path="/level/1" element={<Level1 />} />
//               <Route path="/level/2" element={<Level2 />} />
//               <Route path="/level/3" element={<Level3 />} />
//             </>
//           ) : (
//             // Redirect to the login page if not logged in
//             <Navigate to="/" />
//           )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;