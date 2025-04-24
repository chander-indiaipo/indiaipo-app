// WelcomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getUsers } from '../api/ApiMiddleware';
import { RootState } from '../redux/store';

// Own props passed to the component
interface OwnProps {
    navigation: any;
}

// Props from Redux state
interface StateProps {
    abc: string;
}

// Props from Redux dispatch
interface DispatchProps {
    getUsers: () => void;
}

// Combine all props
type Props = OwnProps & StateProps & DispatchProps;

interface State {
    isFocused: number;
}

class KycScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isFocused: 0,
        };
    }

    handleFocus = (index: number) => {
        this.setState({ isFocused: index });
    };

    handleBlur = () => {
        this.setState({ isFocused: 0 });
    };

    render() {
        const { isFocused } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 }}>
                <View style={{ marginTop: 25 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 22, color: "#232b2b", fontWeight: 'bold' }}>Verified Successfully!</Text>
                        <MaterialIcons
                            name="verified"
                            size={22}  // Enlarge the icon when focused
                            color={"#225cc7"}
                            style={{ alignSelf: 'center', marginLeft: 2 }}
                        />
                    </View>
                    <Text style={{ fontSize: 16, color: "#A9A9A9", marginTop: 5 }}>Let's get started by entering your phone number.</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.label}>Your Full Name</Text>
                    <TextInput
                        style={[
                            styles.input,
                            {
                                borderColor: isFocused === 1 ? '#007bff' : '#ccc',
                                borderWidth: isFocused === 1 ? 2 : 1,
                            },
                        ]}
                        placeholder="Enter Full Name"
                        onFocus={() => this.handleFocus(1)}
                        onBlur={this.handleBlur}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.label}>Select Gender</Text>
                    <View style={{ width: "100%", justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity style={{ width: "47%" }}>
                            <View style={{ width: "100%", backgroundColor: "#fff", borderWidth: 1, borderRadius: 10, borderColor: "#225cc7", flexDirection: 'row', padding: 3 }}>
                                <View style={{ width: 35, height: 35, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <MaterialCommunityIcons
                                        name="checkbox-marked"
                                        size={22}  // Enlarge the icon when focused
                                        color={"#225cc7"}
                                        style={{}}
                                    />
                                </View>
                                <View style={{ paddingLeft: 10, alignSelf: 'center' }}>
                                    <Text style={{ color: "#225cc7", fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>Male</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: "47%" }}>
                            <View style={{ width: "100%", backgroundColor: "#f0f0f0", borderRadius: 10, flexDirection: 'row', padding: 3 }}>
                                <View style={{ width: 35, height: 35, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <MaterialCommunityIcons
                                        name="checkbox-blank"
                                        size={22}  // Enlarge the icon when focused
                                        color={"#c3c3c3"}
                                        style={{}}
                                    />
                                </View>
                                <View style={{ paddingLeft: 10, alignSelf: 'center' }}>
                                    <Text style={{ color: "#232b2b", fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>Female</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={[
                            styles.input,
                            {
                                borderColor: isFocused === 2 ? '#007bff' : '#ccc',
                                borderWidth: isFocused === 2 ? 2 : 1,
                            },
                        ]}
                        placeholder="abc@example.com"
                        keyboardType="email-address"
                        onFocus={() => this.handleFocus(2)}
                        onBlur={this.handleBlur}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.label}>State</Text>
                    <TextInput
                        style={[
                            styles.input,
                            {
                                borderColor: isFocused === 3 ? '#007bff' : '#ccc',
                                borderWidth: isFocused === 3 ? 2 : 1,
                            },
                        ]}
                        placeholder="Enter State"
                        onFocus={() => this.handleFocus(3)}
                        onBlur={this.handleBlur}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        style={[
                            styles.input,
                            {
                                borderColor: isFocused === 4 ? '#007bff' : '#ccc',
                                borderWidth: isFocused === 4 ? 2 : 1,
                            },
                        ]}
                        placeholder="Enter City"
                        onFocus={() => this.handleFocus(4)}
                        onBlur={this.handleBlur}
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: "100%", paddingVertical: 20, position: 'absolute', bottom: 0 }}>
                    <TouchableOpacity onPress={null} style={{ width: '100%' }}>
                        <View style={{ width: '100%', height: 55, backgroundColor: "#225cc7", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#fff" }}>Create Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        marginTop: 8,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 8,
        fontSize: 16,
    },
});

// Map Redux state to props
const mapStateToProps = (state: RootState): StateProps => ({
    abc: state.userState.abc,
});

// Map dispatch to props
const mapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): DispatchProps => ({
    getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(KycScreen);
