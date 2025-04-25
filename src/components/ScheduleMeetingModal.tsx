import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const { width } = Dimensions.get('window');

const ScheduleMeetingModal = ({ visible, onClose, onProceedToPayment }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const meetingDuration = 30; // in minutes
    const meetingCharge = 20000; // in INR

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimeConfirm = (time) => {
        setSelectedTime(time);
        hideTimePicker();
    };

    const handleBookConsultation = () => {
        if (!selectedDate || !selectedTime) {
            Alert.alert('Incomplete Selection', 'Please select both date and time for the meeting.');
            return;
        }
        // Proceed to payment gateway
        onProceedToPayment({ date: selectedDate, time: selectedTime });
    };

    const formatDate = (date) => {
        if (!date) return 'Select Date';
        return date.toLocaleDateString();
    };

    const formatTime = (time) => {
        if (!time) return 'Select Time';
        return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Schedule a Virtual Meeting</Text>

                    <TouchableOpacity style={styles.selector} onPress={showDatePicker}>
                        <Text style={styles.selectorText}>{formatDate(selectedDate)}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.selector} onPress={showTimePicker}>
                        <Text style={styles.selectorText}>{formatTime(selectedTime)}</Text>
                    </TouchableOpacity>

                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Duration: {meetingDuration} minutes</Text>
                        <Text style={styles.infoText}>Charges: ₹{meetingCharge}</Text>
                    </View>

                    <TouchableOpacity style={styles.bookButton} onPress={handleBookConsultation}>
                        <Text style={styles.bookButtonText}>Book Consultation</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
                minimumDate={new Date()}
            />

            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
            />
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
        color:"#36454F"
    },
    selector: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
    },
    selectorText: {
        fontSize: 16,
        color: '#333',
    },
    infoContainer: {
        marginVertical: 10,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    bookButton: {
        backgroundColor: '#225cc7',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    closeButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#666',
        fontSize: 16,
    },
});

export default ScheduleMeetingModal;
