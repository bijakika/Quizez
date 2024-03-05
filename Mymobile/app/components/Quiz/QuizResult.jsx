import React from 'react';
import { View, Text } from 'react-native';

const QuizResult = ({ score, totalQuestions }) => {
  return (
    <View>
      <Text>Score: {score}/{totalQuestions}</Text>
      {score === totalQuestions ? (
        <Text>Congratulations! You answered all questions correctly!</Text>
      ) : (
        <Text>Unfortunately, you didn't answer all questions correctly. Keep practicing!</Text>
      )}
    </View>
  );
};

export default QuizResult;
