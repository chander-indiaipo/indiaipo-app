// src/redux/reducers/userReducer.ts
import { User } from '../../models/User';
import { Actions } from '../../api/ApiMiddleware';
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from '../../api/ActionTitles';

interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
    abc: string
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    abc: ""
};

const userReducer = (state = initialState, action: Actions): UserState => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_USERS_SUCCESS:
            return { ...state, loading: false, abc: action.payload };
        case FETCH_USERS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;
