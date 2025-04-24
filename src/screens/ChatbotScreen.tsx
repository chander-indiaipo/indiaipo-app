import React, { Component, createRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getChatbot, getUsers } from '../api/ApiMiddleware';
import { User } from '../models/User';
import { RootState } from '../redux/store';
import { Message } from '../models/Message';
import { TypingAnimation } from '../components/TypingAnimation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type State = {
    messages: Message[];
    inputText: string;
    isBotTyping: boolean; // 👈 New
};

// Own props passed to the component
interface OwnProps {
    navigation: any;
}

// Props from Redux state
interface StateProps {
    messages: Message[];
    loading: boolean;
    error: string | null;
    abc: string
}

// Props from Redux dispatch
interface DispatchProps {
    getChatbot: (message: string) => void;
}

// Combine all props
type Props = OwnProps & StateProps & DispatchProps;


class ChatbotScreen extends Component<Props, State> {
    flatListRef = createRef<FlatList<Message>>();
    constructor(props: Props) {
        super(props);
        this.state = {
            messages: [],
            inputText: '',
            isBotTyping: false // 👈 New
        };
    }

    componentDidUpdate(prevProps: Props) {
        // Check if there's a new message from the Redux store
        if (prevProps.messages !== this.props.messages && this.props.messages.length > 0) {
            const latestBotMessage = this.props.messages[0];

            const alreadyExists = this.state.messages.some(msg => msg.id === latestBotMessage.id);
            if (!alreadyExists) {
                this.setState(prevState => ({
                    messages: [latestBotMessage, ...prevState.messages],
                    isBotTyping: false, // 👈 Stop typing indicator once bot responds
                }));
            }
        }
    }

    handleSend = () => {
        const { inputText, messages } = this.state;
        if (inputText.trim() === '') return;

        this.props.getChatbot(inputText);
        const newMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: Date.now(),
        };

        this.setState(
            prevState => ({
                messages: [newMessage, ...prevState.messages],
                inputText: '',
                isBotTyping: true, // 👈 Start typing animation
            }),
            () => {
                // this.scrollToEnd();
                // this.simulateBotResponse();
            }
        );
    };

    simulateBotResponse = () => {
        setTimeout(() => {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: 'This is a bot response!',
                sender: 'bot',
                timestamp: Date.now() + 1,
            };
            this.setState(
                prevState => ({
                    messages: [botMessage, ...prevState.messages],
                }),
                // this.scrollToEnd
            );
        }, 1000);
    };

    scrollToEnd = () => {
        this.flatListRef.current?.scrollToEnd({ animated: true });
    };

    renderMessage = ({ item }: { item: Message }) => {
        const isUser = item.sender === 'user';
        const isTyping = item.id === 'typing';

        return (
            <View
                style={[
                    styles.messageContainer,
                    isUser ? styles.messageRight : styles.messageLeft,
                ]}
            >
                {!isUser && (
                    <Image
                        source={require('../assets/images/bot.png')}
                        style={styles.avatar}
                    />
                )}
                <View style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}>
                    {isTyping ? (
                        <TypingAnimation />
                    ) : (
                        <Text style={isUser ? styles.messageText : { color: '#36454F' }}>
                            {item.text}
                        </Text>
                    )}
                </View>
                {isUser && (
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={styles.avatar}
                    />
                )}
            </View>
        );
    };

    onGoBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        const { messages, inputText } = this.state;

        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
                >

                    <View style={{
                        paddingTop: 15,
                        paddingHorizontal: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColour: "fff",
                        elevation: 5
                    }}>
                        <TouchableOpacity onPress={this.onGoBack}>
                            <MaterialIcons name="arrow-back" size={22} color="#36454F" />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 20,
                            color: '#36454F',
                            fontWeight: 'bold',
                            marginLeft: 10,
                        }}>Chatbot</Text>
                    </View>
                    <FlatList
                        ref={this.flatListRef}
                        data={
                            this.state.isBotTyping
                                ? [{ id: 'typing', text: '...', sender: 'bot', timestamp: Date.now() }, ...this.state.messages]
                                : this.state.messages
                        }
                        renderItem={this.renderMessage}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.messageList}
                        inverted
                    />


                    <View style={styles.inputContainer}>
                        <TextInput
                            value={inputText}
                            onChangeText={text => this.setState({ inputText: text })}
                            placeholder="Type a message"
                            style={styles.input}
                            multiline
                        />
                        <TouchableOpacity onPress={this.handleSend} style={styles.sendButton}>
                            <Icon name="send" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

// Map Redux state to props
const mapStateToProps = (state: RootState): StateProps => ({
    messages: state.chatbotState.messages,
    loading: state.userState.loading,
    error: state.userState.error,
    abc: state.userState.abc
});

// Map dispatch to props
const mapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): DispatchProps => ({
    getChatbot: (message: string) => dispatch(getChatbot(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatbotScreen);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    container: {
        flex: 1,
    },
    messageList: {
        padding: 10,
        // paddingBottom: 70,
    },
    messageContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'flex-end',
    },
    messageLeft: {
        justifyContent: 'flex-start',
    },
    messageRight: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 18,
        marginHorizontal: 6,
    },
    bubble: {
        maxWidth: '70%',
        padding: 10,
        borderRadius: 15,
    },
    botBubble: {
        backgroundColor: '#e0e0e0',
        borderTopLeftRadius: 0,
    },
    userBubble: {
        backgroundColor: '#225cc7',
        borderTopRightRadius: 0,
    },
    messageText: {
        color: '#fff',
    },
    inputContainer: {
        // position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'flex-end',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    input: {
        flex: 1,
        maxHeight: 100,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    sendButton: {
        backgroundColor: '#225cc7',
        borderRadius: 20,
        padding: 10,
        marginLeft: 10,
    },
});
