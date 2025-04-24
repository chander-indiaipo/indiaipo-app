// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen'; // Import the SplashScreen
import WelcomeScreen from '../screens/WelcomeScreen'; // Import the WelcomeScreen
import PhoneScreen from '../screens/PhoneScreen';
import OtpScreen from '../screens/OtpScreen';
import HomeScreen from '../screens/HomeScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import IpoScreen from '../screens/IpoScreen';
import MagazineScreen from '../screens/MagazineScreen';
import VideoScreen from '../screens/VideoScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ServiceDetailScreen from '../screens/ServiceDetailScreen';
import IpoEligibilityScreen from '../screens/IpoEligibilityScreen';
import ChatbotScreen from '../screens/ChatbotScreen';
import FaqScreen from '../screens/FaqScreen';

// Define the type for route parameters
export type RootStackParamList = {
  SplashScreen: undefined;
  WelcomeScreen: { userName: string }; 
  PhoneScreen: undefined; 
  OtpScreen: undefined; 
  HomeScreen: undefined; 
  NewsDetailScreen: undefined; 
  IpoScreen: undefined; 
  MagazineScreen: undefined; 
  VideoScreen: undefined; 
  NotificationsScreen: undefined; 
  ProfileScreen: undefined; 
  ServiceDetailScreen: undefined; 
  IpoEligibilityScreen: undefined; 
  ChatbotScreen: undefined; 
  FaqScreen: undefined; 
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      {/* Splash Screen */}
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }} // Hide header on SplashScreen
      />

      {/* Welcome Screen */}
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }} // Hide header on WelcomeScreen
        // initialParams={{ userName: 'abc' }} // Example of passing parameters
      />
      <Stack.Screen
        name="PhoneScreen"
        component={PhoneScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsDetailScreen"
        component={NewsDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IpoScreen"
        component={IpoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MagazineScreen"
        component={MagazineScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ServiceDetailScreen"
        component={ServiceDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IpoEligibilityScreen"
        component={IpoEligibilityScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatbotScreen"
        component={ChatbotScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FaqScreen"
        component={FaqScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
