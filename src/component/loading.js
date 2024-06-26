import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './loading.css';
import './mainDesign.css';

// 사진
import logo from "../img/BottomLogo.png";

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoadingCompleted, setIsLoadingCompleted] = useState(false);
  const navigate = useNavigate();
  const urlParts = window.location.pathname.split('/');
  const id = urlParts[urlParts.length - 1];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = (prevProgress + 0.5) % 101;

        if (nextProgress === 100) {
          clearInterval(interval);
          setIsLoadingCompleted(true);
          onComplete();
        }

        return nextProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    let timeoutId;
  
    if (isLoadingCompleted) {
      timeoutId = setTimeout(() => {
        navigate(`/feedback/${id}`);
      }, 200);
    }
  
    return () => clearTimeout(timeoutId);
  
  }, [isLoadingCompleted, navigate]);

  return (
    <div className='main_loading'>
      <h1 className='title_loading'> Great Job! </h1>
      <div className="loadingbar_container">
        <div className="loadingbar" style={{ width: `${progress}%` }}></div>
        <h3 className='changed'>{isLoadingCompleted ? 'Completed!' : 'Loading...'}</h3>
      </div>
      <img src={logo} alt="로고" className="logo_loading"></img>
    </div>
  );
};

export default Loading;