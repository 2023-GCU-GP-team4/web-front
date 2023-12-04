import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './title.css'; 

const BeforeLogin = () => {
  return (
    <div>
        {/* 폰트 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap" rel="stylesheet" />
        
      <div className="title-container">
        <CSSTransition
          in={true} // 애니메이션을 항상 보여주도록 설정
          timeout={1000} // 애니메이션 지속 시간(ms)
          classNames="fade" // 나타나는 애니메이션
        >
          <div className="title-spitch">Spitch</div>
        </CSSTransition>

           <div class="image"></div>
           <div class="bottom-text">Login / Signup</div>

          
      </div>
    </div>
  );
};

export default BeforeLogin;