import * as types from "../actions/actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: "",
  snackbar: {
    open: false,
    severity: "",
    message: null,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case types.FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        snackbar: {
          open: true,
          severity: "error",
          message: action.payload,
        },
      };

    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.CLEAR_SNACKBAR:
      return {
        ...state,
        error: false,
      };

    default:
      return state;
  }
};

export default userReducer;
