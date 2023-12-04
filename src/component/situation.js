import "./situation.css";

import {Link} from 'react-router-dom';
import React, { Component } from 'react';

// level 선택 화면으로 이동
import { Level1 } from './level1Description';
// 면접 화면 클릭시 이동하는 곳은 미정, 임시로 wearVR로
import {WearVR} from './wearVR';

// 사진
import presentation_mouseleave from "../img/situation_presentation_mouseleave.png";
import presentation_mouseover from "../img/situation_presentation_mouseover.png";
import interview_mouseleave from "../img/situation_interview_mouseleave.png";
import interview_mouseover from "../img/situation_interview_mouseover.png";
import logo from "../img/BottomLogo.png";

export default function Situation()
{
    return(
        <div className="full-screen">
            <div className="main">
                <Link to="/level/1" className="round_presentation">
                    <div className="presentation">
                        <img src={presentation_mouseleave} alt="발표" className="presentation_mouseleave"></img>
                        <img src={presentation_mouseover} alt="발표" className="presentation_mouseover"></img>
                    </div>
                    <h1 className="name">PRESENTATION</h1>
                </Link>
                <Link to="/wearVR" className="round_interview">
                    <div className="interview">
                        <img src={interview_mouseleave} alt="면접" className="interview_mouseleave"></img>
                        <img src={interview_mouseover} alt="면접" className="interview_mouseover"></img>
                    </div>
                    <h1 className="name">INTERVIEW</h1>
                </Link>
            </div>
            <img src={logo} alt="로고" className="logo"/>
        </div>
    )
}