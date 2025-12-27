import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>Version: 1.0.0</Text>
      <Text style={styles.text}>Developed by Olsi Asllani</Text>
      <Text style={styles.text}>This app helps users learn programming step by step with lessons, quizzes, and progress tracking.</Text>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/')}>
        <Text style={styles.buttonText}>Visit Website</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0A1A2F' },
  title: { fontSize: 28, fontWeight: '700', color: '#3A82F7', marginBottom: 16 },
  text: { fontSize: 16, color: '#D4D7DD', marginBottom: 12 },
  button: {
    marginTop: 20,
    backgroundColor: '#3A82F7',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
