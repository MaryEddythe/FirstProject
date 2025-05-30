import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [currentQuestions, setCurrentQuestions] = useState(0);

  const quizData = [
    {
      question: "What is the most used language in the world?",
      options: ['Latin', 'French', 'Tagalog', 'Mandarin'],
      answer: 'Mandarin'
    },
    {
      question: "What is the national tree of the Philippines?",
      options: ['Narra', 'Pilapil', 'Mahogany', 'Mango'],
      answer: 'Narra'
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text>{quizData[currentQuestions]?.question}</Text>
        {quizData[currentQuestions]?.options.map}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '80%', 
  }
});

