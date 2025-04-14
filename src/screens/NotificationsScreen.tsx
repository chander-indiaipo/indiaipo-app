// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import Ionicons
import { ScrollView, TextInput, TouchableNativeFeedback } from 'react-native-gesture-handler';

interface NotificationsScreenProps {
    navigation: any;
}
interface NotificationsScreenState {
}


class NotificationsScreen extends Component<NotificationsScreenProps, NotificationsScreenState> {
    // Initialize state with a default value
    constructor(props: NotificationsScreenProps) {
        super(props);
        this.state = {
        };

        this.onGoBack = this.onGoBack.bind(this);
    }

    componentDidMount() {
        // Any logic to run when the component is mounted
    }

    onGoBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ paddingTop: 15, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: "space-between" }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.onGoBack}>
                            <MaterialIcons
                                name="arrow-back"
                                size={22}  // Enlarge the icon when focused
                                color={"#36454F"}
                                style={{}}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold', marginLeft: 10 }}>Notifications</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                    <Ionicons
                        name="notifications-circle-outline"
                        size={50}  // Enlarge the icon when focused
                        color={"#225cc7"}
                        style={{}}
                    />
                    <Text style={{ marginTop: 20 }}>We’ll let you know when something pops up!</Text>
                </View>
            </View>
        );
    }
}

export default NotificationsScreen;
