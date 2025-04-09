// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface OtpScreenProps {
    navigation: any;
}
interface OtpScreenState {
}


class OtpScreen extends Component<OtpScreenProps, OtpScreenState> {
    // Initialize state with a default value
    constructor(props: OtpScreenProps) {
        super(props);
        this.state = {
        };

        // Manually bind the onGetStartedPress method to 'this'
        this.onNextPress = this.onNextPress.bind(this);
        this.onGoBack = this.onGoBack.bind(this);
    }

    componentDidMount() {
        // Any logic to run when the component is mounted
    }

    onNextPress() {
        this.props.navigation.navigate("HomeScreen");
    }

    onGoBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                    <TouchableOpacity onPress={this.onGoBack}>
                        <MaterialIcons
                            name="arrow-back"
                            size={22}  // Enlarge the icon when focused
                            color={"#36454F"}
                            style={{}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, color: "#232b2b", fontWeight: 'bold' }}>Verify Phone</Text>
                    <Text style={{ fontSize: 16, color: "#232b2b", marginTop: 5 }}>Code has been sent to +91-9996668882</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: 15, marginTop: 60 }}>
                    <View style={{ width: "20%", height: 60, backgroundColor: "#E5E4E2", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: "#232b2b", fontWeight: 'bold' }}>__</Text>
                    </View>
                    <View style={{ width: "20%", height: 60, backgroundColor: "#E5E4E2", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: "#232b2b", fontWeight: 'bold' }}>__</Text>
                    </View>
                    <View style={{ width: "20%", height: 60, backgroundColor: "#E5E4E2", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: "#232b2b", fontWeight: 'bold' }}>__</Text>
                    </View>
                    <View style={{ width: "20%", height: 60, backgroundColor: "#E5E4E2", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: "#232b2b", fontWeight: 'bold' }}>__</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ color: "#232b2b", fontSize: 14, fontWeight: 'bold' }}>Didn't get OTP Code ?</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ color: "#225cc7", fontSize: 14, fontWeight: 'bold' }}>Resend Code</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center', width: "100%", paddingVertical: 20, position: 'absolute', bottom: 0 }}>
                    <TouchableOpacity onPress={this.onNextPress} style={{ width: '100%' }}>
                        <View style={{ width: '100%', height: 55, backgroundColor: "#225cc7", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#fff" }}>Verify</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default OtpScreen;
