import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Programming Courses</Text>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard course={item} />}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#0A1A2F' 
  },

  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#3A82F7',
    marginBottom: 20,
  }
});
