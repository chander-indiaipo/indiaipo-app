import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Button,
    Pressable
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IpoEligibilityScreenProps {
    navigation: any;
}

interface IpoEligibilityScreenState {
    companyName: string;
    companyType: string;
    contactNumber: string;
    hasGST: boolean;
    currentYearTurnover: string;
    currentYearPAT: string;
    lastYearTurnover: string;
    lastYearPAT: string;
    lastToLastYearTurnover: string;
    lastToLastYearPAT: string;
    showTypeOptions: boolean;
}

const companyTypes = [
    'Private Limited',
    'Public Limited',
    'Sole Proprietorship',
    'Firm',
];

class IpoEligibilityScreen extends Component<IpoEligibilityScreenProps, IpoEligibilityScreenState> {
    constructor(props: IpoEligibilityScreenProps) {
        super(props);
        this.state = {
            companyName: '',
            companyType: 'Private Limited',
            contactNumber: '',
            hasGST: false,
            currentYearTurnover: '',
            currentYearPAT: '',
            lastYearTurnover: '',
            lastYearPAT: '',
            lastToLastYearTurnover: '',
            lastToLastYearPAT: '',
            showTypeOptions: false,
        };
    }

    onGoBack = () => {
        this.props.navigation.goBack();
    };

    handleSubmit = () => {
        console.log('Form Data:', this.state);
        // Submit logic here
    };

    render() {
        const {
            companyName,
            companyType,
            contactNumber,
            hasGST,
            currentYearTurnover,
            currentYearPAT,
            lastYearTurnover,
            lastYearPAT,
            lastToLastYearTurnover,
            lastToLastYearPAT,
            showTypeOptions
        } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.onGoBack}>
                        <MaterialIcons name="arrow-back" size={22} color="#36454F" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Check IPO Eligibility</Text>
                </View>

                {/* Form */}
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.label}>Company Name *</Text>
                    <TextInput
                        style={styles.input}
                        value={companyName}
                        onChangeText={(text) => this.setState({ companyName: text })}
                        placeholder="Enter company name"
                    />

                    <Text style={styles.label}>Company Type *</Text>
                    <Pressable
                        onPress={() => this.setState({ showTypeOptions: !showTypeOptions })}
                        style={styles.dropdownSelector}
                    >
                        <Text style={styles.dropdownText}>{companyType}</Text>
                    </Pressable>
                    {showTypeOptions &&
                        companyTypes.map((type) => (
                            <Pressable
                                key={type}
                                onPress={() => this.setState({ companyType: type, showTypeOptions: false })}
                                style={styles.dropdownItem}
                            >
                                <Text>{type}</Text>
                            </Pressable>
                        ))}

                    <Text style={styles.label}>Contact Number *</Text>
                    <TextInput
                        style={styles.input}
                        value={contactNumber}
                        onChangeText={(text) => this.setState({ contactNumber: text })}
                        placeholder="Enter contact number"
                        keyboardType="phone-pad"
                    />

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontWeight: '600', marginBottom: 8, color: "#225cc7" }}>Do You Have GST? *</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                backgroundColor: '#eee',
                                borderRadius: 8,
                                overflow: 'hidden',
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => this.setState({ hasGST: true })}
                                style={{
                                    flex: 1,
                                    paddingVertical: 10,
                                    alignItems: 'center',
                                    backgroundColor: hasGST ? '#4CAF50' : 'transparent',
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: '600',
                                        color: hasGST ? '#fff' : '#333',
                                    }}
                                >
                                    Yes
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => this.setState({ hasGST: false })}
                                style={{
                                    flex: 1,
                                    paddingVertical: 10,
                                    alignItems: 'center',
                                    backgroundColor: hasGST === false ? '#FF0000' : 'transparent',
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: '600',
                                        color: hasGST === false ? '#fff' : '#333',
                                    }}
                                >
                                    No
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {[
                        { label: 'Current Year Turnover', key: 'currentYearTurnover' },
                        { label: 'Current Year PAT', key: 'currentYearPAT' },
                        { label: 'Last Year Turnover', key: 'lastYearTurnover' },
                        { label: 'Last Year PAT', key: 'lastYearPAT' },
                        { label: 'Last To Last Year Turnover', key: 'lastToLastYearTurnover' },
                        { label: 'Last To Last Year PAT', key: 'lastToLastYearPAT' },
                    ].map((field) => (
                        <View key={field.key}>
                            <Text style={styles.label}>{field.label} *</Text>
                            <TextInput
                                style={styles.input}
                                value={(this.state as any)[field.key]}
                                onChangeText={(text) => this.setState({ [field.key]: text } as any)}
                                placeholder={`Enter ${field.label.toLowerCase()}`}
                                keyboardType="numeric"
                            />
                        </View>
                    ))}

                    <View style={styles.buttonContainer}>
                        <TouchableNativeFeedback onPress={this.handleSubmit}>
                            <View style={{ width: "100%", paddingHorizontal: 10, borderRadius: 10, paddingVertical: 10, backgroundColor: "#225cc7", justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: "#fff" }}>Check Eligibility</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </ScrollView >
            </View >
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        color: '#36454F',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    container: {
        padding: 20,
        paddingBottom: 60,
    },
    label: {
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 5,
        color: "#225cc7"
    },
    input: {
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },
    dropdownSelector: {
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },
    dropdownText: {
        color: '#000',
    },
    dropdownItem: {
        padding: 10,
        backgroundColor: '#f1f1f1',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    switch: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    switchOn: {
        backgroundColor: '#4CAF50',
    },
    switchOff: {
        backgroundColor: '#ccc',
    },
    switchText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 30,
    },
});

export default IpoEligibilityScreen;
