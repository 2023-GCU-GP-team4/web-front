import React, { useState } from 'react';
import { css } from '@emotion/css';

const UploadFile = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = () => {
    if (file) {
      // 파일 업로드 중인 동안 버튼 비활성화
      // 실제 파일 업로드 로직을 추가해야됨
      console.log('Uploading file:', file);
      console.log('File type:', file.type);
      console.log('File size:', file.size);
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={css`
        position: relative;
        background-color: #fff;
        width: 100%;
        height: 600px;
        overflow: hidden;
        text-align: left;
        font-size: 24px;
        color: #000;
        font-family: 'Paytone One';
      `}
    >
      {!file && (
        <div>
          <div
            className={css`
              position: absolute;
              top: 365px;
              left: 429px;
              font-size: 20px;
              font-family: 'Noto Sans';
              color: #6b6b6b;
            `}
          >
            {`Drag & Drop a File Here `}
          </div>
          <img
            className={css`
              position: absolute;
              top: 246px;
              left: 492px;
              width: 96px;
              height: 96px;
              overflow: hidden;
            `}
            alt=""
            src="/upload-file.svg"
          />
        </div>
      )}

      {file && (
        <div>
          <p
            className={css`
              margin-top: 10px;
              position: absolute;
              top: 290px;
              left: 330px;
              font-size: 20px;
              font-family: 'Noto Sans';
              color: #6b6b6b;
            `}
          >
            {`Selected File: ${file.name}`}
          </p>
          <button
            onClick={handleUpload}
            className={css`
              padding: 10px;
              background-color: #3881ed;
              color: #fff;
              border: none;
              cursor: pointer;
              font-size: 16px;
              margin-top: 10px;
              position: absolute;
              top: 340px;
              left: 500px;
            `}
          >
            Upload
          </button>
        </div>
      )}

      <div
        className={css`
          position: absolute;
          top: 532px;
          left: 921px;
          width: 78px;
          height: 34px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 78px;
            height: 34px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
            `}
          >
            Spitch
          </div>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          top: 527px;
          left: 1006px;
          width: 43px;
          height: 43px;
        `}
        alt=""
        src="/SpitchLogo.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 535px;
          left: 1029px;
          border-radius: 50%;
          background-color: #343434;
          width: 2px;
          height: 2px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 169px;
          left: 190px;
          border-radius: 45px;
          border: 4px solid #bbb;
          box-sizing: border-box;
          width: 700px;
          height: 300px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 50px;
          left: 330px;
          font-size: 40px;
          color: #3881ed;
        `}
      >
        Attach Presentation Slide
      </div>
    </div>
  );
};

export default UploadFile;
