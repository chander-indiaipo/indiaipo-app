import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    Modal,
    Image,
    TouchableOpacity,
    StyleSheet,
    GestureResponderEvent,
    Animated,
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

interface SubscriptionModalProps {
    visible: boolean;
    onClose: (event: GestureResponderEvent) => void;
    title?: string;
    message?: string;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ visible, onClose, title = 'Title', message = 'Message' }) => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (visible) {
            animateCrown();
        }
    }, [visible]);

    const animateCrown = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleValue, {
                    toValue: 1.2, // Zoom in
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleValue, {
                    toValue: 1, // Zoom out
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <View onPress={onClose} style={styles.overlay}>
                <View style={styles.modalContent}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItem: 'center' }}>
                        <Text style={styles.title}>Get Premium</Text>
                        <Animated.Image
                            source={require('../assets/images/crown.png')} // Path to your local image
                            style={[
                                {
                                    width: 20, // Set width of the image
                                    height: 20, // Set height of the image
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    marginLeft: 5,
                                },
                                { transform: [{ scale: scaleValue }] }, // Apply animated scale
                            ]}
                        />
                    </View>
                    <Text style={styles.message}>Unlock all the power of this mobile tool and enjoy digital experience like never before!</Text>

                    <View style={{ width: '100%', paddingHorizontal: 10 }}>
                        <View style={{ width: "100%", backgroundColor: "#225cc7", elevation: 5, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10, borderWidth: 1, borderColor: "#225cc7" }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Annualy</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>₹149</Text>
                                    <Text style={{ color: "#fff" }}>/month</Text>
                                </View>
                            </View>
                            <Text style={{ color: "#fff" }}>First 30 days free</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Octicons
                                    name="dot-fill"
                                    size={18}  // Enlarge the icon when focused
                                    color={"#fff"}
                                    style={{ alignSelf: 'center' }}
                                />
                                <Text style={{ color: "#fff", alignSelf: 'center', marginLeft: 10 }}>Access to exclusive education series</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Octicons
                                    name="dot-fill"
                                    size={18}  // Enlarge the icon when focused
                                    color={"#fff"}
                                    style={{ alignSelf: 'center' }}
                                />
                                <Text style={{ color: "#fff", alignSelf: 'center', marginLeft: 10 }}>Monthly IPO World Magazine</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Octicons
                                    name="dot-fill"
                                    size={18}  // Enlarge the icon when focused
                                    color={"#fff"}
                                    style={{ alignSelf: 'center' }}
                                />
                                <Text style={{ color: "#fff", alignSelf: 'center', marginLeft: 10 }}>40 Message credits per month</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 20 }}>
                        <View style={{ width: "100%", backgroundColor: "#fff", elevation: 5, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10, borderWidth: 1, borderColor: "#225cc7" }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: "#225cc7", fontWeight: "bold", fontSize: 16 }}>Monthly</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: "#225cc7", fontWeight: "bold", fontSize: 20 }}>₹250</Text>
                                    <Text style={{ color: "#666" }}>/month</Text>
                                </View>
                            </View>
                            <Text style={{ color: "#666" }}>First 7 days free</Text>
                            <Text style={{ color: "#666", marginTop: 5 }}>-Access to exclusive education series</Text>
                            <Text style={{ color: "#666" }}>-Monthly IPO World Magazine</Text>
                            <Text style={{ color: "#666" }}>-30 Message credits</Text>
                        </View>
                    </View>
                    
                    <TouchableOpacity onPress={null} style={{ width: '100%', elevation: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <View style={{ width: '100%', paddingVertical: 10, backgroundColor: '#225cc7', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, color: '#fff' }}>Buy Now</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    modalContent: {
        width: '100%',
        height: "65%",
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        color: "#225cc7",
    },
    message: {
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default SubscriptionModal;
