// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
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
  }

  componentDidMount() {
    // Any logic to run when the component is mounted
  }

  onNextPress() {
    this.props.navigation.navigate("OtpScreen");
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ paddingTop: 15, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: 20, color: "#36454F", fontWeight: 'bold' }}>Settings</Text>
          </View>

        </View>
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
        <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>Edit Profile</Text>
        </View>
        <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>Share</Text>
        </View>
        <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>Rate Us</Text>
        </View>
        <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>Privacy Policy</Text>
        </View>
        <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 14, fontWeight: '450', color: "#36454F" }}>Terms and Conditions</Text>
        </View>
        <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 14, fontWeight: '450', color: "#D22B2B" }}>Logout</Text>
        </View>
      </ScrollView>
    );
  }
}

export default SettingsScreen;
