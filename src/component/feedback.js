import './feedback.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// 사진
import logo from "../img/BottomLogo.png";

function Report() {
  // Mock data for scores and feedback
  const scores = [
    { id: 1, score: 90 },
    { id: 2, score: 85 },
    // Add more scores as needed
  ];

  const feedbackData = {
    time: '2 m 30 s',
    visuals: 'Good',
    questionList: '어쩌구저쩌구',
    // Add more feedback data as needed
  };

  return (
    <div className="app">
      <div className="scores-container">
        <div className='title_feedback'>Score</div>
        <div className='score'>
          <h2>{`${scores[0].score}`}</h2>
          <h3>of 100</h3>
        </div>
        <Link to="/main" className='link_back'>Go back to Start</Link>
      </div>
      <div className="feedback-container">
        <div className='title_feedback'>Feedback</div>
        <div className="feedback-item">
          <div className='kind'>Time</div>
          <div className='detail_feedback'> {feedbackData.time} </div>
        </div>
        <div className="feedback-item">
          <div className='kind'>Visuals</div>
          <div className='detail_feedback'> {feedbackData.visuals} </div>
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