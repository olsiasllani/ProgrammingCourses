import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { quizzesData } from '../data/quizzesData';

export default function QuizScreen({ route, navigation }) {
  const { quizType } = route.params;
  const questions = quizzesData[quizType];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const current = questions[index];

  const animateNext = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start();
  };

  const chooseOption = (i) => {
    if (i === current.correctIndex) setScore(score + 1);

    if (index < questions.length - 1) {
      setIndex(index + 1);
      animateNext();
    } else {
      // Finish quiz
      setFinished(true);
    }
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setFinished(false);
  };

  const progress = (index + 1) / questions.length;

  return (
    <View style={styles.container}>

      {/* Progress Bar */}
      {!finished && (
        <View style={styles.progressBar}>
          <Animated.View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>
      )}

      {/* QUIZ DONE SCREEN */}
      {finished ? (
        <View style={styles.finishBox}>
          <Text style={styles.finishTitle}>Quiz Completed!</Text>

          <Text style={styles.finishScore}>
            {score} / {questions.length}
          </Text>

          <TouchableOpacity style={styles.restartBtn} onPress={restart}>
            <Text style={styles.restartText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.question}>{current.question}</Text>

          {current.options.map((option, i) => (
            <TouchableOpacity key={i} style={styles.option} onPress={() => chooseOption(i)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0f',
    padding: 20,
  },

  progressBar: {
    height: 10,
    backgroundColor: '#222',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 25,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#9d4bff',
    shadowColor: '#d200ff',
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  question: {
    color: '#cbaaff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textShadowColor: '#d200ff',
    textShadowRadius: 6,
  },

  option: {
    backgroundColor: '#191026',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#5e1aff',
    shadowColor: '#b43dff',
    shadowRadius: 8,
  },
  optionText: {
    color: '#e4d3ff',
    fontSize: 18,
  },

  finishBox: {
    marginTop: 60,
    alignItems: 'center',
  },
  finishTitle: {
    color: '#cbaaff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: '#d200ff',
    textShadowRadius: 10,
  },
  finishScore: {
    color: '#9d4bff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  restartBtn: {
    backgroundColor: '#5e1aff',
    padding: 15,
    borderRadius: 12,
    width: '70%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b43dff',
    shadowColor: '#d200ff',
    shadowRadius: 10,
  },
  restartText: {
    color: '#fff',
    fontSize: 20,
  },
});
