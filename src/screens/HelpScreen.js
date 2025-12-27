import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function HelpScreen() {
  const faqs = [
    { q: 'How do I complete a lesson?', a: 'Open the lesson and press "Finish Lesson" at the bottom.' },
    { q: 'How do I track my progress?', a: 'Go to the Completed Lessons screen to see all finished lessons.' },
    { q: 'Can I change the theme?', a: 'Yes, toggle Dark/Light mode in Settings → Theme.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Help / FAQ</Text>
      {faqs.map((item, index) => (
        <View key={index} style={styles.faq}>
          <Text style={styles.question}>{item.q}</Text>
          <Text style={styles.answer}>{item.a}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0A1A2F' },
  title: { fontSize: 28, fontWeight: '700', color: '#3A82F7', marginBottom: 20 },
  faq: { marginBottom: 20, padding: 16, backgroundColor: 'rgba(18,43,69,0.5)', borderRadius: 14 },
  question: { fontSize: 16, fontWeight: '700', color: '#fff', marginBottom: 6 },
  answer: { fontSize: 16, color: '#D4D7DD' },
});
