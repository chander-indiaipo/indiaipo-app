// src/redux/actions/userActions.ts
import axios from 'axios';
import { Dispatch } from 'redux';

import { BASE_URL } from '../constants/constants';
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './ActionTitles';

// Exporting interfaces individually
export interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

export interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: string;
}

export interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}
export type Actions =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;
// Action creator with direct axios call
export const getUsers = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
      const response = await axios.get(`${BASE_URL}/users`, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`, // Add if needed
        },
      });

      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
        console.log("erro"+ JSON.stringify(error));
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: error.message || 'Something went wrong',
      });
    }
  };
};
