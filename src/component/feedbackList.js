import './feedbackList.css';

import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

import logo from '../img/BottomLogo.png';
import bin_mouseleave from '../img/bin_mouseleave.png';
import bin_mouseover from '../img/bin_mouseover.png';
import { useNavigate } from 'react-router';

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const urlParts = window.location.pathname.split('/');
  const id = urlParts[urlParts.length - 1];

  const fetchData = async () => {
    try {
      const firestore = getFirestore();
      const simulationCollection = collection(firestore, 'simulation');
      const simulationSnapshot = await getDocs(simulationCollection);

      const feedbackData = simulationSnapshot.docs
        .filter(doc => doc.data().user === id)
        .map(doc => ({
          id: doc.id,
          userName: doc.data().user,
          date: doc.data().date,
        }));

      setFeedbacks(feedbackData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    const firestore = getFirestore();
    const simulationCollection = collection(firestore, 'simulation');

    // 실시간 업데이트를 위한 구독 설정
    const unsubscribe = onSnapshot(simulationCollection, fetchData);

    // 최초 실행시 데이터 가져오기
    fetchData();

    // Cleanup 함수를 통해 구독 취소
    return () => unsubscribe();
  }, [id]);

  const navigate = useNavigate();
  const handleNavigateToFeedback = async (feedbackId) => {
    navigate(`/feedback/${feedbackId}`);
  };

  const handleDeleteFeedback = async (feedbackId) => {
    try {
      // 사용자에게 확인 여부 묻기
      const isConfirmed = window.confirm('Are you sure you want to delete it?');
  
      // 사용자가 확인을 선택한 경우에만 삭제 진행
      if (isConfirmed) {
        const firestore = getFirestore();
        const feedbackDocRef = doc(firestore, 'simulation', feedbackId);
        await deleteDoc(feedbackDocRef);
        console.log("Deletion Completed");
  
        // 삭제 후 다시 데이터 가져오기
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting feedback:', error.message);
    }
  };  

  return (
    <div className="main_list">
      <h1 className="title_list">Feedback List</h1>
      <div className="list">
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="block">
          <h3 className="date" onClick={() => handleNavigateToFeedback(feedback.id)}>
            {feedback.date ? new Intl.DateTimeFormat(navigator.language, {
              weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric', 
              hour: 'numeric', minute: 'numeric', hour12: false
            }).format(feedback.date.toDate()) : 'Unknown Date'}
          </h3>
          <div className="bin" onClick={() => handleDeleteFeedback(feedback.id)}>
            <img src={bin_mouseleave} alt="쓰레기통" className="bin_mouseleave" />
            <img src={bin_mouseover} alt="쓰레기통" className="bin_mouseover" />
          </div>
        </div>
      ))}
      </div>
      <img src={logo} alt="로고" className="logo" />
    </div>
  );
}