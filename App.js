import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizData = [
    {
      question: "What is the most used language in the world?",
      options: ['Latin', 'French', 'Tagalog', 'Mandarin'],
      answer: 'Mandarin'
    },
    {
      question: "What is the national tree of the Philippines?",
      options: ['Narra', 'Pilapil', 'Mahogany', 'Mango'],
      answer: 'Narra',
    },
  ];

  const handleAnswer = (selectedAnswer) => {
   const answer = quizData[currentQuestions]?.answer;
   if (answer === selectedAnswer) {
     setScore((prevScore) => prevScore + 1);
   }

   const nextQuestion = currentQuestions + 1;
   if (nextQuestion < quizData.length) {
     setCurrentQuestions(nextQuestion);
   } else {
     setShowScore(true);
   }
  }

  return (
    <View style={styles.container}>
    {showScore ? <View>
      <Text>Score: {score}</Text>
    </View> :
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{quizData[currentQuestions]?.question}</Text>
        {quizData[currentQuestions]?.options.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => handleAnswer(item)} style={styles.optionContainer}> 
              <Text style={styles.optionStyle}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    }
      <StatusBar style="auto" />
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
  },
  optionStyle: {
    color: 'black',
    padding: 5,
    alignSelf: 'center',
  },
  optionContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    marginTop: 15
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
