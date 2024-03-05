import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AnswerOption = ({ option, onSelectAnswer }) => {
  return (
    <TouchableOpacity onPress={() => onSelectAnswer(option)}>
      <Text>{option.text}</Text>
    </TouchableOpacity>
  );
};

export default AnswerOption;
