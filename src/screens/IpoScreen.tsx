// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import Ionicons
import { ScrollView, TextInput, TouchableNativeFeedback } from 'react-native-gesture-handler';

interface IpoScreenProps {
    navigation: any;
}
interface IpoScreenState {
}


class IpoScreen extends Component<IpoScreenProps, IpoScreenState> {
    // Initialize state with a default value
    constructor(props: IpoScreenProps) {
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
                <View style={{ paddingTop: 15, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold' }}>IPOs</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons
                            name="search"
                            size={25}
                            color={"#225cc7"}
                            style={{}}
                        />
                    </TouchableOpacity>

                </View>

                <View style={{ marginTop: 15, marginBottom: 10, flexDirection:'row' }}>
                    <View style={{ paddingHorizontal: 15, paddingVertical: 5, marginLeft: 10, borderRadius: 10, backgroundColor: '#225cc7', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                        <Text style={{ fontSize: 12, color: "#fff", fontWeight: 'bold' }}>Open</Text>
                    </View>
                    <View style={{ paddingHorizontal: 15, paddingVertical: 5, marginLeft: 10, borderRadius: 10, backgroundColor: '#E5E4E2', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                        <Text style={{ fontSize: 12, color: "#666", fontWeight: 'bold' }}>Upcoming</Text>
                    </View>
                    <View style={{ paddingHorizontal: 15, paddingVertical: 5, marginLeft: 10, borderRadius: 10, backgroundColor: '#E5E4E2', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                        <Text style={{ fontSize: 12, color: "#666", fontWeight: 'bold' }}>Closed</Text>
                    </View>
                    <View style={{ paddingHorizontal: 15, paddingVertical: 5, marginLeft: 10, borderRadius: 10, backgroundColor: '#E5E4E2', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                        <Text style={{ fontSize: 12, color: "#666", fontWeight: 'bold' }}>Announced</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: "100%", padding: 10, }}>
                        <View style={{
                            backgroundColor: 'white',
                            padding: 15,
                            borderRadius: 10,
                            shadowColor: '#000',
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 2 },
                            elevation: 3, // for Android shadow
                            width: '100%',
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "#c3c3c3", aspectRatio: 1 }}>
                                    <Image
                                        source={require('../assets/images/desco.png')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                        }}
                                    />
                                </View>
                                <View style={{ paddingLeft: 10 }}>

                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        color: '#333',
                                    }}>
                                        Desco Infratech IPO
                                    </Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#666',
                                        marginTop: 3
                                    }}>
                                        Desco Infratech Ltd
                                    </Text>
                                </View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Lot Size</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>1,000</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Price Range</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>₹147 - ₹150</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Issue Size</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>30.75Cr</Text>
                                </View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 11, color: "#36454F", fontWeight: 'bold' }}>24 Mar 25 - 26 Mar 25</Text>
                                    </View>
                                </View>

                                <View>
                                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 14, color: "#36454F", fontWeight: 'bold' }}>₹1,47,000</Text>
                                            <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>/1000 shares</Text>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Minimum Investment</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={{ width: "100%", padding: 10, }}>
                        <View style={{
                            backgroundColor: 'white',
                            padding: 15,
                            borderRadius: 10,
                            shadowColor: '#000',
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 2 },
                            elevation: 3, // for Android shadow
                            width: '100%',
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "#c3c3c3", aspectRatio: 1 }}>
                                    <Image
                                        source={require('../assets/images/desco.png')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                        }}
                                    />
                                </View>
                                <View style={{ paddingLeft: 10 }}>

                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        color: '#333',
                                    }}>
                                        Desco Infratech IPO
                                    </Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#666',
                                        marginTop: 3
                                    }}>
                                        Desco Infratech Ltd
                                    </Text>
                                </View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Lot Size</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>1,000</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Price Range</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>₹147 - ₹150</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Issue Size</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>30.75Cr</Text>
                                </View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 11, color: "#36454F", fontWeight: 'bold' }}>24 Mar 25 - 26 Mar 25</Text>
                                    </View>
                                </View>

                                <View>
                                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 14, color: "#36454F", fontWeight: 'bold' }}>₹1,47,000</Text>
                                            <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>/1000 shares</Text>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Minimum Investment</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ width: "100%", padding: 10, }}>
                        <View style={{
                            backgroundColor: 'white',
                            padding: 15,
                            borderRadius: 10,
                            shadowColor: '#000',
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 2 },
                            elevation: 3, // for Android shadow
                            width: '100%',
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "#c3c3c3", aspectRatio: 1 }}>
                                    <Image
                                        source={require('../assets/images/desco.png')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                        }}
                                    />
                                </View>
                                <View style={{ paddingLeft: 10 }}>

                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        color: '#333',
                                    }}>
                                        Desco Infratech IPO
                                    </Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#666',
                                        marginTop: 3
                                    }}>
                                        Desco Infratech Ltd
                                    </Text>
                                </View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Lot Size</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>1,000</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Price Range</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>₹147 - ₹150</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Issue Size</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>30.75Cr</Text>
                                </View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 11, color: "#36454F", fontWeight: 'bold' }}>24 Mar 25 - 26 Mar 25</Text>
                                    </View>
                                </View>

                                <View>
                                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 14, color: "#36454F", fontWeight: 'bold' }}>₹1,47,000</Text>
                                            <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>/1000 shares</Text>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Minimum Investment</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ width: "100%", padding: 10, }}>
                        <View style={{
                            backgroundColor: 'white',
                            padding: 15,
                            borderRadius: 10,
                            shadowColor: '#000',
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 2 },
                            elevation: 3, // for Android shadow
                            width: '100%',
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "#c3c3c3", aspectRatio: 1 }}>
                                    <Image
                                        source={require('../assets/images/desco.png')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                        }}
                                    />
                                </View>
                                <View style={{ paddingLeft: 10 }}>

                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        color: '#333',
                                    }}>
                                        Desco Infratech IPO
                                    </Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#666',
                                        marginTop: 3
                                    }}>
                                        Desco Infratech Ltd
                                    </Text>
                                </View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Lot Size</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>1,000</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Price Range</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>₹147 - ₹150</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Issue Size</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>30.75Cr</Text>
                                </View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 11, color: "#36454F", fontWeight: 'bold' }}>24 Mar 25 - 26 Mar 25</Text>
                                    </View>
                                </View>

                                <View>
                                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 14, color: "#36454F", fontWeight: 'bold' }}>₹1,47,000</Text>
                                            <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>/1000 shares</Text>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Minimum Investment</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ width: "100%", padding: 10, }}>
                        <View style={{
                            backgroundColor: 'white',
                            padding: 15,
                            borderRadius: 10,
                            shadowColor: '#000',
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 2 },
                            elevation: 3, // for Android shadow
                            width: '100%',
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "#c3c3c3", aspectRatio: 1 }}>
                                    <Image
                                        source={require('../assets/images/desco.png')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                        }}
                                    />
                                </View>
                                <View style={{ paddingLeft: 10 }}>

                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        color: '#333',
                                    }}>
                                        Desco Infratech IPO
                                    </Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#666',
                                        marginTop: 3
                                    }}>
                                        Desco Infratech Ltd
                                    </Text>
                                </View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Lot Size</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>1,000</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Price Range</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>₹147 - ₹150</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Issue Size</Text>
                                    <Text style={{ fontSize: 14, color: "#36454F", fontWeight: "500" }}>30.75Cr</Text>
                                </View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 11, color: "#36454F", fontWeight: 'bold' }}>24 Mar 25 - 26 Mar 25</Text>
                                    </View>
                                </View>

                                <View>
                                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 14, color: "#36454F", fontWeight: 'bold' }}>₹1,47,000</Text>
                                            <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>/1000 shares</Text>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 11, color: "#36454F", marginTop: 2 }}>Minimum Investment</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ width: "100%", height: 50 }}></View>
                </ScrollView>
            </View>
        );
    }
}

export default IpoScreen;
