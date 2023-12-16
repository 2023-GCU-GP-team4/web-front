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
    time: '2 m 30 s',
    visuals: 'Good',
    questionList: '어쩌구저쩌구',
    // Add more feedback data as needed
  };
  
  const urlParts = window.location.pathname.split('/');
  const id = urlParts[urlParts.length - 1];

  const [score, setScore] = useState(null);
  const [time, setTime] = useState(null);
  const [visuals, setVisuals] = useState(null);

  const fetchSimulationData = async () => {
    try {
      const firestore = getFirestore();
      const simulationDocRef = doc(firestore, 'simulation', id);
      const simulationDoc = await getDoc(simulationDocRef);

      if (simulationDoc.exists()) {
        const simulationData = simulationDoc.data();
        setScore(simulationData.score);
        
        // Convert timestamp to a formatted string
        if (simulationData.time && simulationData.time.seconds) {
          const timestamp = simulationData.time.seconds * 1000; // Convert seconds to milliseconds
          const dateObject = new Date(timestamp);
          setTime(dateObject.toLocaleString());
        }

        setVisuals(simulationData.visuals);
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
          <div className='detail_feedback'> {time} </div>
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
            <button>
              <FontAwesomeIcon icon={faDownload} /> Download
            </button>
          </div>
        </div>
        <img src={logo} alt="로고" className="logo_feedback"></img>
      </div>
    </div>
  );
}

export default Report;