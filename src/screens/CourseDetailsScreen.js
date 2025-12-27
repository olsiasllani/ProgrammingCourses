import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function CourseDetailsScreen({ route }) {
  const { course } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>

      <Text style={styles.description}>{course.description}</Text>

      <Text style={styles.sectionTitle}>Topics Covered:</Text>

      {course.topics.map((topic, index) => (
        <Text key={index} style={styles.topic}>
          • {topic}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0A1A2F', // dark blue
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3A82F7', // accent blue
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#D4D7DD',
    marginBottom: 20,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3A82F7',
    marginBottom: 10,
  },
  topic: {
    fontSize: 16,
    color: '#D4D7DD',
    marginBottom: 8,
  },
});
