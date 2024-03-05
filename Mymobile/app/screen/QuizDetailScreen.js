import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import QuizDetail from '../components/QuizDetail';

const QuizDetailScreen = ({ route, navigation }) => {
  const { quizId } = route.params;
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    // Fetch quiz details based on quizId from API or any other data source
    const fetchedQuiz = { id: quizId, title: 'Quiz 1', description: 'Description of Quiz 1' };
    setQuiz(fetchedQuiz);
  }, []);

  const handleStartQuiz = () => {
    navigation.navigate('Question', { quizId: quiz.id });
  };

  return (
    <View>
      <Text>Quiz Detail</Text>
      {quiz && <QuizDetail quiz={quiz} onStartQuiz={handleStartQuiz} />}
    </View>
  );
};

export default QuizDetailScreen;
