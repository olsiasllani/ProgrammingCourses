import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.replace("MainTabs");
  };

  return (
    <View style={styles.container}>

      {/* Logo + Title */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
        <Text style={styles.title}>Let's Code</Text>
        <Text style={styles.subtitle}>Welcome back!</Text>
      </View>

      {/* Inputs */}
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9aa8b8"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9aa8b8"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Your coding journey starts here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1A2F',  // Same as HomeScreen
    paddingHorizontal: 30,
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
    marginBottom: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#3A82F7',           // Your blue accent
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#A7B1C2',
    marginTop: 5,
  },

  inputBox: {
    backgroundColor: '#112B45',
    borderWidth: 1,
    borderColor: '#1f3f62',
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 15,
  },

  input: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
  },

  button: {
    backgroundColor: '#3A82F7',   // Blue button
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },

  footer: {
    textAlign: 'center',
    color: '#6f88a8',
    marginTop: 30,
    fontSize: 12,
  },
});
