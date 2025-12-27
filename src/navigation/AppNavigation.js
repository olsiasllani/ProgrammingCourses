// AppNavigation.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Main and Other screens
import LoginScreen from '../screens/LoginScreen';   // <-- ADD THIS
import HomeScreen from '../screens/HomeScreen';
import LessonScreen from '../screens/LessonScreen';
import LessonContentScreen from '../screens/LessonContentScreen';
import CompletedLessonsScreen from '../screens/CompletedLessonsScreen';

// Settings screens
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import AboutScreen from '../screens/AboutScreen';
import HelpScreen from '../screens/HelpScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Courses Stack (inside Tabs)
function CoursesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0A1A2F' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/logo.png')}
              style={{ width: 40, height: 40, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text style={{ color: '#3A82F7', fontSize: 20, fontWeight: 'bold' }}>
              Let's Code
            </Text>
          </View>
        ),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LessonScreen" component={LessonScreen} options={{ headerTitle: 'Lessons' }} />
      <Stack.Screen name="LessonContent" component={LessonContentScreen} options={{ headerTitle: 'Lesson' }} />
    </Stack.Navigator>
  );
}

// Settings Stack (inside Tabs)
function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0A1A2F' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="SettingsMain" component={SettingsScreen} options={{ title: 'Settings' }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} options={{ title: 'Notifications' }} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ title: 'About' }} />
      <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ title: 'Help / FAQ' }} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} options={{ title: 'Contact / Feedback' }} />
    </Stack.Navigator>
  );
}

// Tab Navigator (ONLY after login)
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#112B45', height: 65 },
        tabBarActiveTintColor: '#3A82F7',
        tabBarInactiveTintColor: '#A7B1C2',
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Courses') iconName = 'book-outline';
          else if (route.name === 'Completed') iconName = 'checkmark-done-outline';
          else if (route.name === 'Settings') iconName = 'settings-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Courses" component={CoursesStack} />
      <Tab.Screen name="Completed" component={CompletedLessonsScreen} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

// Root Navigation (Login → Main Tabs)
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {/* First screen */}
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* App after login */}
        <Stack.Screen name="MainTabs" component={MainTabs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
