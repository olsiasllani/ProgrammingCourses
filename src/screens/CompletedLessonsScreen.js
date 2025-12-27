// CompletedLessonsScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { lessons } from '../data/lessonsData';

export default function CompletedLessonsScreen({ navigation }) {
  const completedLessons = lessons.filter(lesson => lesson.completed);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.lessonCard}
      activeOpacity={0.8}
      onPress={() => {
        // tiny delay to avoid FlatList re-render tap issues
        setTimeout(() => {
          navigation.navigate('LessonScreen', { lesson: item });
        }, 50);
      }}
    >
      <View style={styles.cardContent}>
        <View style={styles.lessonNumberContainer}>
          <Text style={styles.lessonNumber}>{index + 1}</Text>
        </View>
        <View style={styles.lessonInfo}>
          <Text style={styles.lessonTitle}>{item.title}</Text>
          {item.completedDate && (
            <Text style={styles.completedDate}>
              Completed on {item.completedDate}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Lessons</Text>

      {completedLessons.length === 0 ? (
        <Text style={styles.emptyText}>
          You haven’t completed any lessons yet. Start learning now!
        </Text>
      ) : (
        <FlatList
          data={completedLessons}
          keyExtractor={item => item.id.toString()} // make sure keys are strings
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      )}
    </View>
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
    fontWeight: '700',
    color: '#3A82F7',
    marginBottom: 20,
  },
  lessonCard: {
    backgroundColor: 'rgba(18,43,69,0.5)',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    shadowColor: '#3A82F7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lessonNumberContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3A82F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  lessonNumber: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  completedDate: {
    color: '#BFD7ED',
    fontSize: 12,
    marginTop: 4,
  },
  emptyText: {
    color: '#A7B1C2',
    fontSize: 16,
    marginTop: 50,
    textAlign: 'center',
    lineHeight: 22,
  },
});
