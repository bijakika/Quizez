import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizListPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch quiz data from backend API
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/quizzes');
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2>Quiz List Page</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            <p>Start Time: {quiz.startTime}</p>
            <p>End Time: {quiz.endTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizListPage;
