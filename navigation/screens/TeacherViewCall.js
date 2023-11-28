import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import TeacherView from './TeacherView';

const TeacherViewCall = () => {
  const [showTeacherView, setShowTeacherView] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [selectedMode, setSelectedMode] = useState(null);
  const [publishHistory, setPublishHistory] = useState([]);

  const [isVisiblebutton , setIsVisiblebutton] = useState(false);

  const [isVisiblepublishHistory , setIsVisiblepublishHistory] = useState(true);



  const generateQuestions = () => {
    if (!selectedMode) {
      alert("Please select a mode (maximum, minimum, low, high) before generating questions.");
      return ;
      
    }
    else{
      setIsVisiblebutton(true)
      setIsVisiblepublishHistory(false)
    }

    const sampleQuizData = [
      {
        question: "What’s the biggest planet in our solar system?",
        options: ["Jupiter","Saturn","Neptune","Mercury"],
        correct_option: "Jupiter"
      },
      {
        question: "What attraction in India is one of the famous in the world?",
        options: ["Chand Minar","Taj Mahal","Stadium"],
        correct_option: "Taj Mahal"
      },
      {
        question: "What land animal can open its mouth the widest?",
        options: ["Alligator","Crocodile","Baboon","Hippo"],
        correct_option: "Hippo"
      },
      {
        question: "What is the largest animal on Earth?",
        options: ["The African elephant","The blue whale","The sperm whale","The giant squid"],
        correct_option: "The blue whale"
      },
      {
        question: "What is the only flying mammal?",
        options: ["The bat","The flying squirrel","The bald eagle","The colugo"],
        correct_option: "The bat"
      }
    ];

    setQuizData(sampleQuizData);
    setShowTeacherView(true);
  };

  const publishQuestions = () => {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString(); 
    const newPublish = {
      mode: selectedMode,
      time: formattedTime,
    };

    setPublishHistory((prevHistory) => [...prevHistory, newPublish]);

    setShowTeacherView(false);
    setIsVisiblebutton(false);
    setIsVisiblepublishHistory(true);
  };

  const closeTeacherView = () => {
    setShowTeacherView(false);
    setQuizData([]);
    setIsVisiblepublishHistory(true);
    setIsVisiblebutton(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>🍎 Teacher's Desk 📚</Text>
        </View>

        {!showTeacherView && (
          <View style={styles.modeContainer}>
            <Text style={styles.modeText}>Select Mode:</Text>
            <View style={styles.modeButtonsContainer}>
              {['maximum', 'minimum', 'low', 'high'].map((mode) => (
                <TouchableOpacity
                  key={mode}
                  style={[styles.modeButton, selectedMode === mode && styles.selectedModeButton]}
                  onPress={() => setSelectedMode(mode)}
                >
                  <Text style={styles.modeButtonText}>{mode.charAt(0).toUpperCase() + mode.slice(1)}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.generateButton} onPress={generateQuestions}>
              <Text style={styles.buttonText}>Generate Questions</Text>
            </TouchableOpacity>
          </View>
        )}

        {showTeacherView && (
          <View>
            <TeacherView quizData={quizData} onClose={closeTeacherView} onPublish={publishQuestions} />
          </View>
        )}

        {isVisiblebutton && (<TouchableOpacity style={styles.publishButton} onPress={publishQuestions}>
          <Text style={styles.buttonText}>Publish Questions</Text>
        </TouchableOpacity>)}

        {isVisiblepublishHistory && (publishHistory.map((publish, index) => (
          <View key={index} style={styles.publishTimeContainer}>
            <Text style={styles.publishTimeText}>Quiz Mode: {publish.mode}</Text>
            <Text style={styles.publishTimeText}>Published Time: {publish.time}</Text>
          </View>
        )))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#8e44ad',
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  modeContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  modeText: {
    fontSize: 20,
    marginBottom: 15,
    color: '#333',
    fontWeight: 'bold',
  },
  modeButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  modeButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedModeButton: {
    backgroundColor: '#2ecc71',
  },
  modeButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  generateButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  publishButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  publishTimeContainer: {
    backgroundColor: '#f39c12',
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  publishTimeText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default TeacherViewCall;
