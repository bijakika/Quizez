import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizListItem = ({ quiz, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{quiz.title}</Text>
      <Text style={styles.description}>{quiz.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    color: '#666666',
  },
});

export default QuizListItem;
