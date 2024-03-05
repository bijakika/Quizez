import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizListScreen from './screens/QuizListScreen';
import QuizDetailScreen from './screens/QuizDetailScreen'; // Ganti QuizScreen menjadi QuizDetailScreen
import QuestionScreen from './screens/QuestionScreen'; // Ganti QuizScreen menjadi QuestionScreen
import ResultScreen from './screens/ResultScreen'; // Ganti QuizResultScreen menjadi ResultScreen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="QuizList">
          <Stack.Screen name="QuizList" component={QuizListScreen} />
          <Stack.Screen name="QuizDetail" component={QuizDetailScreen} /> 
          <Stack.Screen name="Question" component={QuestionScreen} /> 
          <Stack.Screen name="Result" component={ResultScreen} /> 
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
