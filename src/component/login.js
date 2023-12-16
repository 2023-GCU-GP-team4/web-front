import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import './titleAnimation.css';
import { app, auth, firestore } from '../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import google from "../img/googlelogin.png";
import logo from '../img/mainlogo.png';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

const Login = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    async function handleGoogleLogin() {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const userRef = result.user;
            console.log(user.uid);
            setUser(user);
            const userRef = doc(firestore, "users", user.uid);

            // Check if the document exists before setting data
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                // Document doesn't exist, create it
                await setDoc(userRef, {
                    feedback: [],
                    simulation: [],
                });

                console.log("Document created for ID: ", user.uid);
            }

            navigate('/main');
        } catch (error) {
            console.error("Error signing in: ", error);
        }
        return { user };
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
                    in={true}
                    timeout={1000}
                    classNames="fade"
                >
                    <img src={logo} className="mainlogo" />
                </CSSTransition>

                <button onClick={handleGoogleLogin} style={{
                    background: '#FBF0C9', border: 'hidden', position: "relative", top: "185px", cursor: "pointer", width: '480px', height: '75px', borderRadius: '50px'
                }}><img style={{ background: "white", width: '480px', height: '75px', borderRadius: '30px' }} src={google} alt="Google Login"></img></button>
            </div>
        </div >
    );
};

export default Login;