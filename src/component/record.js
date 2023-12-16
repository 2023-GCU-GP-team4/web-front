import React, { useState } from "react";
import { getStorage, ref, uploadString, getDownloadURL, uploadBytes } from 'firebase/storage';
import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { app } from "../firebase/config";
import { useNavigate } from "react-router";

const AudioRecord = () => {
  const navigate = useNavigate();
  const urlParts = window.location.pathname.split('/');
  const id = urlParts[urlParts.length - 1];

  const firestore = getFirestore();
  const simulationCollection = collection(firestore, 'simulation');
  const simulationDoc = doc(simulationCollection, id);
  
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(false);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [startTime, setStartTime] = useState(null);
  const [recordingTime, setRecordingTime] = useState(null);

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
      setStartTime(Date.now()); // 녹음 시작 시간 저장
  
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

        // 발표 시간 측정
        const endTime = Date.now(); // 녹음 종료 시간 저장
        const newRecordingTime = endTime - startTime; // 녹음 시간 계산
        setRecordingTime(newRecordingTime); // recordingTime 업데이트

        if(recordingTime!=0)
        {console.log("녹음 시간:", newRecordingTime);}
        else {console.log("녹음 시간 측정이 안 되었습니다.", newRecordingTime);}

        // 발표 시간 파이어베이스 simulation에 저장
        try {
          updateDoc(simulationDoc, { time: newRecordingTime });
          console.log('Document updated successfully with time');
        } catch (error) {
          console.error('Error updating document:', error.message);
        }

        uploadRecordingToFirebase(e.data).then(() => {
          // 업로드가 완료된 후 페이지를 전환
          navigate(`/loading/${id}`);
        });
      } else {
        console.error("녹음된 데이터가 없습니다.");
      }
    };
  
    // Ensure media is defined
    if (media) {
      stream.getAudioTracks().forEach(function (track) {
        track.stop();
      });
  
      media.stop();
      analyser.disconnect();
      source.disconnect();
    }
  };
  
  // 파이어베이스 저장
  const uploadRecordingToFirebase = async (blobData) => {
    const storage = getStorage(app);
  
    // JSON 파일 업로드
    const jsonFileName = `${id}.json`;
    const jsonStorageRef = ref(storage, `VoiceRecord/${jsonFileName}`);
    const jsonData = { recording: blobData.blobURL };
    const jsonString = JSON.stringify(jsonData);
    await uploadString(jsonStorageRef, jsonString, 'raw');
    console.log('JSON 파일 업로드 완료:', jsonFileName);

    // MP3 파일 업로드 (동일한 파일명 사용)
    const mp3FileName = `${id}.mp3`;
    const mp3StorageRef = ref(storage, `VoiceRecord/${mp3FileName}`);
    const mp3ArrayBuffer = await blobToArrayBuffer(blobData);
    await uploadBytes(mp3StorageRef, mp3ArrayBuffer);
    console.log('MP3 파일 업로드 완료:', mp3FileName);
  
    // 업로드된 파일들의 다운로드 URL 획득
    const jsonDownloadURL = await getDownloadURL(jsonStorageRef);
    const mp3DownloadURL = await getDownloadURL(mp3StorageRef);
    console.log('JSON 다운로드 URL:', jsonDownloadURL);
    console.log('MP3 다운로드 URL:', mp3DownloadURL);

    // 업로드한 mp3 파일의 다운로드 URL 파이어베이스 simulation에 저장
    try {
        await updateDoc(simulationDoc, { recordURL: mp3DownloadURL });
        console.log('Document updated successfully with recordURL');
    } catch (error) {
        console.error('Error updating document:', error.message);
    }
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