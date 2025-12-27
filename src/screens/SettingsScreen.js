// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({ navigation }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const settingsOptions = [
    { id: '1', title: 'Profile', icon: 'person-outline', screen: 'ProfileScreen' },
    { id: '2', title: 'Notifications', icon: 'notifications-outline', screen: 'NotificationsScreen' },
    { id: '3', title: 'Theme', icon: 'color-palette-outline', action: toggleTheme },
    { id: '4', title: 'About', icon: 'information-circle-outline', screen: 'AboutScreen' },
    { id: '5', title: 'Help / FAQ', icon: 'help-circle-outline', screen: 'HelpScreen' },
    { id: '6', title: 'Contact / Feedback', icon: 'chatbubble-ellipses-outline', screen: 'ContactScreen' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <Text style={styles.title}>Settings</Text>

      {settingsOptions.map(option => (
        <TouchableOpacity
          key={option.id}
          style={styles.optionCard}
          activeOpacity={0.8}
          onPress={() => {
            if (option.screen) {
              navigation.navigate(option.screen);
            } else if (option.action) {
              option.action();
            }
          }}
        >
          <Ionicons
            name={option.icon}
            size={24}
            color="#3A82F7"
            style={{ marginRight: 16, textShadowColor: '#3A82F7', textShadowRadius: 6 }}
          />
          <Text style={styles.optionText}>{option.title}</Text>
          {option.id === '3' && (
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              thumbColor={isDarkMode ? '#3A82F7' : '#ccc'}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              style={{ marginLeft: 'auto' }}
            />
          )}
          {option.id !== '3' && (
            <Ionicons name="chevron-forward-outline" size={20} color="#3A82F7" style={{ marginLeft: 'auto' }} />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1A2F',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3A82F7',
    marginBottom: 24,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(18,43,69,0.5)',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    shadowColor: '#3A82F7',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
