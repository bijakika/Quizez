import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuizQuestion = ({ question, options, onSelectOption }) => {
  return (
    <View>
      <Text>{question}</Text>
      {options.map(option => (
        <TouchableOpacity key={option.id} onPress={() => onSelectOption(option.id)}>
          <Text>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuizQuestion;
