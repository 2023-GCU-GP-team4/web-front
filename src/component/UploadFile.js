import "./levelDescription.css";

import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

import logo from "../img/BottomLogo.png";
import upload_image from "../img/upload-file.svg";

export default function UploadFile() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [showUploadButton, setShowUploadButton] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // 파일 선택 여부에 따라 업로드 버튼을 표시 또는 숨김
        setShowUploadButton(selectedFiles.length > 0);
    }, [selectedFiles]);

    const handleFileChange = (e) => {
        // 한 번에 모든 선택을 처리 -- 했는데도 두 번 실행됨
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

    const handleClickImage = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="full-screen">
            <div className="title_level"> <b> Attach Presentation Slide </b> </div>
            <div className="contents">
                <div className="middle">
                    <div className="blockUploadFile">
                        <div className="pic">
                            <img src={upload_image} alt="이미지" className="upload_image"></img>
                            {/* label을 사용하여 버튼을 클릭하면 파일 선택 */}
                            <label htmlFor="fileInput" onClick={handleClickImage}>
                                <div className="uploadFileButton_select">Select</div>
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
                            <h2 style={{ display: selectedFiles.length > 0 ? 'none' : 'block' }}>
                                Only .pdf, .ppt, .pptx enable
                            </h2>
                            {showUploadButton && (
                                <div className="uploadFileButton_after">
                                    <div className="uploadFileButton_reselect" onClick={handleUpload}>Reselect</div>
                                    <div className="uploadFileButton_upload" onClick={handleUpload}>Upload</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <img src={logo} alt="로고" className="logo_level"></img>
            </div>
        </div>
    );
}

