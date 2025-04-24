// src/redux/reducers/userReducer.ts
import { User } from '../../models/User';
import { Actions } from '../../api/ApiMiddleware';
import { CHATBOT_FAILURE, CHATBOT_REQUEST, CHATBOT_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from '../../api/ActionTitles';
import { Message } from '../../models/Message';

interface ChatbotState {
    messages: Message[];
    loading: boolean;
    error: string | null;
}

const initialState: ChatbotState = {
    messages: [],
    loading: false,
    error: null,
};

const chatbotReducer = (state = initialState, action: Actions): ChatbotState => {
    switch (action.type) {
        case CHATBOT_REQUEST:
            return { ...state, loading: true, error: null };
        case CHATBOT_SUCCESS:
            const botMessage: Message = {
                id: Date.now().toString(), // or use uuid if preferred
                text: action.payload.reply,
                sender: 'bot',
                timestamp: Date.now(),
            };

            return {
                ...state,
                loading: false,
                messages: [botMessage, ...state.messages],
            };
        case CHATBOT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default chatbotReducer;
