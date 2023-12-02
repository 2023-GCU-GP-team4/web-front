import "./levelDescription.css";
import "./levelDescriptionArrowEvent.css";
import "./levelDescriptionBlockEvent.css";

import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import { Level3 } from './level3Description';
import { Level2 } from './level2Description';

export default function Level1()
{
    return(
        <div className="full-screen">
            <div className="title"> <b> LEVEL 1 </b> </div>
            <div className="contents">
                <div className="middle">
                    <Link to="/level/3" className="arrow">
                        <img src="https://drive.google.com/uc?id=1trFjEz_Klfh2ie2nrH_i-JuwDTPEbplm" alt="돌아가기" className="arrow_mouseleave"></img>
                        <img src="https://drive.google.com/uc?id=1ErT6QYYejruAkI7Y3T1IZbqlo_EnGlQq" alt="돌아가기_전환" className="arrow_mouseover"></img>
                    </Link>
                    <div className="outline">
                        <div className="pic">
                            <img src="https://drive.google.com/uc?id=1EuGxelOxk73i6ZCNVm3LJsJdjly6pQ7l" alt="이미지" className="pic_mouseleave"></img>
                            <img src="https://drive.google.com/uc?id=1TlhdIInvKOOuGd3jX1i4vYYMhEDf-DYJ" alt="이미지" className="pic_mouseover"></img>
                        </div>
                        <div className="explanation">
                            <div className="set">
                                <img src="https://drive.google.com/uc?id=1yw9r_8uh7-dr7XVN7n7iTumZCrjDc-SA" alt="체크박스" className="checkbox"></img>
                                <h2> No audience </h2>
                            </div>
                            <div className="set">
                                <img src="https://drive.google.com/uc?id=1yw9r_8uh7-dr7XVN7n7iTumZCrjDc-SA" alt="체크박스" className="checkbox"></img>
                                <h2> No time limit </h2>
                            </div>
                        </div>
                    </div>
                    <Link to="/level/2" className="arrow">
                        <img src="https://drive.google.com/uc?id=19QGRXq-A1BGzo6z8CVch9sWr72FgPssN" alt="넘어가기" className="arrow_mouseleave"></img>
                        <img src="https://drive.google.com/uc?id=1LgGkB-EVm35T4tZTeyoPcMC6d8rysOCu" alt="넘어가기_전환" className="arrow_mouseover"></img>
                    </Link>
                </div>

                <img src="https://drive.google.com/uc?id=1Cgna9D1Zvnz-I3B_BVsjIUlNrMXPUbX5" alt="로고" className="logo"></img>
            </div>
        </div>
    )
}