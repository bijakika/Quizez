import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import QuizList from '../components/QuizList';

const QuizListScreen = ({ navigation }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch quizzes from API or any other data source
    const fetchedQuizzes = [
      { id: 1, title: 'Quiz 1' },
      { id: 2, title: 'Quiz 2' },
      { id: 3, title: 'Quiz 3' },
      { id: 4, title: 'Quiz 4' },
      { id: 5, title: 'Quiz 5' },
      { id: 6, title: 'Quiz 6' },
      { id: 7, title: 'Quiz 7' },
      { id: 8, title: 'Quiz 8' },
      { id: 9, title: 'Quiz 9' },
      { id: 10, title: 'Quiz 10' },
    ];
    setQuizzes(fetchedQuizzes);
  }, []);

  const handlePressQuiz = (quizId) => {
    navigation.navigate('QuizDetail', { quizId });
  };

  return (
    <View>
      <Text>Available Quizzes</Text>
      <QuizList quizzes={quizzes} onPressQuiz={handlePressQuiz} />
    </View>
  );
};

export default QuizListScreen;
