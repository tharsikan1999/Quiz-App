/* import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

function DashboardScreen() {
 

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 20 }}>
      
    </View>
  );
}

export default DashboardScreen;


 */


import React from 'react';
import { View } from 'react-native';
import Quiz from './Quiz'; // Assuming the Quiz component is in the same directory
import QuizData from './QuizData';
const DashboardScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Quiz data={QuizData} />
    </View>
  );
};

export default DashboardScreen;
