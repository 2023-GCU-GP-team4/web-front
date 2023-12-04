import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './report.css';

function Report() {
  // Mock data for scores and feedback
  const scores = [
    { id: 1, score: 90 },
    { id: 2, score: 85 },
    // Add more scores as needed
  ];

  const feedbackData = {
    time: '2 minutes 30 seconds',
    visuals: 'Good',
    questionList: '어쩌구저쩌구',
    // Add more feedback data as needed
  };

  return (
    <div className="app">
      <div className="scores-container">
        <h2>Scores</h2>
        <div className="large-font">{`Score: ${scores[0].score}`}</div>
      </div>
      <div className="feedback-container">
        <h2>Feedback</h2>
        <div className="feedback-item">
          <strong>Time </strong> {feedbackData.time}
        </div>
        <div className="feedback-item">
          <strong>Visuals </strong> {feedbackData.visuals}
        </div>
        <div className="feedback-item">
          <strong>Question List </strong> {feedbackData.questionList}
        </div>
        <div className="record-button">
          <strong>Record </strong>
          <button>
            <FontAwesomeIcon icon={faDownload} /> Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Report;