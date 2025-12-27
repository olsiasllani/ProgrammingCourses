import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CourseCard({ course }) {
  const navigation = useNavigation();
  const scaleAnim = new Animated.Value(1);
  const glowAnim = new Animated.Value(0);

  // Decide where to navigate: LessonScreen for courses, QuizScreen for quizzes
  const handlePress = () => {
    if (course.questions) {
      // Final Quiz
      navigation.navigate('QuizScreen', { quizId: course.id });
    } else {
      // Normal Course
      navigation.navigate('LessonScreen', { course });
    }
  };

  const onPressIn = () => {
    Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true }).start();
    Animated.timing(glowAnim, { toValue: 1, duration: 200, useNativeDriver: false }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, { toValue: 1, friction: 4, useNativeDriver: true }).start();
    Animated.timing(glowAnim, { toValue: 0, duration: 200, useNativeDriver: false }).start();
  };

  const shadowColor = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(0,0,0,0.2)', 'rgba(58,130,247,0.7)'],
  });

  return (
    <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }], shadowColor }]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handlePress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={styles.touchArea}
      >
        {/* Image (only for courses) */}
        {!course.questions && course.image && (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: course.image }} style={styles.image} />
          </View>
        )}

        {/* Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{course.title}</Text>

          {/* For courses, show slogan & level */}
          {!course.questions && (
            <>
              <Text style={styles.slogan}>{course.slogan}</Text>
              <Text style={styles.level}>Level: {course.level}</Text>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Open Lessons</Text>
              </View>
            </>
          )}

          {/* For quiz, show special button */}
          {course.questions && (
            <View style={[styles.button, { backgroundColor: '#FF4D6D' }]}>
              <Text style={styles.buttonText}>Take Final Quiz</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginVertical: 12,
    backgroundColor: '#1E1E2D',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  touchArea: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 20,
  },
  imageWrapper: {
    width: 90,
    height: 90,
    borderRadius: 18,
    overflow: 'hidden',
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
  infoContainer: { flex: 1, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '800', color: '#3A82F7', marginBottom: 4 },
  slogan: { fontSize: 14, color: '#C0C5D0', marginBottom: 6 },
  level: { fontSize: 13, color: '#8B95A1', marginBottom: 12 },
  button: {
    backgroundColor: '#3A82F7',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    width: 150,
  },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: '700' },
});
