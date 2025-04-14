// NewsDetailScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface NewsDetailScreenProps {
    navigation: any;
}

class NewsDetailScreen extends Component<NewsDetailScreenProps> {
    constructor(props: NewsDetailScreenProps) {
        super(props);
        this.onGoBack = this.onGoBack.bind(this);
    }

    onGoBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.onGoBack}>
                        <MaterialIcons name="arrow-back" size={22} color="#36454F" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>News</Text>
                </View>

                {/* News Image */}
                <Image
                    source={require('../assets/images/news.png')}
                    style={styles.image}
                    resizeMode="cover"
                />

                {/* News Content */}
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                        BSE Sensex rallies over 1,000 points as markets rebound after crash
                    </Text>
                    <Text style={styles.subInfo}>Times of India • 3 hours ago</Text>

                    <Text style={styles.paragraph}>
                        The financial landscape in India has been buzzing with anticipation as the Reserve Bank of India (RBI) recently made a pivotal move to address the evolving economic challenges. On April 9, 2025, the RBI announced a 25 basis points cut in the repo rate, bringing it down to 6.00%.
                    </Text>

                    <Text style={styles.sectionTitle}>Understanding the Rate Cut and Its Implications</Text>
                    <Text style={styles.paragraph}>
                        The repo rate is the rate at which the RBI lends money to commercial banks. A reduction in this rate typically aims to make borrowing cheaper, encouraging spending and investment to stimulate economic growth.
                    </Text>
                    <Text style={styles.paragraph}>
                        The recent cut was largely influenced by escalating global trade tensions, notably the imposition of significant tariffs by the U.S., which have raised concerns about a potential slowdown in India’s economic growth.
                    </Text>

                    <Text style={styles.sectionTitle}>Bond Yields: The Immediate Reaction</Text>
                    <Text style={styles.paragraph}>
                        Bond yields and interest rates share an inverse relationship. Following the RBI’s announcement, the benchmark 10-year bond yield experienced a marginal dip, settling at 6.50%, slightly lower than its pre-announcement level of 6.51%.
                    </Text>

                    <Text style={styles.sectionTitle}>Investor Sentiment: A Mixed Bag</Text>
                    <Text style={styles.paragraph}>
                        The RBI’s dovish stance has elicited varied reactions from investors. Sectors like banking, NBFCs, and automobiles have shown resilience. Investors are optimistic that lower borrowing costs will boost demand.
                    </Text>
                    <Text style={styles.paragraph}>
                        However, the broader market remains cautious. Both Nifty 50 and BSE Sensex recorded declines of over half a percent, reflecting ongoing concerns about global economic uncertainties.
                    </Text>

                    <Text style={styles.sectionTitle}>Foreign Investors: Watching Closely</Text>
                    <Text style={styles.paragraph}>
                        Foreign ownership of Indian government bonds has surpassed ₹3 trillion (~$35 billion). This indicates growing confidence in India’s debt market, with investors looking to capitalize on falling yields.
                    </Text>

                    <Text style={styles.sectionTitle}>Looking Ahead: What’s Next?</Text>
                    <Text style={styles.paragraph}>
                        Economists anticipate further rate cuts depending on global trade and domestic economic trends. For investors, it is important to stay agile and diversify portfolios.
                    </Text>

                    <Text style={styles.sectionTitle}>Conclusion</Text>
                    <Text style={styles.paragraph}>
                        The RBI’s April 2025 rate cut reflects a proactive approach to mitigate external economic pressures. While bond yields have responded modestly, staying informed and attentive will be key to navigating this evolving market landscape.
                    </Text>
                </View>

                <View style={{ height: 30 }} />
            </ScrollView>
        );
    }
}

export default NewsDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        elevation: 5,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#36454F',
        marginLeft: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    contentContainer: {
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#36454F',
        marginBottom: 6,
    },
    subInfo: {
        fontSize: 14,
        color: '#225cc7',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#36454F',
        marginTop: 15,
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 14,
        color: '#36454F',
        lineHeight: 22,
        marginBottom: 10,
    },
});
