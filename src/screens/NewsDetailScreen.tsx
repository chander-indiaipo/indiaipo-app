// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import Ionicons

interface NewsDetailScreenProps {
    navigation: any;
}
interface NewsDetailScreenState {
}


class NewsDetailScreen extends Component<NewsDetailScreenProps, NewsDetailScreenState> {
    // Initialize state with a default value
    constructor(props: NewsDetailScreenProps) {
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
        // this.props.navigation.navigate("OtpScreen");
    }

    onGoBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ paddingHorizontal: 10, paddingVertical: 10, elevation: 5, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.onGoBack}>
                        <MaterialIcons
                            name="arrow-back"
                            size={22}  // Enlarge the icon when focused
                            color={"#36454F"}
                            style={{}}
                        />
                    </TouchableOpacity>

                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#36454F', marginLeft: 10 }}>News</Text>
                    </View>
                </View>
                <View style={{ width: "100%", resizeMode: 'contain' }}>
                    <Image
                        source={require('../assets/images/news.png')} // Path to your local image
                        style={{
                            width: "100%", // Set width of the image
                            // height: "100%", // Set height of the image
                        }}
                    />
                </View>

                <View style={{ paddingHorizontal: 10, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, color: '#36454F', fontWeight: 'bold', marginTop: 3 }}>BSE Sensex rallies over 1,000 points as markets rebound after crash</Text>
                    <Text style={{ fontSize: 14, color: '#666', marginTop: 3 }}>Time of India - 3 hours ago</Text>
                    <Text style={{ fontSize: 14, color: '#36454F', marginTop: 3 }}>The financial landscape in India has been buzzing with anticipation as the Reserve Bank of India (RBI) recently made a pivotal move to address the evolving economic challenges. On April 9, 2025, the RBI announced a 25 basis points cut in the repo rate, bringing it down to 6.00%. This decision, marking the second consecutive rate cut, was accompanied by a shift in the central bank’s stance from ‘neutral’ to ‘accommodative’. But what does this mean for bond yields and investor sentiment? Let’s dive in.

                        Understanding the Rate Cut and Its Implications

                        The repo rate is the rate at which the RBI lends money to commercial banks. A reduction in this rate typically aims to make borrowing cheaper, encouraging spending and investment to stimulate economic growth. The recent cut was largely influenced by escalating global trade tensions, notably the imposition of significant tariffs by the U.S., which have raised concerns about a potential slowdown in India’s economic growth. Analysts predict that these tariffs could reduce India’s GDP growth by 20–40 basis points in the fiscal year 2025–26.

                        Bond Yields: The Immediate Reaction

                        Bond yields and interest rates share an inverse relationship. When interest rates are cut, bond prices typically rise, leading to a decrease in yields. Following the RBI’s announcement, the benchmark 10-year bond yield experienced a marginal dip, settling at 6.50%, slightly lower than its pre-announcement level of 6.51%. This subtle movement indicates that while the market had anticipated the rate cut, investors are now closely monitoring the RBI’s future actions and the broader economic landscape.

                        Investor Sentiment: A Mixed Bag

                        The RBI’s dovish stance has elicited varied reactions from investors. On one hand, sectors sensitive to interest rates, such as banking, non-banking financial companies (NBFCs), and automobiles, have shown resilience. Investors are optimistic that lower borrowing costs will boost demand in these sectors, potentially leading to improved profitability. Conversely, the broader market remains cautious. The Nifty 50 and BSE Sensex both recorded declines of over half a percent on the day of the announcement, reflecting underlying concerns about global economic uncertainties and their potential impact on India’s growth trajectory.

                        Foreign Investors: Watching Closely

                        Foreign investors have been particularly attentive to India’s bond market dynamics. With the anticipation of rate cuts, foreign ownership of Indian government bonds surpassed 3 trillion rupees (approximately $35 billion) for the first time. This surge indicates a growing confidence in India’s debt market, as investors seek to capitalize on potential capital gains from falling yields.

                        Looking Ahead: What’s Next for the Market?

                        The RBI’s recent moves signal a commitment to supporting economic growth amidst global headwinds. Economists anticipate further rate cuts in the coming months, depending on the trajectory of global trade tensions and domestic economic indicators. For investors, this underscores the importance of staying informed and agile. Diversifying portfolios and closely monitoring policy changes will be crucial in navigating the evolving market landscape.

                        Conclusion

                        The RBI’s April 2025 rate cut reflects a proactive approach to mitigating external economic pressures and fostering domestic growth. While bond yields have responded modestly, the broader investor sentiment remains a blend of optimism in rate-sensitive sectors and caution regarding global uncertainties. As the economic narrative unfolds, staying attuned to policy shifts and market signals will be key for investors aiming to make informed decisions in this dynamic environment.</Text>
                </View>
                <View style={{width:"100%", height:30}}></View>
            </ScrollView>
        );
    }
}

export default NewsDetailScreen;
