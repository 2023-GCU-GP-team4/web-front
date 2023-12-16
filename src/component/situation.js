import "./situation.css";
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import React, { useState, useEffect } from 'react';
import presentation_mouseleave from "../img/situation_presentation_mouseleave.png";
import presentation_mouseover from "../img/situation_presentation_mouseover.png";
import interview_mouseleave from "../img/situation_interview_mouseleave.png";
import interview_mouseover from "../img/situation_interview_mouseover.png";
import logo from "../img/BottomLogo.png";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged, auth, firestore } from '../firebase/config';

export default function Situation() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();  // Use useNavigate instead of useHistory

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

    const handlePresentationButtonClick = async () => {
        try {
            const user = await getUserFromAuthentication();
            console.log("User ID:", user.uid);

            const simulationCollection = collection(getFirestore(), 'simulation');

            const docRef = await addDoc(simulationCollection, { situation: "presentation", user: user.uid });

            console.log("Document ID:", docRef.id);
            navigate(`/level/1/${docRef.id}`);

        } catch (error) {
            console.error("Error during presentation button click:", error.message);
        }
    };


    const handleInterviewButtonClick = async () => {
        try {
            const user = await getUserFromAuthentication();
            console.log("User ID:", user.uid);

            const simulationCollection = collection(getFirestore(), 'simulation');

            const docRef = await addDoc(simulationCollection, { situation: "interview", user: user.uid });

            console.log("Document ID:", docRef.id);
            navigate(`/interview/${docRef.id}`);

        } catch (error) {
            console.error("Error during presentation button click:", error.message);

        }
    };


    return (
        <div className="full-screen">
            <div className="main_situation">
                <Link to="/level/1" className="round_presentation" onClick={handlePresentationButtonClick}>
                    <div className="presentation">
                        <img src={presentation_mouseleave} alt="발표" className="presentation_mouseleave" />
                        <img src={presentation_mouseover} alt="발표" className="presentation_mouseover" />
                    </div>
                    <h1 className="name">PRESENTATION</h1>
                </Link>
                <Link to="/interview" className="round_interview" onClick={handleInterviewButtonClick}>
                    <div className="interview">
                        <img src={interview_mouseleave} alt="면접" className="interview_mouseleave" />
                        <img src={interview_mouseover} alt="면접" className="interview_mouseover" />
                    </div>
                    <h1 className="name">INTERVIEW</h1>
                </Link>
            </div>
            <img src={logo} alt="로고" className="logo_situation" />

            {userData && (
                <div>
                    <h2>User Data:</h2>
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}