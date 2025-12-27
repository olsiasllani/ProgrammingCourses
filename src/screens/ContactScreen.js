import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function ContactScreen() {
  const handleEmail = () => {
    Linking.openURL('mailto:support@example.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact / Feedback</Text>
      <Text style={styles.text}>Have a question or feedback? Reach us via email:</Text>
      <TouchableOpacity onPress={handleEmail} style={styles.button}>
        <Text style={styles.buttonText}>support@example.com</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0A1A2F' },
  title: { fontSize: 28, fontWeight: '700', color: '#3A82F7', marginBottom: 16 },
  text: { fontSize: 16, color: '#D4D7DD', marginBottom: 20 },
  button: {
    backgroundColor: '#3A82F7',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#3A82F7',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
