import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/icons.jpg')} // Placeholder avatar
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>Olsi Asllani</Text>
          <Text style={styles.email}>olsiasllani@example.com</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0A1A2F' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  avatar: { width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: '#3A82F7' },
  userInfo: { marginLeft: 16 },
  name: { fontSize: 24, fontWeight: '700', color: '#3A82F7' },
  email: { fontSize: 16, color: '#D4D7DD', marginTop: 4 },
  editButton: {
    backgroundColor: '#3A82F7',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#3A82F7',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  editButtonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
