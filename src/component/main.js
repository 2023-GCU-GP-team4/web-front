import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, auth } from '../firebase/config';

import './titleAnimation.css';
import logo from '../img/mainlogo.png';

const Main = () => {
  const navigate = useNavigate();

  // 로그아웃 함수
  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('uid'); // 로컬 스토리지에서 UID 제거
      navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getUserFromAuthentication = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe(); // Stop listening after the first change

            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not authenticated'));
            }
        });
    });
};

const handleFeedbackList = async () => {
  try {
      const user = await getUserFromAuthentication();
      console.log("User ID:", user.uid);
      navigate(`/feedbackList/${user.uid}`);
  } catch (error) {
      console.error("Error during presentation button click:", error.message);
  }
};

  return (
    <div>
      {/* 폰트 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap"
        rel="stylesheet"
      />

      <div className="title-container">
        <CSSTransition
          in={true}
          timeout={1000}
          classNames="fade"
        >
          <img src={logo} className="mainlogo2" alt="Main Logo" />
        </CSSTransition>
      </div>

      <div className="bottom-text-line" onClick={handleFeedbackList}>
        Feedback List
      </div>
      <Link to="/situation" className="bottom-text-line">
        Start
      </Link>
      <div onClick={handleLogout} className='logout'> Logout </div>
    </div>
  );
};

export default Main;