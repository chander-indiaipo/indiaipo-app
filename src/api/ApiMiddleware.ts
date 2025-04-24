// src/redux/actions/userActions.ts
import axios from 'axios';
import { Dispatch } from 'redux';

import { BASE_URL } from '../constants/constants';
import { CHATBOT_FAILURE, CHATBOT_REQUEST, CHATBOT_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './ActionTitles';

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

export interface ChatRequestAction {
  type: typeof CHATBOT_REQUEST;
}

export interface ChatSuccessAction {
  type: typeof CHATBOT_SUCCESS;
  payload: {
    reply: string;
  };
}

export interface ChatFailureAction {
  type: typeof CHATBOT_FAILURE;
  payload: string;
}
export type Actions =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction
  | ChatRequestAction | ChatSuccessAction | ChatFailureAction;

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
      console.log("error" + JSON.stringify(error));
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: error.message || 'Something went wrong',
      });
    }
  };
};

export const getChatbot = (message: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CHATBOT_REQUEST });

    try {
      const response = await axios.get(
        `${BASE_URL}/chatbot`,
        {
          params: { message }, // This will become ?message=yourtext
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      dispatch({
        type: CHATBOT_SUCCESS,
        payload: response.data,
      });
      console.log("data: " + JSON.stringify(response.data));
    } catch (error: any) {
      console.log("error: " + JSON.stringify(error));
      dispatch({
        type: CHATBOT_FAILURE,
        payload: error.message || 'Something went wrong',
      });
    }
  };
};

