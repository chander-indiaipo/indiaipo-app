// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen'; // Import the SplashScreen
import WelcomeScreen from '../screens/WelcomeScreen'; // Import the WelcomeScreen
import PhoneScreen from '../screens/PhoneScreen';
import OtpScreen from '../screens/OtpScreen';
import HomeScreen from '../screens/HomeScreen';
import NewsDetailScreen from '../screens/NewsDetail';

// Define the type for route parameters
export type RootStackParamList = {
  SplashScreen: undefined;
  WelcomeScreen: { userName: string }; 
  PhoneScreen: undefined; 
  OtpScreen: undefined; 
  HomeScreen: undefined; 
  NewsDetailScreen: undefined; 
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
    </Stack.Navigator>
  );
};

export default AppNavigator;
