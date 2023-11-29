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
        <div>
            <div className="title"> <b> LEVEL 1 </b> </div>
            <div className="middle">
                <Link to="/level/3" className="arrow">
                    <img src="https://drive.google.com/uc?id=1dedSbPcQJk_2Ex-mNpK0YcfBRD_FpaB_" alt="돌아가기" className="arrow_mouseleave"></img>
                    <img src="https://drive.google.com/uc?id=1pF0EekR8PpF_InsWgd4CCNexGhl9rdoF" alt="돌아가기_전환" className="arrow_mouseover"></img>
                </Link>
                <div className="outline">
                    <div className="pic">
                        <img src="https://drive.google.com/uc?id=11u9nvZkSlQvP1weHV0pGflC5JheKzPMT" alt="이미지" className="pic_mouseleave"></img>
                        <img src="https://drive.google.com/uc?id=1j0F70WdH9TFr9n2u5zuWfDeXAM5NYxP2" alt="이미지" className="pic_mouseover"></img>
                    </div>
                    <div className="explanation">
                        <div className="set">
                            <img src="https://drive.google.com/uc?id=1DKSbnAPyvGw-vQCySoDIyEHehrscBrSk" alt="체크박스" className="checkbox"></img>
                            <h2> Large audience </h2>
                        </div>
                        <div className="set">
                            <img src="https://drive.google.com/uc?id=1DKSbnAPyvGw-vQCySoDIyEHehrscBrSk" alt="체크박스" className="checkbox"></img>
                            <h2> Time-limited </h2>
                        </div>
                    </div>
                </div>
                <Link to="/level/2" className="arrow">
                    <img src="https://drive.google.com/uc?id=1baNJrGRU27VHOZDovcyPDb4qz8jLaDmS" alt="넘어가기" className="arrow_mouseleave"></img>
                    <img src="https://drive.google.com/uc?id=1n82ewX37hYXaMwKfWDtkkb7AFU20Yznq" alt="넘어가기_전환" className="arrow_mouseover"></img>
                </Link>
            </div>

            <img src="https://drive.google.com/uc?id=1AmDDJJJCTR0pgZVMwlj5MaO6Hon9GPwW" alt="로고" className="logo"></img>
        </div>
    )
}