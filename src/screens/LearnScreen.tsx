// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import Ionicons
import { ScrollView, TextInput, TouchableNativeFeedback } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Ionicons


interface LearnScreenProps {
    navigation: any;
}
interface LearnScreenState {
    currentIndex: number;
    fadeAnim: Animated.Value;
}


class LearnScreen extends Component<LearnScreenProps, LearnScreenState> {
    texts: string[];
    interval: NodeJS.Timeout | null = null;
    // Initialize state with a default value
    constructor(props: LearnScreenProps) {
        super(props);
        this.state = {
            currentIndex: 0,
            fadeAnim: new Animated.Value(1),
        };
        this.texts = [
            "An IPO is a company's first sale of shares to the public",
            "Companies go public to raise capital and expand their business",
            "Investment banks underwrite IPOs, setting the initial share price",
            "IPOs can provide early investors with an exit strategy",
            "After an IPO, a company's shares are traded on public stock exchanges",
            "Market volatility can influence the timing and success of IPOs",
            "Not all IPOs are profitable; some may underperform post-listing",
            "Companies must disclose financial information before going public",
            "IPOs can enhance a company's public profile and credibility",
            "Investors should research thoroughly before investing in an IPO",
        ];

        this.interval = null;
        // this.onNextPress = this.onNextPress.bind(this);
        this.onViewAllPress = this.onViewAllPress.bind(this);
        this.openVideo = this.openVideo.bind(this);
    }

    componentDidMount() {
        // Any logic to run when the component is mounted
        this.startTextRotation();
    }

    componentWillUnmount() {
        if (this.interval) clearInterval(this.interval);
    }

    startTextRotation = () => {
        this.interval = setInterval(() => {
            this.animateTextChange();
        }, 3000);
    };

    animateTextChange = () => {
        Animated.timing(this.state.fadeAnim, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            const nextIndex = (this.state.currentIndex + 1) % this.texts.length;

            this.setState({ currentIndex: nextIndex }, () => {
                Animated.timing(this.state.fadeAnim, {
                    toValue: 1,
                    duration: 300,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }).start();
            });
        });
    };

    onViewAllPress() {
        this.props.navigation.navigate("IpoScreen");
    }

    openVideo() {
        this.props.navigation.navigate("VideoScreen");
    }


    render() {
        const { fadeAnim, currentIndex } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ paddingTop: 15, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, flexDirection: 'row', justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold' }}>Learn</Text>
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

                    <View style={{ width: "100%", paddingHorizontal: 10 }}>
                        <View style={{ width: "100%", paddingHorizontal: 10, paddingVertical: 5, backgroundColor: "#666", borderRadius: 10, flexDirection: 'column' }}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: "15%", aspectRatio: 1, padding: 10, backgroundColor: "#fff", borderRadius: 300 }}>
                                    <Image
                                        source={require('../assets/images/puzzle.png')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                            borderRadius: 10
                                        }}
                                    />
                                </View>
                                <View style={{ width: "80%", paddingLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Animated.Text style={[{ color: "#fff", fontSize: 14 }, { opacity: fadeAnim }]}>{this.texts[currentIndex]}</Animated.Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 10, fontWeight: '600', color: "#fff" }}>Quick Facts!</Text>
                        </View>
                    </View>

                    {/* <View style={{ width: "100%", paddingHorizontal: 10 }}>
                        <View style={{ width: "47%" }}>
                            <Text style={{ color: "#000" }}>IPO Basics</Text>
                        </View>
                    </View> */}

                    <View style={{ paddingHorizontal: 10, marginTop: 20, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: "#36454F" }}>IPO Basics</Text>
                        <Text style={{ fontSize: 14, color: "#36454F" }}>Fundamental concepts and terminology</Text>
                    </View>
                    <ScrollView horizontal={true} style={{ width: "100%", marginTop: 10 }}>
                        <View style={{ paddingLeft: 10, flexDirection: 'row', paddingVertical: 2 }}>
                            <TouchableOpacity onPress={this.openVideo}>
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
                            <TouchableOpacity onPress={this.openVideo}>
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
                            <TouchableOpacity onPress={this.openVideo}>
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
                            <TouchableOpacity onPress={this.openVideo}>
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
                            <TouchableOpacity onPress={this.openVideo}>


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

                    <View style={{ paddingHorizontal: 10, marginTop: 20, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: "#36454F" }}>Process Overview</Text>
                        <Text style={{ fontSize: 14, color: "#36454F" }}>Step-by-step guide to going public</Text>
                    </View>
                    <ScrollView horizontal={true} style={{ width: "100%", marginTop: 10 }}>
                        <View style={{ paddingLeft: 10, flexDirection: 'row', paddingVertical: 2 }}>
                            <TouchableOpacity onPress={this.openVideo}>
                                <View style={{ width: 87, aspectRatio: 0.5625 }}>
                                    <Image
                                        source={require('../assets/images/gujrat.jpg')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                            borderRadius: 10
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.openVideo}>
                                <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                                    <Image
                                        source={require('../assets/images/indi.jpg')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                            borderRadius: 10
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.openVideo}>
                                <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                                    <Image
                                        source={require('../assets/images/jain.jpg')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                            borderRadius: 10
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.openVideo}>
                                <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                                    <Image
                                        source={require('../assets/images/infonative.jpg')} // Path to your local image
                                        style={{
                                            width: "100%", // Set width of the image
                                            height: "100%", // Set height of the image
                                            borderRadius: 10
                                        }}
                                    />
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.openVideo}>


                                <View style={{ width: 87, aspectRatio: 0.5625, marginLeft: 10 }}>
                                    <Image
                                        source={require('../assets/images/park.jpg')} // Path to your local image
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

                    <View style={{ paddingHorizontal: 10, marginTop: 10, justifyContent: 'space-between' }}>
                        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: "#36454F" }}>Market Insights</Text>
                            <TouchableOpacity onPress={this.onViewAllPress}>
                                <Text style={{ fontSize: 14, fontWeight: '450', color: "#225cc7" }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 14, color: "#36454F" }}>Analysis of current IPO trends and market dynamics</Text>
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
                                            <Text style={{ fontSize: 11, color: "#04c204", fontWeight: 'bold', backgroundColor: "#dbffdb", borderRadius: 10, alignSelf: "center", paddingHorizontal: 15, paddingVertical: 2 }}>Open</Text>
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
                    </View>
                    <View style={{ paddingHorizontal: 10, marginTop: 10, justifyContent: 'space-between' }}>
                        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: "#36454F" }}>Exclusive Content</Text>
                            <TouchableOpacity onPress={null}>
                                <Text style={{ fontSize: 14, fontWeight: '450', color: "#225cc7" }}>Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 14, color: "#36454F" }}>Unlock the full potential with members only content</Text>
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
                    <View style={{ width: "100%", height: 50 }}></View>
                </ScrollView>
            </View>
        );
    }
}

export default LearnScreen;
