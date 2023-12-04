import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import './title.css'; 

const Title = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    // 애니메이션이 끝난 후 4초 뒤에 '/login' 페이지로 이동
    const timeoutId = setTimeout(() => {
      navigate('/login');
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div>
        {/* 폰트 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet" />
        
      <div className="title-container">
        <CSSTransition
          in={true} // 애니메이션을 항상 보여주도록 설정
          timeout={1000} // 애니메이션 지속 시간(ms)
          classNames="fade" // 나타나는 애니메이션
        >
          <div className="animation-text start">Start</div>
        </CSSTransition>

        <CSSTransition
          in={true}
          timeout={1000}
          classNames="fade"
        >
          <div className="animation-text speech">Speech</div>
        </CSSTransition>

        <CSSTransition
          in={true}
          timeout={1000}
          classNames="fade"
        >
          <div className="animation-text pitch">Pitch</div>
        </CSSTransition>

        <CSSTransition
          in={true}
          timeout={1000}
          classNames="fade"
        >
          <div className="animation-text spitch">Spitch</div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Title;
