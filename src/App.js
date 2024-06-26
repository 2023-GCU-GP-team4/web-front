import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

import Situation from './component/situation';
import Level1 from './component/level1Description';
import Level2 from './component/level2Description';
import Level3 from './component/level3Description';
import Interview from './component/interview';
import Login from './component/login';
import WearVR from './component/wearVR';
import Loading from './component/loading';
import FeedbackList from './component/feedbackList';
import Title from './component/title';
import BeforeLogin from './component/beforeLogin';
import Main from './component/main';
import AxiosTest from './component/axiosTest';
import UploadFile from './component/UploadFile';
import UploadScript from './component/UploadScript';
import UploadPrStatement from './component/UploadPrStatement';
import Feedback from './component/feedback';
import AudioRecord from './component/record';

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/title" element={<Title />} />

          <Route path="/situation" element={<Situation />} />
          <Route path="/level/1/:id" element={<Level1 />} />
          <Route path="/level/2/:id" element={<Level2 />} />
          <Route path="/level/3/:id" element={<Level3 />} />
          <Route path="/interview/:id" element={<Interview />} />
          <Route path="/wearVR/:id" element={<WearVR />} />
          <Route path="/feedbackList/:id" element={<FeedbackList />} />
          <Route path="/uploadFile/:id" element={<UploadFile />} />
          <Route path="/uploadScript/:id" element={<UploadScript />} />
          <Route path="/uploadPrStatement/:id" element={<UploadPrStatement />} />
          <Route path="/feedback/:id" element={<Feedback />} />
          <Route
            path="/loading/:id"
            element={
              <Loading
                progress={loadingProgress}
                onComplete={() => setLoading(false)}
              />
            }
          />
          <Route path="" element={<Navigate to="/title" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/beforeLogin" element={<BeforeLogin />} />
          <Route path="/main" element={<Main />} />
          <Route path="/test" element={<AxiosTest />} />
          <Route path="/record/:id" element={<AudioRecord />} />
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