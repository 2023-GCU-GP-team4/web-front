import "./level.css";

import {Link} from 'react-router-dom';
import React, { Component } from 'react';

// 사진
// 고정 
import arrowL_mouseleave from "../img/level_arrow_left_mouseleave.png";
import arrowL_mouseover from "../img/level_arrow_left_mouseover.png";
import arrowR_mouseleave from "../img/level_arrow_right_mouseleave.png";
import arrowR_mouseover from "../img/level_arrow_right_mouseover.png";
import check from "../img/level_checkbox.png";
import logo from "../img/BottomLogo.png";
// level마다 변경
import pic_mouseleave from "../img/level1_mouseleave.png";
import pic_mouseover from "../img/level1_mouseover.png";

export default function Level1()
{
    return(
        <div className="full-screen">
            <div className="title_level"> <b> LEVEL 1 </b> </div>
            <div className="contents">
                <div className="middle">
                    <Link to="/level/3" className="arrow">
                        <img src={arrowL_mouseleave} alt="돌아가기" className="arrow_mouseleave"></img>
                        <img src={arrowL_mouseover} alt="돌아가기_전환" className="arrow_mouseover"></img>
                    </Link>
                    <Link to='/uploadFile' className="outline" style={{ textDecoration: 'none' }}>
                        <div className="pic">
                            <img src={pic_mouseleave} alt="이미지" className="pic_mouseleave"></img>
                            <img src={pic_mouseover} alt="이미지" className="pic_mouseover"></img>
                        </div>
                        <div className="explanation">
                            <div className="set">
                                <img src={check} alt="체크박스" className="checkbox"></img>
                                <h2> No audience </h2>
                            </div>
                            <div className="set">
                                <img src={check} alt="체크박스" className="checkbox"></img>
                                <h2> No time limit </h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/level/2" className="arrow">
                        <img src={arrowR_mouseleave} alt="넘어가기" className="arrow_mouseleave"></img>
                        <img src={arrowR_mouseover} alt="넘어가기_전환" className="arrow_mouseover"></img>
                    </Link>
                </div>

                <img src={logo} alt="로고" className="logo_level"></img>
            </div>
        </div>
    )
}