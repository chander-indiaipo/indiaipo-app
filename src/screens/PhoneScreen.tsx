// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface PhoneScreenProps {
    navigation: any;
}
interface PhoneScreenState {
}


class PhoneScreen extends Component<PhoneScreenProps, PhoneScreenState> {
    // Initialize state with a default value
    constructor(props: PhoneScreenProps) {
        super(props);
        this.state = {
        };

        // Manually bind the onGetStartedPress method to 'this'
        this.onNextPress = this.onNextPress.bind(this);
    }

    componentDidMount() {
        // Any logic to run when the component is mounted
    }

    onNextPress() {
        this.props.navigation.navigate("OtpScreen");
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ marginTop: 50, paddingLeft: 15 }}>
                    <Image
                        source={require('../assets/images/logo_black.png')} // Path to your local image
                        style={{
                            width: 60, // Set width of the image
                            height: 60, // Set height of the image
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 25 }}>
                    <Text style={{ fontSize: 22, color: "#232b2b", fontWeight: 'bold' }}>Hi! Welcome to India IPO</Text>
                    <Text style={{ fontSize: 16, color: "#A9A9A9", marginTop: 5 }}>Let's get started by entering your phone number.</Text>
                </View>

                <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginTop: 50 }}>
                    <View style={{ width: "25%", backgroundColor: "#E5E4E2", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: "#1a1a1a", fontWeight: 'bold' }}>+91</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10, width: "75%" }}>
                        <TextInput
                            // value={text}
                            // onChangeText={setText}
                            placeholder="Phone Number"
                            keyboardType='phone-pad'
                            maxLength={10}
                            placeholderTextColor="#A9A9A9" // Color for the placeholder text
                            style={{
                                backgroundColor: "#E5E4E2",
                                borderRadius: 10,
                                fontWeight: "bold",
                                fontSize: 18,
                                paddingLeft: 15
                            }}
                            // This will change the border color when the input is focused
                            onFocus={() => {
                            }}
                            onBlur={() => {
                            }}
                        />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                    <Text style={{ fontSize: 14, color: "#A9A9A9", marginTop: 5 }}>Securing your personal information is our priority</Text>
                </View>

                <View style={{ paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center', width: "100%", paddingVertical: 20, position: 'absolute', bottom: 0 }}>
                    <TouchableOpacity onPress={this.onNextPress} style={{ width: '100%' }}>
                        <View style={{ width: '100%', height: 55, backgroundColor: "#225cc7", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#fff" }}>Next</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default PhoneScreen;
