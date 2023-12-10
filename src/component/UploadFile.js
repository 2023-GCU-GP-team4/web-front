import "./upload.css";

import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import logo from "../img/BottomLogo.png";
import upload_image from "../img/uploadFile.png";

export default function UploadFile() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [showUploadButtons, setShowUploadButtons] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // 파일 선택 여부에 따라 업로드 버튼을 표시 또는 숨김
        setShowUploadButtons(selectedFiles.length > 0);
    }, [selectedFiles]);

    const handleFileChange = (e) => {
        // 한 번에 모든 선택을 처리
        setSelectedFiles(Array.from(e.target.files));
    };

    const handleUpload = () => {
        if (selectedFiles.length > 0) {
            console.log("Uploading files:", selectedFiles);
            navigate("/uploadScript");
        } else {
            console.log("No files selected");
        }
    };

    return (
        <div className="full-screen">
            <div className="title_level"> <b> Attach Presentation Slide </b> </div>
            <div className="contents">
                <div className="middle">
                    <div className="blockUploadFile">
                        <img src={upload_image} alt="이미지" className="upload_image"></img>
                        <div>
                            <div className="align">
                                <h1 style={{ display: selectedFiles.length > 0 ? 'none' : 'block' }}>
                                    Only .pdf, .ppt, .pptx enable
                                </h1>

                                {/* select 버튼*/}
                                {!showUploadButtons && (
                                    <label htmlFor="fileInput" className="uploadFileButton">
                                        Select
                                    </label>
                                )}
                                <input
                                    type="file"
                                    accept=".pdf, .ppt, .pptx"
                                    onChange={handleFileChange}
                                    className="upload_image"
                                    multiple
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    id="fileInput"
                                />
                            </div>
    
                            <div className="align">
                                {/* reselect, upload 버튼*/}
                                {selectedFiles.map((file, index) => (
                                    <div key={index} className="selected-file-name">
                                        {file.name}
                                    </div>
                                ))}
                                {showUploadButtons && (
                                    <div className="uploadFileButton_set">
                                        <label htmlFor="fileInput" className="uploadFileButton">Reselect</label>
                                        <div className="uploadFileButton" onClick={handleUpload}>Upload</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <img src={logo} alt="로고" className="logo_level"></img>
            </div>
        </div>
    );
}