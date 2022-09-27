import * as types from "../actions/actionTypes";

const initialState = {
    departments: [],
    loading:false,
    error:false,
    snackbar:{
        open:false,
        severity:'',
        message:null,
    }
}

const departmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DEPARTMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        
        case types.FETCH_DEPARTMENTS_SUCCESS:
            return {
                ...state,
                loading:false,
                departments: action.payload,
            };

        case types.FETCH_USERS_ERROR:
            return {
                ...state,
                loading:false,
                error:true,
                snackbar: {
                    open:true,
                    severity:'error',
                    message:action.payload
                }
            }

        default:
            return state;
    };
}

export default departmentReducer;