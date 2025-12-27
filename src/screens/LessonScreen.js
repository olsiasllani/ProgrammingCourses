import React, { useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { lessons } from '../data/lessonsData';

export default function LessonScreen({ route, navigation }) {
  const { course } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Fade-in animation
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const courseLessons = lessons.filter(item => item.courseId === course.id);

  return (
    <Animated.ScrollView style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.subtitle}>Lessons</Text>

      {courseLessons.map((lesson, index) => (
        <TouchableOpacity
          key={lesson.id}
          style={styles.lessonCard}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('LessonContent', {
              lesson,
              lessonNumber: index + 1,
            })
          }
        >
          <View style={styles.lessonLeft}>
            <Text style={styles.lessonNumber}>#{index + 1}</Text>
          </View>

          <View style={styles.lessonRight}>
            <Text style={styles.lessonTitle}>{lesson.title}</Text>
            <Text style={styles.lessonDescription}>Tap to start this lesson</Text>
          </View>
        </TouchableOpacity>
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1A2F',
    padding: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#3A82F7',
  },

  subtitle: {
    fontSize: 18,
    color: '#A7B1C2',
    marginTop: -4,
    marginBottom: 20,
  },

  lessonCard: {
    backgroundColor: '#112B45',
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#1F3B5C',
    alignItems: 'center',
    shadowColor: '#3A82F7',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },

  lessonLeft: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#0F2440',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  lessonNumber: {
    color: '#3A82F7',
    fontSize: 18,
    fontWeight: '700',
  },

  lessonRight: {
    flex: 1,
  },

  lessonTitle: {
    color: '#D4D7DD',
    fontSize: 17,
    fontWeight: '600',
  },

  lessonDescription: {
    color: '#7F8FA6',
    fontSize: 13,
    marginTop: 3,
  },
});
