// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import Ionicons
import { ScrollView, TextInput, TouchableNativeFeedback } from 'react-native-gesture-handler';

interface ServicesScreenProps {
    navigation: any;
}
interface ServicesScreenState {
}


class ServicesScreen extends Component<ServicesScreenProps, ServicesScreenState> {
    // Initialize state with a default value
    constructor(props: ServicesScreenProps) {
        super(props);
        this.state = {
        };

        // this.onNextPress = this.onNextPress.bind(this);
    }

    componentDidMount() {
        // Any logic to run when the component is mounted
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ paddingTop: 15, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, flexDirection: 'row', justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold' }}>Services</Text>
                    </View>
                    <TouchableOpacity>
                        {/* <MaterialIcons
                            name="search"
                            size={25}
                            color={"#225cc7"}
                            style={{}}
                        /> */}
                    </TouchableOpacity>

                </View>


                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ padding: 10, backgroundColor: "#ffe9e4", borderRadius: 10, width: "47%" }}>
                            <View style={{ width: "50%", backgroundColor: "#fff", padding: 15, aspectRatio: 1, borderRadius: 300 }}>
                                <Image
                                    source={require('../assets/images/virtual.png')} // Path to your local image
                                    style={{
                                        width: "100%", // Set width of the image
                                        height: "100%", // Set height of the image
                                        borderRadius: 10
                                    }}
                                />
                            </View>
                            <Text style={{ fontSize: 16, color: "#FF5733", fontWeight: 'bold', marginTop: 10 }}>Virtual{"\n"}Consultation</Text>
                            <Text style={{ fontSize: 14, color: "#666", marginTop: 5, marginBottom: 15 }}>Clarify your doubts via Zoom Meeting</Text>
                            <TouchableNativeFeedback>
                                <View style={{ paddingHorizontal: 15, paddingVertical: 5, backgroundColor: "#FF5733", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, color: "#fff" }}>Book Now</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={{ padding: 10, backgroundColor: "#dbffdb", borderRadius: 10, width: "47%" }}>
                            <View style={{ width: "50%", backgroundColor: "#fff", padding: 15, aspectRatio: 1, borderRadius: 300 }}>
                                <Image
                                    source={require('../assets/images/interview.png')} // Path to your local image
                                    style={{
                                        width: "100%", // Set width of the image
                                        height: "100%", // Set height of the image
                                        borderRadius: 10
                                    }}
                                />
                            </View>
                            <Text style={{ fontSize: 16, color: "#04c204", fontWeight: 'bold', marginTop: 10 }}>In-Person{"\n"}Meeting</Text>
                            <Text style={{ fontSize: 14, color: "#666", marginTop: 5, marginBottom: 15 }}>Visit us for detailed analysis</Text>
                            <TouchableNativeFeedback>
                                <View style={{ paddingHorizontal: 15, paddingVertical: 5, backgroundColor: "#04c204", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, color: "#fff" }}>Book Now</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                        <View style={{ padding: 10, backgroundColor: "#e9f0fb", borderRadius: 10, width: "100%" }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: "20%", backgroundColor: "#fff", padding: 15, aspectRatio: 1, borderRadius: 300 }}>
                                    <Image
                                        source={require('../assets/images/valuation.png')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                            borderRadius: 10
                                        }}
                                    />
                                </View>
                                <View style={{ paddingHorizontal: 10, width: "80%" }}>
                                    <Text style={{ fontSize: 16, color: "#225cc7", fontWeight: 'bold', marginTop: 10 }}>Business Valuation</Text>
                                    <Text style={{ fontSize: 14, color: "#666", marginTop: 5, marginBottom: 25 }}>Get accurate and insightful business valuation to help you understand your company’s true worth</Text>
                                </View>
                            </View>
                            <TouchableNativeFeedback>
                                <View style={{ paddingHorizontal: 15, paddingVertical: 5, backgroundColor: "#225cc7", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, color: "#fff" }}>Book Now</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>

                    <View style={{ width: "100%", height: 50 }}></View>
                </ScrollView>
            </View>
        );
    }
}

export default ServicesScreen;
