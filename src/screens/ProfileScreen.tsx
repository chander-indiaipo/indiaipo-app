// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import Ionicons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Ionicons
import { ScrollView, TextInput, TouchableNativeFeedback } from 'react-native-gesture-handler';

interface ProfileScreenProps {
    navigation: any;
}
interface ProfileScreenState {
}


class ProfileScreen extends Component<ProfileScreenProps, ProfileScreenState> {
    // Initialize state with a default value
    constructor(props: ProfileScreenProps) {
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
                <View style={{ paddingVertical: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: "space-between", elevation: 5, backgroundColor: '#fff' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.onGoBack}>
                            <MaterialIcons
                                name="arrow-back"
                                size={22}  // Enlarge the icon when focused
                                color={"#36454F"}
                                style={{}}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold', marginLeft: 10 }}>Profile</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons
                            name="edit"
                            size={25}
                            color={"#225cc7"}
                            style={{}}
                        />
                    </TouchableOpacity>

                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ width: 100, aspectRatio: 1, borderRadius: 300, padding: 3, borderWidth: 1, borderColor: "#c3c3c3", alignSelf: 'center', marginTop: 40 }}>
                        <Image
                            source={require('../assets/images/profile.png')} // Path to your local image
                            style={{
                                width: "100%", // Set width of the image
                                height: "100%", // Set height of the image
                                borderRadius: 300
                            }}
                        />
                    </View>

                    <View style={{ alignSlef: 'center', width: "100%", justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold', alignSelf: 'center', marginTop: 10 }}>Chander Mohan</Text>
                        {/* <Text style={{ fontSize: 14, color: "#666" }}>mchander20@gmail.com</Text> */}
                    </View>

                    <View style={{ paddingLeft: 10, justifyContent: 'flex-start', alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 300, backgroundColor: "#e9f0fb", justifyContent: 'center', alignSelf: 'center' }}>
                            <MaterialIcons
                                name="phone"
                                size={22}  // Enlarge the icon when focused
                                color={"#36454F"}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                        <View style={{ paddingLeft: 20 }}>
                            <Text style={{ fontSize: 14, color: "#666" }}>Phone</Text>
                            <Text style={{ fontSize: 16, color: "#36454F", fontWeight: '500' }}>8572005698</Text>
                        </View>
                    </View>

                    <View style={{ paddingLeft: 10, justifyContent: 'flex-start', alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 300, backgroundColor: "#e9f0fb", justifyContent: 'center', alignSelf: 'center' }}>
                            <MaterialIcons
                                name="email"
                                size={22}  // Enlarge the icon when focused
                                color={"#36454F"}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                        <View style={{ paddingLeft: 20 }}>
                            <Text style={{ fontSize: 14, color: "#666" }}>Email</Text>
                            <Text style={{ fontSize: 16, color: "#36454F", fontWeight: '500' }}>mchander20@gmail.com</Text>
                        </View>
                    </View>

                    <View style={{ paddingLeft: 10, justifyContent: 'flex-start', alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 300, backgroundColor: "#e9f0fb", justifyContent: 'center', alignSelf: 'center' }}>
                            <MaterialCommunityIcons
                                name="gender-male"
                                size={22}  // Enlarge the icon when focused
                                color={"#36454F"}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                        <View style={{ paddingLeft: 20 }}>
                            <Text style={{ fontSize: 14, color: "#666" }}>Gender</Text>
                            <Text style={{ fontSize: 16, color: "#36454F", fontWeight: '500' }}>Male</Text>
                        </View>
                    </View>

                    <View style={{ paddingLeft: 10, justifyContent: 'flex-start', alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 300, backgroundColor: "#e9f0fb", justifyContent: 'center', alignSelf: 'center' }}>
                            <MaterialCommunityIcons
                                name="home-city"
                                size={22}  // Enlarge the icon when focused
                                color={"#36454F"}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                        <View style={{ paddingLeft: 20 }}>
                            <Text style={{ fontSize: 14, color: "#666" }}>City</Text>
                            <Text style={{ fontSize: 16, color: "#36454F", fontWeight: '500' }}>Yamuna Nagar</Text>
                        </View>
                    </View>

                    <View style={{ paddingLeft: 10, justifyContent: 'flex-start', alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 300, backgroundColor: "#e9f0fb", justifyContent: 'center', alignSelf: 'center' }}>
                            <MaterialCommunityIcons
                                name="city"
                                size={22}  // Enlarge the icon when focused
                                color={"#36454F"}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                        <View style={{ paddingLeft: 20 }}>
                            <Text style={{ fontSize: 14, color: "#666" }}>State</Text>
                            <Text style={{ fontSize: 16, color: "#36454F", fontWeight: '500' }}>Haryana</Text>
                        </View>
                    </View>

                    <View style={{ width: "100%", height: 50 }}></View>
                </ScrollView>
            </View>
        );
    }
}

export default ProfileScreen;
