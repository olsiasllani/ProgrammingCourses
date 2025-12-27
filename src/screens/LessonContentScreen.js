import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { lessons } from '../data/lessonsData'; // Your lessons data

export default function LessonContentScreen({ route, navigation }) {
  const { lesson, lessonNumber, courseId } = route.params;

  // Function to mark lesson as completed
  const finishLesson = () => {
    // Update the lesson completed state
    lesson.completed = true;

    // Find next lesson in the same course
    const courseLessons = lessons.filter(l => l.courseId === courseId);
    const nextLessonIndex = courseLessons.findIndex(l => l.id === lesson.id) + 1;

    if (lesson.hasQuiz) {
      navigation.navigate('QuizScreen', { lesson });
    } else if (nextLessonIndex < courseLessons.length) {
      const nextLesson = courseLessons[nextLessonIndex];
      navigation.navigate('LessonContentScreen', { 
        lesson: nextLesson, 
        lessonNumber: lessonNumber + 1, 
        courseId 
      });
    } else {
      navigation.navigate('CompletedLessonsScreen');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Lesson {lessonNumber}: {lesson.title}
      </Text>

      {lesson.content.map((paragraph, index) => (
        <Text key={index} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.finishButton} onPress={finishLesson}>
          <Text style={styles.buttonText}>Finish Lesson</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#0A1A2F'
  },
  title: { 
    fontSize: 24, 
    fontWeight: '700', 
    marginBottom: 18, 
    color: '#3A82F7'
  },
  paragraph: { 
    fontSize: 16, 
    lineHeight: 26, 
    color: '#D4D7DD',
    marginBottom: 12 
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  finishButton: {
    backgroundColor: '#3A82F7',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 14,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
