import * as types from './actionTypes';
import axios from 'axios';


export const fetchUsersRequest = () => {
    return {
        type: types.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: types.FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (msg) => {
    return {
        type:types.FETCH_USERS_ERROR,
        payload: msg
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
          .get(process.env.REACT_APP_BASE_URL + "users")
          .then((response) => {
            const users = response.data;
            dispatch(fetchUsersSuccess(users));
          })
          .catch((error) => {
            const errorMessage =
              error.message || "Something went wrong,Please try again later";
            dispatch(fetchUsersFailure(errorMessage));
          });
    }
}

export const cleanErrorMessage = () => {
    return {
      type: types.CLEAR_SNACKBAR,
    };
}