import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ProgressBarAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProgressBar = ({ progress, total, barHeight }) => {
  const scaledHeight = barHeight || 10;

  return (
    <View style={[styles.progressBarContainer, { height: scaledHeight + 20 }]}>
      <View style={{ height: scaledHeight, backgroundColor: '#7167f5', borderRadius: 10, overflow: 'hidden' }}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          progress={progress / total}
          indeterminate={false}
          color="#2ecc71"
          style={{ transform: [{ scaleY: 4 }] }}
        />
      </View>
      <Text style={styles.progressText}>{`${progress}/${total}`}</Text>
    </View>
  );
};

const Quiz = ({ data }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(data.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const navigation = useNavigation();

  const handleAnswer = useCallback((option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[currentQuestion] = option;
      return newSelectedOptions;
    });
  }, [currentQuestion]);

  const handleNext = () => {
    if (selectedOptions[currentQuestion] === null) {
      // If the user hasn't selected an answer, prevent navigation to the next question
      return;
    }

    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const renderOptions = () => {
    return data[currentQuestion].options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.optionButton,
          selectedOptions[currentQuestion] === option && { backgroundColor: '#2ecc71' },
        ]}
        onPress={() => handleAnswer(option)}
      >
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  const isLastQuestion = currentQuestion === data.length - 1;

  if (showResult) {
    return (
      <View style={styles.container}>
        <ProgressBar progress={currentQuestion + 1} total={data.length} />
        <Text style={styles.resultText}>Your Score: {score} / {data.length}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Finished</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProgressBar progress={currentQuestion + 1} total={data.length} />
      <Text style={styles.questionText}>{data[currentQuestion].question}</Text>
      {renderOptions()}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePrevious}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        {isLastQuestion ? (
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Finished</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e7edf9',
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    height: 50,
    backgroundColor: '#7167f5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 6,
    marginTop: 15,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  resultText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  progressBarContainer: {
    width: '100%',
    marginBottom: 20,
  },
  progressText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Quiz;
