import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = ({ route }) => {
  const { score, totalQuestions, correctAnswers } = route.params;

  const calculatePercentage = () => {
    return ((correctAnswers / totalQuestions) * 100).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Result</Text>
      <Text style={styles.resultText}>
        Your Score: {score} / {totalQuestions}
      </Text>
      <Text style={styles.resultText}>
        Correct Answers: {correctAnswers} / {totalQuestions}
      </Text>
      <Text style={styles.resultText}>
        Percentage: {calculatePercentage()}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ResultScreen;
