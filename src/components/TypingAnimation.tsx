import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export const TypingAnimation = () => {
    return (
        <View style={styles.container}>
            {[0, 1, 2].map(index => (
                <AnimatedDot key={index} delay={index * 200} />
            ))}
        </View>
    );
};

const AnimatedDot = ({ delay }: { delay: number }) => {
    const scale = new Animated.Value(1);

    Animated.loop(
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 1.4,
                duration: 300,
                delay,
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ])
    ).start();

    return <Animated.View style={[styles.dot, { transform: [{ scale }] }]} />;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#999',
        marginHorizontal: 3,
    },
});
