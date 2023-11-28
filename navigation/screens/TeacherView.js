// TeacherView.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const TeacherView = ({ quizData, onClose, onPublish }) => {
  return (
    <ScrollView
      style={styles.container}
      stickyHeaderIndices={[0]} // Make the first child (close button) sticky
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>🌟  🌟  🌟  🌟  🌟  🌟  🌟  🌟  🌟  🌟</Text>

      {quizData.map((questionData, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionNumber}>Question {index + 1}</Text>
          <Text style={styles.questionText}>{questionData.question}</Text>
          <View style={styles.optionsContainer}>
            {questionData.options.map((option, optionIndex) => (
              <TouchableOpacity
                key={optionIndex}
                style={styles.optionButton}
                onPress={() => console.log("Selected option:", option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.correctOptionText}>Correct Option: {questionData.correct_option}</Text>
          <View style={styles.separator} />
        </View>
      ))}

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    height:40,
    marginBottom:10
  },
  closeButton: {
    borderRadius: 8,
    alignItems: 'center',
   
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6c5ce7',
  },
  questionContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 6,
  },
  questionNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#6c5ce7',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 12,
    color: '#333',
  },
  optionsContainer: {
    marginTop: 8,
  },
  optionButton: {
    backgroundColor: '#6c5ce7',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  correctOptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
  publishButtonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    alignItems: 'center',
    position: 'sticky',
    bottom: 0,
    zIndex: 1, // Ensure the button is above the content
  },
  publishButton: {
    borderRadius: 8,
    alignItems: 'center',
  },
  publishButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TeacherView;
