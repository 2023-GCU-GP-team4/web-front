import React from "react";
import wearVR from "../img/wearVR.png";

function WearVR() {
    return (
        <>

            <div style={{ textAlign: "center", margin: "auto", fontSize: "400%", color: "#518FEB", marginTop: "200px", marginBottom: "50px" }}>
                <a style={{ fontFamily: "PaytoneOne", textDecoration: "none", color: "#518FEB" }}>
                    Get ready to wear VR
                </a>
                <br />
                <img src={wearVR} alt="VR Image" style={{ marginTop: "100px", maxWidth: "100%" }} />
                <br />
                <img src="https://drive.google.com/uc?id=1AmDDJJJCTR0pgZVMwlj5MaO6Hon9GPwW" alt="로고" className="logo"></img>
            </div >
        </>
    );
}

export default WearVR;
