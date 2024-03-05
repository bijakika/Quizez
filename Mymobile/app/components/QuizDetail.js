import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuizDetail = ({ quiz, onStartQuiz }) => {
  return (
    <View>
      <Text>{quiz.title}</Text>
      <Text>{quiz.description}</Text>
      <TouchableOpacity onPress={onStartQuiz}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizDetail;
