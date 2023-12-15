import "./level.css";

import { Link, useNavigate } from 'react-router-dom';
import React, { Component } from 'react';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { getFirestore, addDoc, updateDoc } from 'firebase/firestore';

// 사진
// 고정 
import arrowL_mouseleave from "../img/level_arrow_left_mouseleave.png";
import arrowL_mouseover from "../img/level_arrow_left_mouseover.png";
import arrowR_mouseleave from "../img/level_arrow_right_mouseleave.png";
import arrowR_mouseover from "../img/level_arrow_right_mouseover.png";
import check from "../img/level_checkbox.png";
import logo from "../img/BottomLogo.png";
// level마다 변경
import pic_mouseleave from "../img/level2_mouseleave.png";
import pic_mouseover from "../img/level2_mouseover.png";

export default function Level2() {
    const navigate = useNavigate();
    const urlParts = window.location.pathname.split('/');
    const id = urlParts[urlParts.length - 1];

    const handleContentClick = async () => {
        // Update the document in Firebase with level: 1
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
    return (
        <div className="full-screen">
            <div className="title_level"> <b> LEVEL 2 </b> </div>
            <div className="contents">
                <div className="middle">
                    <Link to={`/level/1/${id}`} className="arrow">
                        <img src={arrowL_mouseleave} alt="돌아가기" className="arrow_mouseleave"></img>
                        <img src={arrowL_mouseover} alt="돌아가기_전환" className="arrow_mouseover"></img>
                    </Link>
                    <Link to='/uploadFile' className="outline" style={{ textDecoration: 'none' }} onClick={handleContentClick}>
                        <div className="pic">
                            <img src={pic_mouseleave} alt="이미지" className="pic_mouseleave"></img>
                            <img src={pic_mouseover} alt="이미지" className="pic_mouseover"></img>
                        </div>
                        <div className="explanation">
                            <div className="set">
                                <img src={check} alt="체크박스" className="checkbox"></img>
                                <h2> Small audience </h2>
                            </div>
                            <div className="set">
                                <img src={check} alt="체크박스" className="checkbox"></img>
                                <h2> No time limit </h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/level/3/${id}`} className="arrow">
                        <img src={arrowR_mouseleave} alt="넘어가기" className="arrow_mouseleave"></img>
                        <img src={arrowR_mouseover} alt="넘어가기_전환" className="arrow_mouseover"></img>
                    </Link>
                </div>

                <img src={logo} alt="로고" className="logo_level"></img>
            </div>
        </div>
    )
}