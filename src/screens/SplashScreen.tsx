// SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        // Simulating a delay for splash screen to show for 2 seconds
        setTimeout(() => {
            navigation.replace('WelcomeScreen');
        }, 2000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logo_black.png')} // Path to your local image
                style={{
                    width: 100, // Set width of the image
                    height: 100, // Set height of the image
                    marginBottom: 20, // Optional margin
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SplashScreen;
