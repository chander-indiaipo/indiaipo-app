// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import Ionicons
import { ScrollView, TextInput, TouchableNativeFeedback } from 'react-native-gesture-handler';

interface ServiceDetailScreenProps {
    navigation: any;
}
interface ServiceDetailScreenState {
}


class ServiceDetailScreen extends Component<ServiceDetailScreenProps, ServiceDetailScreenState> {
    // Initialize state with a default value
    constructor(props: ServiceDetailScreenProps) {
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
                        <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold', marginLeft: 10 }}>Service Details</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons
                            name="share"
                            size={25}
                            color={"#225cc7"}
                            style={{}}
                        />
                    </TouchableOpacity>

                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ width: "100%", paddingHorizontal: 10, marginTop: 15 }}>
                        <View style={{ width: "100%", backgroundColor: "#e9f0fb", borderRadius: 10, padding: 10 }}>
                            <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold', marginLeft: 10 }}>Initial Public Offering</Text>
                        </View>
                    </View>

                    <View style={{ width: "100%", paddingHorizontal: 10, marginTop: 15 }}>
                        <View style={{ width: "100%", backgroundColor: "#fff", borderRadius: 10, padding: 10, elevation: 5 }}>
                            <Text style={{ fontSize: 14, color: "#36454F", fontWeight: 'bold', marginLeft: 10 }}>Explainer Video</Text>
                            <View style={{}}>
                                <View style={{ alignSelf: 'flex-end' }}>
                                    <TouchableOpacity onPress={null}>
                                        <View style={{ width: 70, aspectRatio: 0.5625 }}>
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
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: "100%", paddingHorizontal: 10, marginTop: 15 }}>
                        <View>
                            <Text style={{ fontSize: 14, color: "#666" }}>The word IPO is an acronym for Initial Public Offering (IPO). As the full-form itself suggests, it is the process by which a privately owned company transitions into a publicly traded entity by offering its shares to the general public for the first time. This means that the company, which was owned by a small group of founders, private investors, or venture capitalists, now allows retail and institutional investors to purchase its shares. Once the IPO process is completed, the company becomes listed on a stock exchange. For instance, on the National Stock Exchange (NSE) or the Bombay Stock Exchange (BSE). This enables trading of its shares in the open market.</Text>
                            <Text style={{ fontSize: 14, color: "#666" }}>{"\n"}This transition from a privately held company to a publicly traded company drives home significant advantages. The most notable benefit is the ability to raise interest-free and mortgage-free capital from a larger pool of investors. This acquired capital can be used for various business needs. For instance, expanding operations, investing in new projects, funding research and development, repaying debts, or acquiring other companies. By gaining access to the public market, the company is no longer dependent solely on private investors, banks, or venture capital firms for funding.</Text>
                            <Text style={{ fontSize: 15, color: "#36454F", fontWeight: 'bold' }}>{"\n"}What is IPO Advisory?</Text>
                            <Text style={{ fontSize: 14, color: "#666" }}>The term “IPO advisory” refers to the expert guidance and strategic support provided to companies planning to go public. Since an IPO involves undergoing a complex process with multiple regulatory, financial, and strategic concerns, India IPO advisory services help businesses successfully navigate each stage, from pre-IPO preparation to post-listing compliance.</Text>
                            <Text style={{ fontSize: 15, color: "#36454F", fontWeight: 'bold' }}>{"\n"}Why do Companies Need IPO Advisory Services?</Text>
                            <Text style={{ fontSize: 14, color: "#666" }}>Going public is a major financial and operational shift for any company. Without proper guidance, businesses may struggle with regulatory compliance, valuation, investor positioning, and successful subscription of shares. India IPO ensure that companies are fully prepared for the transition, minimizing risks and maximizing opportunities.
                                India IPO is a leading IPO consultancy and advisory services provider in India. It provides expert guidance and solutions to companies looking to go public. With 7,500+ consultancies, 120+ successful IPO launches, and a strong network of 40+ merchant bankers and 100+ B2B associates, we offer unmatched expertise in IPO advisory services. Our team ensures a seamless and successful IPO journey, helping businesses raise capital, enhance credibility, and achieve sustainable growth.</Text>
                            <Text style={{ fontSize: 15, color: "#36454F", fontWeight: 'bold' }}>{"\n"}Benefits of IPO Advisory Services</Text>
                            <Text style={{ fontSize: 14, color: "#666" }}><Text style={{ fontWeight: 'bold' }}>Smooth and efficient IPO execution</Text> – Reduces complexities and prevents delays.{"\n"}{"\n"}
                                <Text style={{ fontWeight: 'bold' }}>Regulatory compliance</Text> – Ensures full adherence to SEBI’s and stock exchange’s norms.{"\n"}{"\n"}
                                <Text style={{ fontWeight: 'bold' }}>Accurate valuation and pricing</Text> – Maximizes fundraising potential while attracting the right investors.{"\n"}{"\n"}
                                <Text style={{ fontWeight: 'bold' }}>Stronger market positioning</Text> – Builds credibility and enhances brand reputation.{"\n"}{"\n"}
                                <Text style={{ fontWeight: 'bold' }}>Successful Fundraising</Text> – Increases the chances of a well-subscribed and profitable IPO.</Text>
                        </View>
                    </View>

                    <View style={{ width: "100%", height: 50 }}></View>
                </ScrollView>
            </View>
        );
    }
}

export default ServiceDetailScreen;
