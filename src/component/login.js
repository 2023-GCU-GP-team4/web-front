import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import './titleAnimation.css';
import { app, auth, firestore } from '../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import google from '../img/googlelogin.png';
import logo from '../img/mainlogo.png';

const Login = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUid = localStorage.getItem('uid');
        if (storedUid) {
            navigate('/main'); // 이미 로그인한 사용자면 메인 페이지로 이동
        }
    }, []); // 빈 배열을 넘겨주면 컴포넌트가 처음 마운트될 때만 실행

    async function handleGoogleLogin() {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const userRef = result.user;
            console.log(user.uid);
          
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                await setDoc(userRef, {
                    feedback: [],
                    simulation: [],
                });
                console.log('Document created for ID: ', user.uid);
            }

            localStorage.setItem('uid', user.uid); // 사용자 UID를 localStorage에 저장
            console.log(user.id);

            navigate('/main');
        } catch (error) {
            console.error('Error signing in: ', error);
        }
        return { user };
    }

    return (
        <div>
            {/* 폰트 */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
            />
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
                    <img src={logo} className="mainlogo" alt="Main Logo" />
                </CSSTransition>

                <button
                    onClick={handleGoogleLogin}
                    style={{
                        background: '#FBF0C9',
                        border: 'hidden',
                        position: 'relative',
                        top: '185px',
                        cursor: 'pointer',
                        width: '480px',
                        height: '75px',
                        borderRadius: '50px',
                    }}
                >
                    <img
                        style={{
                            background: 'white',
                            width: '480px',
                            height: '75px',
                            borderRadius: '30px',
                        }}
                        src={google}
                        alt="Google Login"
                    />
                </button>
            </div>
        </div>
    );
};

export default Login;