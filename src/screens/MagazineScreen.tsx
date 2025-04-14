// src/screens/MagazineScreen.tsx
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import Ionicons

interface MagazineScreenProps {
    navigation: any;
}

interface MagazineScreenState { }

class MagazineScreen extends Component<MagazineScreenProps, MagazineScreenState> {
    render() {
        const pdfUrl = 'https://docs.google.com/gview?embedded=true&url=https://indiaipo.in/assets/app_assets/india_ipo_comp_magzine.pdf'; // Replace with your PDF URL

        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#fff',
            }}>
                <View style={{
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd',
                    backgroundColor: '#f9f9f9',
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <MaterialIcons
                            name="arrow-back"
                            size={22}  // Enlarge the icon when focused
                            color={"#36454F"}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>E-Magazine</Text>
                </View>

                <WebView
                    source={{ uri: pdfUrl }}
                    style={styles.webview}
                    startInLoadingState
                    javaScriptEnabled
                    domStorageEnabled
                    scalesPageToFit
                    originWhitelist={['*']}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    backText: {
        color: '#007AFF',
        fontSize: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#36454F',
        marginLeft: 10
    },
    webview: {
        flex: 1,
    },
});

export default MagazineScreen;
