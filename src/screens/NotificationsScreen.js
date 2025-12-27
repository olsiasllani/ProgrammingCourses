import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function NotificationsScreen() {
  const [reminders, setReminders] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <View style={styles.option}>
        <Text style={styles.optionText}>Lesson Reminders</Text>
        <Switch
          value={reminders}
          onValueChange={() => setReminders(prev => !prev)}
          thumbColor={reminders ? '#3A82F7' : '#ccc'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Newsletter</Text>
        <Switch
          value={newsletter}
          onValueChange={() => setNewsletter(prev => !prev)}
          thumbColor={newsletter ? '#3A82F7' : '#ccc'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0A1A2F' },
  title: { fontSize: 28, fontWeight: '700', color: '#3A82F7', marginBottom: 24 },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(18,43,69,0.5)',
    borderRadius: 14,
    marginBottom: 12,
  },
  optionText: { fontSize: 16, color: '#D4D7DD', fontWeight: '600' },
});
