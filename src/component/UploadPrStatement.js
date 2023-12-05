import "./levelDescription.css";
import "./levelDescriptionArrowEvent.css";
import "./levelDescriptionBlockEvent.css";

import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';

import logo from "../img/BottomLogo.png";
import arrowL_mouseleave from "../img/level_arrow_left_mouseleave.png";
import arrowL_mouseover from "../img/level_arrow_left_mouseover.png";
import arrowR_mouseleave from "../img/level_arrow_right_mouseleave.png";
import arrowR_mouseover from "../img/level_arrow_right_mouseover.png";

import upload_image from "../img/upload-file.svg"

export default function UploadPrStatement() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        setSelectedFiles([...selectedFiles, ...e.target.files]);
    };

    const handleUpload = () => {
        // 선택된 파일을 업로드하거나 필요한 처리를 수행
        if (selectedFiles.length > 0) {
            console.log("Uploading files:", selectedFiles);
        } else {
            console.log("No files selected");
        }
    };

    const handleClickImage = () => {
        // 파일 선택(input type="file") 엘리먼트를 클릭
        fileInputRef.current.click();
    };

    return (
        <div className="full-screen">
            <div className="title_level"> <b> Attach Personal Statement </b> </div>
            <div className="contents">
                <div className="middle">
                    <Link to="/uploadScript" className="arrow">
                        <img src={arrowL_mouseleave} alt="돌아가기" className="arrow_mouseleave"></img>
                        <img src={arrowL_mouseover} alt="돌아가기_전환" className="arrow_mouseover"></img>
                    </Link>
                    <div className="outline">
                        <div className="pic">
                        <label htmlFor="fileInput" onClick={handleClickImage}>
                            <img src={upload_image} alt="이미지" className="upload_image"></img>
                        </label>
                        <input
                                type="file"
                                accept=".pdf, .ppt, .pptx"  // 업로드 가능한 파일 형식 지정
                                onChange={handleFileChange}
                                className="upload_image"
                                multiple
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                id="fileInput"
                            />
                            {/* 선택된 파일을 미리보기로 표시하는 부분 */}
                            {selectedFiles.map((file, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    className="selected-file-preview"
                                />
                            ))}
                        </div>
                        <div className="explanation">
                            <h2> Drag & Drop a File Here </h2>
                            <button style={{
                                    fontFamily: 'PaytoneOne',
                                    fontSize: '16px',
                                    color: '#333',
                                    backgroundColor: '#fff',
                                    border: '3px solid #ffec45',
                                    padding: '10px 15px',
                                    cursor: 'pointer',
                                }} onClick={handleUpload}>
                                Upload
                            </button>
                        </div>
                    </div>
                    <Link to="/level/1" className="arrow">
                        <img src={arrowR_mouseleave} alt="넘어가기" className="arrow_mouseleave"></img>
                        <img src={arrowR_mouseover} alt="넘어가기_전환" className="arrow_mouseover"></img>
                    </Link>
                </div>
                <img src={logo} alt="로고" className="logo_level"></img>
            </div>
        </div>
    );
}
