import './feedback.css';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

// 사진
import logo from "../img/BottomLogo.png";

function Report() {
  // 임시 data
  const feedbackData = {
    questionList: '어쩌구저쩌구',
    // Add more feedback data as needed
  };
  
  const urlParts = window.location.pathname.split('/');
  const id = urlParts[urlParts.length - 1];

  const [score, setScore] = useState(null);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const [visuals, setVisuals] = useState(null);
  const [recordURL, setRecordURL] = useState(null);

  const fetchSimulationData = async () => {
    try {
      const firestore = getFirestore();
      const simulationDocRef = doc(firestore, 'simulation', id);
      const simulationDoc = await getDoc(simulationDocRef);
  
      if (simulationDoc.exists()) {
        const simulationData = simulationDoc.data();
        setScore(simulationData.score);
        
        // Convert timestamp to a formatted string
        const timeSeconds = Math.floor(simulationData.time / 1000);
        const newMinutes = Math.floor(timeSeconds / 60);
        const newSeconds = timeSeconds % 60;
  
        setVisuals(simulationData.visuals);
        setRecordURL(simulationData.recordURL);
        setMinutes(newMinutes);
        setSeconds(newSeconds);
      } else {
        console.error('Simulation document not found');
      }
    } catch (error) {
      console.error('Error fetching simulation data:', error.message);
    }
  };  

  useEffect(() => {
    fetchSimulationData();
  }, [id]);

  return (
    <div className="app">
      <div className="scores-container">
        <div className='title_feedback'>Score</div>
        <div className='score'>
          <h2>{score}</h2>
          <h3>of 100</h3>
        </div>
        <Link to="/main" className='link_back'>Go back to Start</Link>
      </div>
      <div className="feedback-container">
        <div className='title_feedback'>Feedback</div>
        <div className="feedback-item">
          <div className='kind'>Time</div>
          <div className='detail_feedback'> {minutes}분 {seconds}초 </div>
        </div>
        <div className="feedback-item">
          <div className='kind'>Visuals</div>
          <div className='detail_feedback'> {visuals} </div>
        </div>
        <div className="feedback-item">
          <div className='kind'>Question List</div>
          <div className='detail_feedback'> {feedbackData.questionList} </div>
        </div>
        <div className='feedback-item'>
          <div className="record-button">
            <div className='kind'>Record</div>
            <Link to={recordURL}>
              <button>
                <FontAwesomeIcon icon={faDownload} /> Download
              </button>
            </Link>
          </div>
        </div>
        <img src={logo} alt="로고" className="logo_feedback"></img>
      </div>
    </div>
  );
}

export default Report;