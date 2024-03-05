import axios from 'axios';

const BASE_URL = 'https://api.example.com';

// Fungsi untuk mengambil daftar kuis dari backend
export const fetchQuizzes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/quizzes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    throw error;
  }
};

// Fungsi untuk mengambil detail kuis berdasarkan ID dari backend
export const fetchQuizById = async (quizId) => {
  try {
    const response = await axios.get(`${BASE_URL}/quizzes/${quizId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching quiz with ID ${quizId}:`, error);
    throw error;
  }
};

// Fungsi untuk mengirim hasil kuis ke backend
export const submitQuizResult = async (quizId, answers) => {
  try {
    const response = await axios.post(`${BASE_URL}/quizzes/${quizId}/results`, { answers });
    return response.data;
  } catch (error) {
    console.error(`Error submitting quiz result for quiz with ID ${quizId}:`, error);
    throw error;
  }
};
