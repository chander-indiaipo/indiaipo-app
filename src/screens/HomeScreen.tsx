import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from './DashboardScreen';
import MiscScreen from './MiscScreen';
import SettingsScreen from './SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OtpScreen from './OtpScreen';
import PhoneScreen from './PhoneScreen';
import NewsScreen from './NewsScreen';
import IpoScreen from './IpoScreen';
import ServicesScreen from './ServicesScreen';
import LearnScreen from './LearnScreen';

const Tab = createBottomTabNavigator();

class HomeScreen extends Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#225cc7", // Color for active tab (blue)
                    tabBarInactiveTintColor: "#757575", // Color for inactive tab (gray)
                    tabBarLabelStyle: { fontSize: 11 }, // Optional: adjust label font size
                    tabBarStyle: {
                        // paddingTop: 10,    // Add vertical padding at the top
                        // paddingBottom: 10, // Add vertical padding at the bottom
                        height: 50,
                    }
                }}
            >
                <Tab.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons
                                name="home-outline"
                                size={focused ? 20 : 18}  // Enlarge the icon when focused
                                color={color}
                                style={{
                                    transform: [{ scale: focused ? 1.1 : 1 }] // Apply scale effect when focused
                                }}
                            />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Services"
                    component={ServicesScreen}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <MaterialIcons
                                name="workspace-premium"
                                size={focused ? 20 : 18}  // Enlarge the icon when focused
                                color={color}
                                style={{
                                    transform: [{ scale: focused ? 1.1 : 1 }] // Apply scale effect when focused
                                }}
                            />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Learn"
                    component={LearnScreen}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons
                                name="book-outline"
                                size={focused ? 20 : 18}  // Enlarge the icon when focused
                                color={color}
                                style={{
                                    transform: [{ scale: focused ? 1.1 : 1 }] // Apply scale effect when focused
                                }}
                            />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="News"
                    component={NewsScreen}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <FontAwesome
                                name="newspaper-o"
                                size={focused ? 20 : 18}  // Enlarge the icon when focused
                                color={color}
                                style={{
                                    transform: [{ scale: focused ? 1.1 : 1 }] // Apply scale effect when focused
                                }}
                            />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="More"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <MaterialIcons
                                name="more-horiz"
                                size={focused ? 20 : 18}  // Enlarge the icon when focused
                                color={color}
                                style={{
                                    transform: [{ scale: focused ? 1.1 : 1 }] // Apply scale effect when focused
                                }}
                            />
                        ),
                        headerShown: false,
                    }}
                />

            </Tab.Navigator>
        );
    }
}

export default HomeScreen;
