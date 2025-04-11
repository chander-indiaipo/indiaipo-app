// src/redux/store.ts
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { thunk } from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

// 👇 Add this line to export RootState type
export type RootState = ReturnType<typeof rootReducer>;

export default store;
