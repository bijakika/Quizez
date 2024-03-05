import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Gunakan useEffect untuk melakukan pengambilan data kuis dari backend saat komponen dimuat
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/quizzes'); // Ganti URL dengan URL endpoint sesuai dengan backend Anda
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2>Quiz List</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
