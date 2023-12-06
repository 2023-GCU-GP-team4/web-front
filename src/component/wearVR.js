import React from "react";
import {useNavigate} from "react-router-dom";
import "./mainDesign.css";

// 사진, VR 사진은 추후 어떤 것으로 할지 결정
import VR from "../img/VR.png"  // 변경 후 사진
import logo from "../img/BottomLogo.png";

function WearVR() {
    const navigate = useNavigate();
    let timeoutId;
    timeoutId = setTimeout(() => {
        navigate('/loading');
    }, 5000);
    
    return (
        <>
            <div style={{ textAlign: "center", margin: "auto", fontSize: "400%", color: "#B3DA94", marginTop: "100px", marginBottom: "50px" }}>
                <a style={{ fontFamily: "PaytoneOne", textDecoration: "none", color: "#B3DA94" }}>
                    Get ready to wear VR
                </a>
                <br />
                <img src={VR} alt="VR Image" style={{ marginTop: "80px", maxHeight: "35vh" }} />
                <br />
                <img src={logo} alt="로고" className="logo"></img>
            </div >
        </>
    );
}

export default WearVR;
