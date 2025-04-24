// src/redux/reducers/rootReducer.ts
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import chatbotReducer from './chatbotReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  chatbotState: chatbotReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
