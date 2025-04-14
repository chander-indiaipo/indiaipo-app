// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import Ionicons
import { ScrollView, TextInput, TouchableNativeFeedback } from 'react-native-gesture-handler';

interface NewsScreenProps {
    navigation: any;
}
interface NewsScreenState {
}


class NewsScreen extends Component<NewsScreenProps, NewsScreenState> {
    // Initialize state with a default value
    constructor(props: NewsScreenProps) {
        super(props);
        this.state = {
        };

        this.onNewsPress = this.onNewsPress.bind(this);
    }

    componentDidMount() {
        // Any logic to run when the component is mounted
    }

    onNewsPress() {
        this.props.navigation.navigate("NewsDetailScreen");
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View style={{ paddingTop: 15, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold' }}>News</Text>
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
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 15, marginBottom: 10, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ paddingHorizontal: 15, paddingVertical: 5, marginLeft: 10, borderRadius: 10, backgroundColor: '#225cc7', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                            <Text style={{ fontSize: 12, color: "#fff", fontWeight: 'bold', marginBottom: -3 }}>Trending</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, paddingVertical: 5, marginLeft: 10, borderRadius: 10, backgroundColor: '#E5E4E2', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                            <Text style={{ fontSize: 12, color: "#666", fontWeight: 'bold' }}>Business</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, paddingVertical: 5, marginLeft: 10, borderRadius: 10, backgroundColor: '#E5E4E2', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                            <Text style={{ fontSize: 12, color: "#666", fontWeight: 'bold' }}>Finance</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, paddingVertical: 5, marginLeft: 10, borderRadius: 10, backgroundColor: '#E5E4E2', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                            <Text style={{ fontSize: 12, color: "#666", fontWeight: 'bold' }}>Geo-Politics</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, paddingVertical: 5, marginLeft: 10, borderRadius: 10, backgroundColor: '#E5E4E2', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                            <Text style={{ fontSize: 12, color: "#666", fontWeight: 'bold' }}>Stock Market</Text>
                        </View>
                    </View>
                </ScrollView>
                <ScrollView showsVerticalScrollIndicator={false}>
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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

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

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.onNewsPress}>
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
                    </TouchableNativeFeedback>

                    <View style={{ width: "100%", height: 50 }}></View>
                </ScrollView>
            </View>
        );
    }
}

export default NewsScreen;
