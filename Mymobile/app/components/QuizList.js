import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const QuizList = ({ quizzes, onPressQuiz }) => {
  return (
    <View>
      <Text>Quiz List</Text>
      <FlatList
        data={quizzes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressQuiz(item.id)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default QuizList;
