import React from 'react';
import { View } from 'react-native';
import Quiz from './Quiz'; 
import QuizData from './QuizData';
const MainQuiz = () => {
  return (
    <View style={{ flex: 1 }}>
      <Quiz data={QuizData} />
    </View>
  );
};

export default MainQuiz;
