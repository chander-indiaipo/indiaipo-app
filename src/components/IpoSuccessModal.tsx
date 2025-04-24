import React, { useEffect, useRef, useState } from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    Pressable,
    Animated,
    Dimensions,
    Linking,
    Image,
} from 'react-native';
import Video from 'react-native-video';

interface Props {
    visible: boolean;
    onClose: () => void;
}

const { width } = Dimensions.get('window');

const IpoSuccessModal: React.FC<Props> = ({ visible, onClose }) => {
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const videoFadeAnim = useRef(new Animated.Value(0)).current;
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        if (visible) {
            Animated.spring(scaleAnim, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        } else {
            scaleAnim.setValue(0);
            videoFadeAnim.setValue(0);
            setVideoLoaded(false);
        }
    }, [visible]);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
        Animated.timing(videoFadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const handlePaymentRedirect = () => {
        // Linking.openURL('https://your-payment-gateway.com');
    };

    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <Animated.View style={[styles.modal, { transform: [{ scale: scaleAnim }] }]}>
                    <View style={styles.videoContainer}>
                        {!videoLoaded && (
                            <Image
                                source={require('../assets/images/white.jpg')}
                                style={styles.video}
                                resizeMode="contain"
                            />
                        )}
                        <Animated.View style={[styles.videoWrapper, { opacity: videoFadeAnim }]}>
                            <Video
                                source={require('../assets/images/success.mp4')}
                                style={styles.video}
                                resizeMode="contain"
                                muted
                                rate={0.4}
                                paused={!visible}
                                onLoad={handleVideoLoad}
                            // repeat
                            />
                        </Animated.View>
                    </View>

                    <Text style={styles.title}>You're Eligible! 🎉</Text>
                    <Text style={styles.subtitle}>
                        Congratulations! You meet all the requirements for an IPO.
                    </Text>

                    <Pressable style={styles.button} onPress={handlePaymentRedirect}>
                        <Text style={styles.buttonText}>KNOW YOUR IPO SIZE</Text>
                    </Pressable>

                    <Pressable onPress={onClose}>
                        <Text style={styles.closeText}>Close</Text>
                    </Pressable>
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: width * 0.85,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 10,
    },
    videoContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        overflow: 'hidden',
        backgroundColor: "#fff",
        marginBottom: 15,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoWrapper: {
        ...StyleSheet.absoluteFillObject,
    },
    video: {
        width: '100%',
        height: '100%',
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#2ecc71',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginVertical: 10,
    },
    button: {
        marginTop: 15,
        backgroundColor: '#225cc7',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
    closeText: {
        marginTop: 15,
        fontSize: 14,
        color: '#aaa',
    },
});

export default IpoSuccessModal;
