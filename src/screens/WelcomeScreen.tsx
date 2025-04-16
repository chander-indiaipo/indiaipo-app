// src/screens/WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface WelcomeScreenProps {
    navigation: any;
}

interface WelcomeScreenState {
    buttonText: string;
}

class WelcomeScreen extends Component<WelcomeScreenProps, WelcomeScreenState> {
    // Initialize state with a default value
    constructor(props: WelcomeScreenProps) {
        super(props);
        this.state = {
            buttonText: 'Get started',
        };

        // Manually bind the onGetStartedPress method to 'this'
        this.onGetStartedPress = this.onGetStartedPress.bind(this);
    }

    componentDidMount() {
        // Any logic to run when the component is mounted
    }

    onGetStartedPress() {
        this.props.navigation.navigate("PhoneScreen");
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#fff' }}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Image
                        source={require('../assets/images/second_vector.png')} // Path to your local image
                        style={{
                            width: 300, // Set width of the image
                            height: 300, // Set height of the image
                            resizeMode:'contain',
                            marginBottom: 20, // Optional margin
                        }}
                    />
                </View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#36454F' }}>
                    Unlock Knowledge, One{"\n"}Course at a Time
                </Text>

                <View style={{ marginTop: 15, paddingHorizontal: 40 }}>
                    <Text style={{ fontSize: 16, textAlign: 'center', color: '#A9A9A9' }}>
                        Upgrade your IPO skills and stay ahead.
                    </Text>
                </View>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 80, marginBottom: 30 }}>
                    <TouchableOpacity onPress={this.onGetStartedPress} style={{ width: '80%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '100%', height: 55, backgroundColor: '#225cc7', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, color: '#fff' }}>{this.state.buttonText}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default WelcomeScreen;
