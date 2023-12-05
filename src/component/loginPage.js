import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom'
import './title.css';
import { app, auth, firestore } from '../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import google from "../img/googlelogin.png";
import logo from '../img/mainlogo.png';
import { collection, getDoc, doc, addDoc } from 'firebase/firestore';

const Login = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();


    async function handleGoogleLogin() {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user.uid);

            // Use doc function to get a reference to the document
            const userRef = doc(firestore, "users", user.uid);
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                // Document doesn't exist, create it
                const docRef = await addDoc(collection(firestore, "users"), {
                    uid: user.uid,
                    feedback: [],
                    simulation: [],
                });

                console.log("Document written with ID: ", docRef.id);
            }

            navigate(`/afterLogin`);
        } catch (error) {
            console.error("Error signing in: ", error);
        }
    }

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
                    <img src={logo} className="mainlogo" />
                </CSSTransition>

                <button onClick={handleGoogleLogin} style={{
                    background: '#FBF0C9', border: 'hidden', position: "relative", top: "185px", cursor: "pointer", width: '480px', height: '75px', borderRadius: '50px'
                }}><img style={{ background: "white", width: '480px', height: '75px', borderRadius: '30px' }} src={google}></img></button>


            </div>
        </div >
    );
};

export default Login;