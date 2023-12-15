import "./level.css";

import { Link, useNavigate } from 'react-router-dom';
import React, { Component } from 'react';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { getFirestore, addDoc, updateDoc } from 'firebase/firestore';
// 사진
import logo from "../img/BottomLogo.png";
// 1:1
import picInt1_mouseleave from "../img/intlevel1_mouseleave.png";
import picInt1_mouseover from "../img/intlevel1_mouseover.png";
// 1:2
import picInt2_mouseleave from "../img/intlevel2_mouseleave.png";
import picInt2_mouseover from "../img/intlevel2_mouseover.png";
// 1:3
import picInt3_mouseleave from "../img/intlevel3_mouseleave.png";
import picInt3_mouseover from "../img/intlevel3_mouseover.png";

export default function Interview() {
    const navigate = useNavigate();
    const urlParts = window.location.pathname.split('/');
    const id = urlParts[urlParts.length - 1];

    const handleContent1Click = async () => {
        const firestore = getFirestore();
        const simulationCollection = collection(firestore, 'simulation');
        const simulationDoc = doc(simulationCollection, id);

        try {
            await updateDoc(simulationDoc, { level: 1 });
            console.log('Document updated successfully with level: 1');
        } catch (error) {
            console.error('Error updating document:', error.message);
        }
    };

    const handleContent2Click = async () => {
        const firestore = getFirestore();
        const simulationCollection = collection(firestore, 'simulation');
        const simulationDoc = doc(simulationCollection, id);

        try {
            await updateDoc(simulationDoc, { level: 2 });
            console.log('Document updated successfully with level: 2');
        } catch (error) {
            console.error('Error updating document:', error.message);
        }
    };

    const handleContent3Click = async () => {
        const firestore = getFirestore();
        const simulationCollection = collection(firestore, 'simulation');
        const simulationDoc = doc(simulationCollection, id);

        try {
            await updateDoc(simulationDoc, { level: 3 });
            console.log('Document updated successfully with level: 3');
        } catch (error) {
            console.error('Error updating document:', error.message);
        }
    };
    return (
        <div className="full-screen">
            <div className="title_level"> <b> Interview </b> </div>
            <div className="contents">
                <div className="middle">
                    <Link to='/uploadPrStatement' className="outline_interview" style={{ textDecoration: 'none' }} onClick={handleContent1Click}>
                        <h3>1 : 1</h3>
                        <div className="picInt">
                            <img src={picInt1_mouseleave} alt="이미지" className="picInt_mouseleave"></img>
                            <img src={picInt1_mouseover} alt="이미지" className="picInt_mouseover"></img>
                        </div>
                    </Link>
                    <Link to='/uploadPrStatement' className="outline_interview" style={{ textDecoration: 'none' }} onClick={handleContent2Click}>
                        <h3>1 : 2</h3>
                        <div className="picInt">
                            <img src={picInt2_mouseleave} alt="이미지" className="picInt_mouseleave"></img>
                            <img src={picInt2_mouseover} alt="이미지" className="picInt_mouseover"></img>
                        </div>
                    </Link>
                    <Link to='/uploadPrStatement' className="outline_interview" style={{ textDecoration: 'none' }} onClick={handleContent3Click}>
                        <h3>1 : 3</h3>
                        <div className="picInt">
                            <img src={picInt3_mouseleave} alt="이미지" className="picInt_mouseleave"></img>
                            <img src={picInt3_mouseover} alt="이미지" className="picInt_mouseover"></img>
                        </div>
                    </Link>
                </div>

                <img src={logo} alt="로고" className="logo_level"></img>
            </div>
        </div>
    )
}