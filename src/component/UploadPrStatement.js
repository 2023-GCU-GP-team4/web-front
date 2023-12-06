import "./levelDescription.css";
import "./levelDescriptionArrowEvent.css";
import "./levelDescriptionBlockEvent.css";

import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

import logo from "../img/BottomLogo.png";
import upload_image from "../img/upload-file.svg"

export default function UploadPrStatement() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [showUploadButton, setShowUploadButton] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // 파일 선택 여부에 따라 업로드 버튼을 표시 또는 숨김
        setShowUploadButton(selectedFiles.length > 0);
    }, [selectedFiles]);

    const handleFileChange = (e) => {
        setSelectedFiles(Array.from(e.target.files));
    };

    const handleUpload = () => {
        // 선택된 파일을 업로드하거나 필요한 처리를 수행
        if (selectedFiles.length > 0) {
            console.log("Uploading files:", selectedFiles);
            navigate("/wearVR");
        } else {
            console.log("No files selected");
        }
    };

    const handleClickImage = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="full-screen">
            <div className="title_level"> <b> Attach Personal Statement </b> </div>
            <div className="contents">
                <div className="middle">
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
                        <h2 style={{ display: selectedFiles.length > 0 ? 'none' : 'block' }}>
                            Drag & Drop a File Here </h2>
                            {showUploadButton && (
                                <button
                                    style={{
                                        fontFamily: 'PaytoneOne',
                                        fontSize: '16px',
                                        color: '#333',
                                        backgroundColor: '#fff',
                                        border: '4px solid #B3DA94',
                                        padding: '12px 15px',
                                        cursor: 'pointer',
                                        position: 'absolute',
                                        top: '52%',
                                        left: '57%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                    onClick={handleUpload}
                                >
                                    Upload
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <img src={logo} alt="로고" className="logo_level"></img>
            </div>
        </div>
    );
}