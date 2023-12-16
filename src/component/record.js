import React, { useState } from "react";
import { getStorage, ref, uploadString, getDownloadURL, uploadBytes } from 'firebase/storage';
import { getFirestore, addDoc, updateDoc } from 'firebase/firestore';
import { app } from "../firebase/config";

const AudioRecord = () => {
  const urlParts = window.location.pathname.split('/');
  const id = urlParts[urlParts.length - 1];
  
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(false);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();

  const onRecAudio = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        if (e.playbackTime > 180) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();
        } else {
          setOnRec(true);
        }
      };
    });
  };

  const offRecAudio = () => {
    media.ondataavailable = function (e) {
      if (e.data && e.data.size > 0) {
        setAudioUrl(e.data);
        setOnRec(false);
        console.log("녹음된 데이터:", e.data);
        uploadRecordingToFirebase(e.data);
      } else {
        console.error("녹음된 데이터가 없습니다.");
      }
    };

    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    media.stop();
    analyser.disconnect();
    source.disconnect();
  };

  const getFileName = (extension) => {
    // 타임스탬프를 사용한 파일 이름 생성
    const timestamp = Date.now();
    return `record_${timestamp}.${extension}`;
  };
  
  const uploadRecordingToFirebase = async (blobData) => {
    const storage = getStorage(app);
  
    // JSON 파일 업로드
    const jsonFileName = getFileName('json');
    const jsonStorageRef = ref(storage, `VoiceRecord/${jsonFileName}`);
    const jsonData = { recording: blobData.blobURL };
    const jsonString = JSON.stringify(jsonData);
    await uploadString(jsonStorageRef, jsonString, 'raw');
    console.log('JSON 파일 업로드 완료:', jsonFileName);
  
    // MP3 파일 업로드 (동일한 파일명 사용)
    const mp3FileName = jsonFileName.replace('.json', '.mp3');
    const mp3StorageRef = ref(storage, `VoiceRecord/${mp3FileName}`);
    const mp3ArrayBuffer = await blobToArrayBuffer(blobData);
    await uploadBytes(mp3StorageRef, mp3ArrayBuffer);
    console.log('MP3 파일 업로드 완료:', mp3FileName);
  
    // 업로드된 파일들의 다운로드 URL 획득 (선택사항)
    const jsonDownloadURL = await getDownloadURL(jsonStorageRef);
    const mp3DownloadURL = await getDownloadURL(mp3StorageRef);
    console.log('JSON 다운로드 URL:', jsonDownloadURL);
    console.log('MP3 다운로드 URL:', mp3DownloadURL);
  };  

  // Blob을 ArrayBuffer로 변환하는 함수
  const blobToArrayBuffer = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result instanceof ArrayBuffer) {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to convert Blob to ArrayBuffer.'));
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(blob);
    });
  };

  return (
    <>
      <button onClick={onRecAudio} disabled={onRec}>
        녹음 시작
      </button>
      <button onClick={offRecAudio} disabled={!onRec}>
        녹음 종료
      </button>
    </>
  );
};

export default AudioRecord;


// import React, { useEffect, useState, useRef } from "react";

// const AudioRecord = () => {
//   const [socketConnected, setSocketConnected] = useState(false);
//   const [sendMsg, setSendMsg] = useState(false);
//   const [items, setItems] = useState([]);

//   const webSocketUrl = `ws://localhost:8000`;
//   let ws = useRef(null);

//   // 소켓 객체 생성
//   useEffect(() => {
//     if (!ws.current) {
//       ws.current = new WebSocket(webSocketUrl);
//       ws.current.onopen = () => {
//         console.log("connected to " + webSocketUrl);
//         setSocketConnected(true);
//       };
//       ws.current.onclose = (error) => {
//         console.log("disconnect from " + webSocketUrl);
//         console.log(error);
//       };
//       ws.current.onerror = (error) => {
//         console.log("connection error " + webSocketUrl);
//         console.log(error);
//       };
//       ws.current.onmessage = (evt) => {
//         const data = JSON.parse(evt.data);
//         console.log(data);
//         setItems((prevItems) => [...prevItems, data]);
//       };
//     }

//     return () => {
//       console.log("clean up");
//       ws.current.close();
//     };
//   }, []);

//   // 소켓이 연결되었을 시에 send 메소드
//   useEffect(() => {
//     if (socketConnected) {
//       ws.current.send(
//         JSON.stringify({
//           message: "send",
//         })
//       );

//       setSendMsg(true);
//     }
//   }, [socketConnected]);

//   return (
//     <div>
//       <div>socket</div>
//       <div>socket connected : {`${socketConnected}`}</div>
//       <div>res : </div>
//       <div>
//         {items.map((item) => {
//           return <div>{JSON.stringify(item)}</div>;
//         })}
//       </div>
//     </div>
//   );
// };

// export default AudioRecord;