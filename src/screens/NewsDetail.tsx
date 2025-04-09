// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
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
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#36454F' }}>News</Text>
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
            </View>
        );
    }
}

export default NewsDetailScreen;
