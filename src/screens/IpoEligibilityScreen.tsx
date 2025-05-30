import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Pressable
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IpoSuccessModal from '../components/IpoSuccessModal';

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
    showSuccessModal: boolean
}

const companyTypes = [
    'Private Limited',
    'Public Limited',
    'Limited Liability Partnership',
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
            showSuccessModal: false
        };
    }

    onGoBack = () => {
        this.props.navigation.goBack();
    };

    handleSubmit = () => {
        console.log('Form Data:', this.state);
        this.setState({ showSuccessModal: true })
        // Submit logic here
    };

    getFinancialYearLabel = (offset = 1) => {
        const now = new Date();
        const year = now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1;
        const startYear = year - offset;
        const endYear = startYear + 1;
        return `${startYear}-${endYear}`;
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
            <>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={this.onGoBack}>
                            <MaterialIcons name="arrow-back" size={22} color="#36454F" />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Check IPO Eligibility</Text>
                    </View>

                    {/* Form */}
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                        <Text style={styles.label}>Your Business Name *</Text>
                        <TextInput
                            style={styles.input}
                            value={companyName}
                            onChangeText={(text) => this.setState({ companyName: text })}
                            placeholder="Enter business name"
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
                            maxLength={10}
                        />
                        <View style={{ paddingHorizontal: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 14, color: "#A9A9A9" }}>Securing your personal information is our priority</Text>
                        </View>

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

                        {[{
                            label: `${this.getFinancialYearLabel()} Turnover`,
                            key: 'lastYearTurnover'
                        }, {
                            label: `${this.getFinancialYearLabel()} PAT`,
                            key: 'lastYearPAT'
                        }].map(field => (
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
                    </ScrollView>
                </View>
                <IpoSuccessModal
                    visible={this.state.showSuccessModal}
                    onClose={() => this.setState({ showSuccessModal: false })}
                />
            </>
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
    buttonContainer: {
        marginTop: 30,
    },
});

export default IpoEligibilityScreen;
