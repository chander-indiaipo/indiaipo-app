// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Ionicons
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import Ionicons
import { ScrollView, TextInput, TouchableNativeFeedback } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';

interface DashboardScreenProps {
    navigation: any;
}
interface DashboardScreenState {
}


class DashboardScreen extends Component<DashboardScreenProps, DashboardScreenState> {
    // Initialize state with a default value
    constructor(props: DashboardScreenProps) {
        super(props);
        this.state = {
        };

        this.onReadMorePress = this.onReadMorePress.bind(this);
        this.onViewAllPress = this.onViewAllPress.bind(this);
        this.onNewsPress = this.onNewsPress.bind(this);
    }

    componentDidMount() {
        // Any logic to run when the component is mounted
        // const res = await axios.get('https://fake-json-api.mock.beeceptor.com/users');
        // console.log(res.data);
    }

    onReadMorePress() {
        this.props.navigation.navigate("News");
    }

    onViewAllPress() {
        this.props.navigation.navigate("IPO");
    }

    onNewsPress() {
        this.props.navigation.navigate("NewsDetailScreen");
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ paddingTop: 15, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: "space-between", elevation: 10, backgroundColor: "#fff" }}>
                    <View>
                        <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold' }}>Hi, Chander!</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <TouchableOpacity>
                                <Ionicons
                                    name="notifications-outline"
                                    size={22}  // Enlarge the icon when focused
                                    color={"#36454F"}
                                    style={{}}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 15 }}>
                            <TouchableOpacity>
                                <View style={{ width: 25, aspectRatio: 1, borderRadius: 300 }}>
                                    <Image
                                        source={require('../assets/images/profile.png')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                            borderRadius: 300
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ width: "100%", marginTop: 2 }}>
                    <TouchableNativeFeedback style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: "100%", flexDirection: 'row', paddingVertical: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: "#225cc7", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 14, color: "#fff" }}>Check your IPO eligibility</Text>
                            <AntDesign
                                name="rightcircleo"
                                size={14}  // Enlarge the icon when focused
                                color={"#fff"}
                                style={{ marginLeft: 10 }}
                            />
                        </View>
                    </TouchableNativeFeedback>
                </View>

                {/* <View style={{ width: "100%", paddingHorizontal: 10, marginTop: 20 }}>
                    <View style={{ width: "100%", padding: 10, }}>
                        <View style={{
                            backgroundColor: 'white',
                            padding: 10,
                            borderRadius: 10,
                            shadowColor: '#000',
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 2 },
                            elevation: 3, // for Android shadow
                            width: '100%',
                            flexDirection: 'row', justifyContent: 'space-evenly'
                        }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: "#36454F", fontWeight: 'bold' }}>NIFTY 50</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 17, color: "#50C878", fontWeight: 'bold', paddingVertical: 3 }}>12345.56</Text>
                                    <MaterialIcons
                                        name="arrow-drop-up"
                                        size={22}
                                        color={"#50C878"}
                                        style={{}}
                                    />
                                </View>
                                <Text style={{ fontSize: 13, color: "#36454F", fontWeight: 'bold' }}>+123.45 (0.10%)</Text>
                            </View>
                            <View style={{ width: 1, height: "100%", backgroundColor: "#c3c3c3" }}></View>
                            <View style={{ paddingLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: "#36454F", fontWeight: 'bold' }}>SENSEX</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 17, color: "#D22B2B", fontWeight: 'bold', paddingVertical: 3 }}>14587.12</Text>
                                    <MaterialIcons
                                        name="arrow-drop-down"
                                        size={22}
                                        color={"#D22B2B"}
                                        style={{}}
                                    />
                                </View>
                                <Text style={{ fontSize: 13, color: "#36454F", fontWeight: 'bold' }}>-245.12 (-1.41%)</Text>
                            </View>
                        </View>
                    </View>
                </View> */}

                <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#36454F" }}>Our Services</Text>
                </View>

                <View style={{ width: "100%", paddingHorizontal: 10, marginTop: 10 }}>
                    <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '47%', borderRadius: 10 }}>
                            <TouchableNativeFeedback
                            // onPress={() => console.log('Pressed')}
                            // background={TouchableNativeFeedback.Ripple('#fff', false)}
                            >
                                <View style={{
                                    backgroundColor: '#e9f0fb',
                                    padding: 10,
                                    borderRadius: 10,
                                    shadowColor: '#000',
                                    shadowOpacity: 0.1,
                                    shadowRadius: 5,
                                    shadowOffset: { width: 0, height: 2 },
                                    elevation: 3,
                                    width: '100%',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#225cc7' }}>
                                        Initial Public{"\n"}Offering
                                    </Text>
                                    <View style={{ width: "30%", height: "100%", backgroundColor: "#fff", position: 'absolute', justifyContent: 'center', alignItems: 'center', bottom: 0, right: 0, borderBottomRightRadius: 10, borderTopLeftRadius: 10 }}>
                                        <View style={{ width: "60%", aspectRatio: 1, }}>
                                            <Image
                                                source={require('../assets/images/ipo.png')} // Path to your local image
                                                style={{
                                                    width: "100%", // Set width of the image
                                                    height: "100%", // Set height of the image
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                        <View style={{ width: '47%', borderRadius: 10 }}>
                            <TouchableNativeFeedback
                            // onPress={() => console.log('Pressed')}
                            // background={TouchableNativeFeedback.Ripple('#fff', false)}
                            >
                                <View style={{
                                    backgroundColor: '#e9f0fb',
                                    padding: 10,
                                    borderRadius: 10,
                                    shadowColor: '#000',
                                    shadowOpacity: 0.1,
                                    shadowRadius: 5,
                                    shadowOffset: { width: 0, height: 2 },
                                    elevation: 3,
                                    width: '100%',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#225cc7' }}>
                                        Private{"\n"}Placement
                                    </Text>
                                    <View style={{ width: "30%", height: "100%", justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff", position: 'absolute', bottom: 0, right: 0, borderBottomRightRadius: 10, borderTopLeftRadius: 10 }}>
                                        <View style={{ width: "60%", aspectRatio: 1, }}>
                                            <Image
                                                source={require('../assets/images/private-placement.png')} // Path to your local image
                                                style={{
                                                    width: "100%", // Set width of the image
                                                    height: "100%", // Set height of the image
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>

                    <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ width: '47%', borderRadius: 10 }}>
                            <TouchableNativeFeedback
                            // onPress={() => console.log('Pressed')}
                            // background={TouchableNativeFeedback.Ripple('#fff', false)}
                            >
                                <View style={{
                                    backgroundColor: '#e9f0fb',
                                    padding: 10,
                                    borderRadius: 10,
                                    shadowColor: '#000',
                                    shadowOpacity: 0.1,
                                    shadowRadius: 5,
                                    shadowOffset: { width: 0, height: 2 },
                                    elevation: 3,
                                    width: '100%',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#225cc7' }}>
                                        Corporate{"\n"}Finance
                                    </Text>
                                    <View style={{ width: "30%", height: "100%", justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff", position: 'absolute', bottom: 0, right: 0, borderBottomRightRadius: 10, borderTopLeftRadius: 10 }}>
                                        <View style={{ width: "60%", aspectRatio: 1, }}>
                                            <Image
                                                source={require('../assets/images/debt.png')} // Path to your local image
                                                style={{
                                                    width: "100%", // Set width of the image
                                                    height: "100%", // Set height of the image
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                        <View style={{ width: '47%', borderRadius: 10 }}>
                            <TouchableNativeFeedback
                            // onPress={() => console.log('Pressed')}
                            // background={TouchableNativeFeedback.Ripple('#fff', false)}
                            >
                                <View style={{
                                    backgroundColor: '#e9f0fb',
                                    padding: 10,
                                    borderRadius: 10,
                                    shadowColor: '#000',
                                    shadowOpacity: 0.1,
                                    shadowRadius: 5,
                                    shadowOffset: { width: 0, height: 2 },
                                    elevation: 3,
                                    width: '100%',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#225cc7' }}>
                                        More{"\n"}Services
                                    </Text>
                                    <View style={{ width: "30%", height: "100%", justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff", position: 'absolute', bottom: 0, right: 0, borderBottomRightRadius: 10, borderTopLeftRadius: 10 }}>
                                        <View style={{ width: "60%", aspectRatio: 1, }}>
                                            <Image
                                                source={require('../assets/images/other.png')} // Path to your local image
                                                style={{
                                                    width: "100%", // Set width of the image
                                                    height: "100%", // Set height of the image
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#36454F" }}>Learn with us</Text>
                </View>
                <ScrollView horizontal={true} style={{ width: "100%", marginTop: 10 }}>
                    <View style={{ paddingLeft: 10, flexDirection: 'row', paddingVertical: 2 }}>
                        <TouchableOpacity>
                            <View style={{ width: 87, aspectRatio: 0.5625 }}>
                                <Image
                                    source={require('../assets/images/phonepe.png')} // Path to your local image
                                    style={{
                                        width: "100%", // Set width of the image
                                        height: "100%", // Set height of the image
                                        borderRadius: 10
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                                <Image
                                    source={require('../assets/images/gaming.png')} // Path to your local image
                                    style={{
                                        width: "100%", // Set width of the image
                                        height: "100%", // Set height of the image
                                        borderRadius: 10
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                                <Image
                                    source={require('../assets/images/aten.jpg')} // Path to your local image
                                    style={{
                                        width: "100%", // Set width of the image
                                        height: "100%", // Set height of the image
                                        borderRadius: 10
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                                <Image
                                    source={require('../assets/images/revolution.png')} // Path to your local image
                                    style={{
                                        width: "100%", // Set width of the image
                                        height: "100%", // Set height of the image
                                        borderRadius: 10
                                    }}
                                />
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity>


                            <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                                <Image
                                    source={require('../assets/images/physics.png')} // Path to your local image
                                    style={{
                                        width: "100%", // Set width of the image
                                        height: "100%", // Set height of the image
                                        borderRadius: 10
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableNativeFeedback>

                            <View style={{
                                width: 87, aspectRatio: 0.5625, marginLeft: 10, backgroundColor: "#fff", borderRadius: 10, shadowColor: '#000',
                                shadowOpacity: 0.1,
                                shadowRadius: 5,
                                shadowOffset: { width: 0, height: 2 },
                                elevation: 3,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>

                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Ionicons
                                        name="arrow-forward-circle-outline"
                                        size={22}  // Enlarge the icon when focused
                                        color={"#225cc7"}
                                        style={{}}
                                    />
                                    <Text style={{ color: "#225cc7", fontSize: 14 }}>More</Text>
                                </View>

                            </View>
                        </TouchableNativeFeedback>

                        <View style={{ width: 15 }}>

                        </View>



                    </View>
                </ScrollView>
                <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#36454F" }}>Exclusive Content</Text>
                </View>
                <ScrollView horizontal={true} style={{ width: "100%", marginTop: 10 }}>
                    <View style={{ paddingLeft: 10, flexDirection: 'row', paddingVertical: 2 }}>
                        <TouchableOpacity>
                            <View style={{ width: 87, aspectRatio: 0.5625 }}>
                                <Image
                                    source={require('../assets/images/phonepe.png')} // Path to your local image
                                    style={{
                                        width: "100%", // Set width of the image
                                        height: "100%", // Set height of the image
                                        borderRadius: 10
                                    }}
                                />
                                <View style={{ width: "100%", height: "100%", backgroundColor: "#000", position: 'absolute', borderRadius: 10, opacity: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                                    <MaterialCommunityIcons
                                        name="lock-outline"
                                        size={22}  // Enlarge the icon when focused
                                        color={"#fff"}
                                        style={{}}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                            <Image
                                source={require('../assets/images/gaming.png')} // Path to your local image
                                style={{
                                    width: "100%", // Set width of the image
                                    height: "100%", // Set height of the image
                                    borderRadius: 10
                                }}
                            />
                            <View style={{ width: "100%", height: "100%", backgroundColor: "#000", position: 'absolute', borderRadius: 10, opacity: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons
                                    name="lock-outline"
                                    size={22}  // Enlarge the icon when focused
                                    color={"#fff"}
                                    style={{}}
                                />
                            </View>
                        </View>

                        <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                            <Image
                                source={require('../assets/images/aten.jpg')} // Path to your local image
                                style={{
                                    width: "100%", // Set width of the image
                                    height: "100%", // Set height of the image
                                    borderRadius: 10
                                }}
                            />
                            <View style={{ width: "100%", height: "100%", backgroundColor: "#000", position: 'absolute', borderRadius: 10, opacity: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons
                                    name="lock-outline"
                                    size={22}  // Enlarge the icon when focused
                                    color={"#fff"}
                                    style={{}}
                                />
                            </View>
                        </View>

                        <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                            <Image
                                source={require('../assets/images/revolution.png')} // Path to your local image
                                style={{
                                    width: "100%", // Set width of the image
                                    height: "100%", // Set height of the image
                                    borderRadius: 10
                                }}
                            />
                            <View style={{ width: "100%", height: "100%", backgroundColor: "#000", position: 'absolute', borderRadius: 10, opacity: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons
                                    name="lock-outline"
                                    size={22}  // Enlarge the icon when focused
                                    color={"#fff"}
                                    style={{}}
                                />
                            </View>
                        </View>

                        <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                            <Image
                                source={require('../assets/images/physics.png')} // Path to your local image
                                style={{
                                    width: "100%", // Set width of the image
                                    height: "100%", // Set height of the image
                                    borderRadius: 10
                                }}
                            />
                            <View style={{ width: "100%", height: "100%", backgroundColor: "#000", position: 'absolute', borderRadius: 10, opacity: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons
                                    name="lock-outline"
                                    size={22}  // Enlarge the icon when focused
                                    color={"#fff"}
                                    style={{}}
                                />
                            </View>
                        </View>

                        <View style={{
                            width: 87, aspectRatio: 0.5625, marginLeft: 10, backgroundColor: "#fff", borderRadius: 10, shadowColor: '#000',
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 2 },
                            elevation: 3,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Ionicons
                                    name="arrow-forward-circle-outline"
                                    size={22}  // Enlarge the icon when focused
                                    color={"#225cc7"}
                                    style={{}}
                                />
                                <Text style={{ color: "#225cc7", fontSize: 14 }}>More</Text>
                            </View>

                        </View>
                        <View style={{ width: 15 }}>

                        </View>



                    </View>
                </ScrollView>
                <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#36454F" }}>About Us</Text>
                </View>
                <View style={{ width: "100%", marginTop: 10,paddingHorizontal:10,borderRadius:10 }}>
                    <YoutubePlayer
                        height={200}
                        play={false}
                        style={{borderRadius:10}}
                        videoId={'6gE4oTeJmxY'} // Extracted from the YouTube URL
                    />
                </View>

                {/* <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '450', color: "#36454F" }}>Upcoming IPOs</Text>
                    <TouchableOpacity onPress={null}>
                        <Text style={{ fontSize: 14, fontWeight: '450', color: "#225cc7" }}>View All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "100%", padding: 10, }}>
                    <TouchableNativeFeedback>
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
                    </TouchableNativeFeedback>
                </View> */}
                <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '450', color: "#36454F" }}>Latest News</Text>
                </View>
                <TouchableNativeFeedback onPress={this.onNewsPress}>
                    <View style={{ width: "100%", flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10 }}>
                        <View style={{ width: "25%", padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "#c3c3c3", aspectRatio: 1 }}>
                            <Image
                                source={require('../assets/images/news.png')} // Path to your local image
                                style={{
                                    width: "100%", // Set width of the image
                                    height: "100%", // Set height of the image
                                    borderRadius: 10
                                }}
                            />
                        </View>
                        <View style={{ width: "75%", flexDirection: 'column', paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ fontSize: 12, color: '#666', }}>Time of India - 3 hours ago</Text>
                            <Text style={{ fontSize: 14, color: '#333', fontWeight: 'bold', marginTop: 3 }}>BSE Sensex rallies over 1,000 points as markets rebound after crash</Text>
                            <View style={{ paddingVertical: 5, paddingHorizontal: 15, marginTop: 5, backgroundColor: "#E5E4E2", alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start', borderRadius: 10 }}>
                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#225cc7' }}>Business</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "85%", alignSelf: 'center', backgroundColor: "#E5E4E2", height: 1 }}></View>
                </TouchableNativeFeedback>

                <View>
                    <View style={{ width: "100%", flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10 }}>
                        <View style={{ width: "25%", padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "#c3c3c3", aspectRatio: 1 }}>
                            <Image
                                source={require('../assets/images/newst.png')} // Path to your local image
                                style={{
                                    width: "100%", // Set width of the image
                                    height: "100%", // Set height of the image
                                    borderRadius: 10
                                }}
                            />
                        </View>
                        <View style={{ width: "75%", flexDirection: 'column', paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ fontSize: 12, color: '#666', }}>The Mint - 6 hours ago</Text>
                            <Text style={{ fontSize: 14, color: '#333', fontWeight: 'bold', marginTop: 3 }}>As IPOs Falter, investors lean on M&As and private deals for exit</Text>
                            <View style={{ paddingVertical: 5, paddingHorizontal: 15, marginTop: 5, backgroundColor: "#E5E4E2", alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start', borderRadius: 10 }}>
                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#FF5733' }}>Finance</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "85%", alignSelf: 'center', backgroundColor: "#E5E4E2", height: 1 }}></View>
                </View>

                <View>
                    <View style={{ width: "100%", flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10 }}>
                        <View style={{ width: "25%", padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "#c3c3c3", aspectRatio: 1 }}>
                            <Image
                                source={require('../assets/images/desco.png')} // Path to your local image
                                style={{
                                    width: "100%", // Set width of the image
                                    height: "100%", // Set height of the image
                                }}
                            />
                        </View>
                        <View style={{ width: "75%", flexDirection: 'column', paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ fontSize: 12, color: '#666', }}>Business Today - 1 day ago</Text>
                            <Text style={{ fontSize: 14, color: '#333', fontWeight: 'bold', marginTop: 3 }}>Desco Infratech hits the roof on bagging LoA from BPCL worth Rs 12-cr</Text>
                            <View style={{ paddingVertical: 5, paddingHorizontal: 15, marginTop: 5, backgroundColor: "#E5E4E2", alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start', borderRadius: 10 }}>
                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#225cc7' }}>Business</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "85%", alignSelf: 'center', backgroundColor: "#E5E4E2", height: 1 }}></View>
                </View>

                <View>
                    <View style={{ width: "100%", flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10 }}>
                        <View style={{ width: "25%", padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "#c3c3c3", aspectRatio: 1 }}>
                            <Image
                                source={require('../assets/images/news.png')} // Path to your local image
                                style={{
                                    width: "100%", // Set width of the image
                                    height: "100%", // Set height of the image
                                    borderRadius: 10
                                }}
                            />
                        </View>
                        <View style={{ width: "75%", flexDirection: 'column', paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ fontSize: 12, color: '#666', }}>Time of India - 3 hours ago</Text>
                            <Text style={{ fontSize: 14, color: '#333', fontWeight: 'bold', marginTop: 3 }}>BSE Sensex rallies over 1,000 points as markets rebound after crash</Text>
                            <View style={{ paddingVertical: 5, paddingHorizontal: 15, marginTop: 5, backgroundColor: "#E5E4E2", alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start', borderRadius: 10 }}>
                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#225cc7' }}>Business</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "85%", alignSelf: 'center', backgroundColor: "#E5E4E2", height: 1 }}></View>
                </View>

                <View>
                    <View style={{ width: "100%", flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10 }}>
                        <View style={{ width: "25%", padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "#c3c3c3", aspectRatio: 1 }}>
                            <Image
                                source={require('../assets/images/newst.png')} // Path to your local image
                                style={{
                                    width: "100%", // Set width of the image
                                    height: "100%", // Set height of the image
                                    borderRadius: 10
                                }}
                            />
                        </View>
                        <View style={{ width: "75%", flexDirection: 'column', paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ fontSize: 12, color: '#666', }}>The Mint - 6 hours ago</Text>
                            <Text style={{ fontSize: 14, color: '#333', fontWeight: 'bold', marginTop: 3 }}>As IPOs Falter, investors lean on M&As and private deals for exit</Text>
                            <View style={{ paddingVertical: 5, paddingHorizontal: 15, marginTop: 5, backgroundColor: "#E5E4E2", alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start', borderRadius: 10 }}>
                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#FF5733' }}>Finance</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "85%", alignSelf: 'center', backgroundColor: "#E5E4E2", height: 1 }}></View>
                </View>

                <View>
                    <View style={{ width: "100%", flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10 }}>
                        <View style={{ width: "25%", padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "#c3c3c3", aspectRatio: 1 }}>
                            <Image
                                source={require('../assets/images/desco.png')} // Path to your local image
                                style={{
                                    width: "100%", // Set width of the image
                                    height: "100%", // Set height of the image
                                }}
                            />
                        </View>
                        <View style={{ width: "75%", flexDirection: 'column', paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ fontSize: 12, color: '#666', }}>Business Today - 1 day ago</Text>
                            <Text style={{ fontSize: 14, color: '#333', fontWeight: 'bold', marginTop: 3 }}>Desco Infratech hits the roof on bagging LoA from BPCL worth Rs 12-cr</Text>
                            <View style={{ paddingVertical: 5, paddingHorizontal: 15, marginTop: 5, backgroundColor: "#E5E4E2", alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start', borderRadius: 10 }}>
                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#225cc7' }}>Business</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "85%", alignSelf: 'center', backgroundColor: "#E5E4E2", height: 1 }}></View>
                </View>

                <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <TouchableNativeFeedback onPress={this.onReadMorePress}>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#225cc7', borderRadius: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 14 }}>Read More</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{ width: "100%", height: 50 }}></View>
            </ScrollView>
        );
    }
}

export default DashboardScreen;
