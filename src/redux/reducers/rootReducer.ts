// src/redux/reducers/rootReducer.ts
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userState: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
