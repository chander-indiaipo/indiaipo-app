// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Share } from 'react-native';
import { ScrollView, TextInput, TouchableNativeFeedback } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface SettingsScreenProps {
  navigation: any;
}
interface SettingsScreenState {
}


class SettingsScreen extends Component<SettingsScreenProps, SettingsScreenState> {
  // Initialize state with a default value
  constructor(props: SettingsScreenProps) {
    super(props);
    this.state = {
    };

    // Manually bind the onGetStartedPress method to 'this'
    this.onNextPress = this.onNextPress.bind(this);
    this.onProfilePress = this.onProfilePress.bind(this);
    this.onFaqPress = this.onFaqPress.bind(this);
  }

  componentDidMount() {
    // Any logic to run when the component is mounted
  }

  onNextPress() {
    this.props.navigation.navigate("OtpScreen");
  }

  onProfilePress() {
    this.props.navigation.navigate("ProfileScreen");
  }

  onFaqPress() {
    this.props.navigation.navigate("FaqScreen");
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hey! Checkout this IndiaIPO app. Go public with your company. https://yourapp.com',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      console.error('Sharing error:', error.message);
    }
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ paddingTop: 15, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold' }}>Settings</Text>
          </View>

        </View>
        <TouchableNativeFeedback onPress={this.onProfilePress}>
          <View style={{ width: "100%", padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 60, aspectRatio: 1, borderRadius: 300, padding: 3, borderWidth: 1, borderColor: "#c3c3c3", }}>
                <Image
                  source={require('../assets/images/profile.png')} // Path to your local image
                  style={{
                    width: "100%", // Set width of the image
                    height: "100%", // Set height of the image
                    borderRadius: 300
                  }}
                />
              </View>
              <View style={{ paddingLeft: 10, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: "#36454F", fontWeight: 'bold' }}>Chander Mohan</Text>
                <Text style={{ fontSize: 14, color: "#666" }}>mchander20@gmail.com</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <MaterialIcons
                name="arrow-forward-ios"
                size={22}
                color={"#225cc7"}
                style={{}}
              />
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableOpacity>
          <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>About India IPO</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onFaqPress}>
          <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>FAQs</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onShare}>
          <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>Share</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>Rate Us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>Terms and Conditions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, fontWeight: '450', color: "#D22B2B" }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default SettingsScreen;
