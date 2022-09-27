import * as types from './actionTypes';
import axios from 'axios';

export const fetchDepartmentsRequest = () => {
    return {
        types: types.FETCH_DEPARTMENTS_REQUEST
    }
}

export const fetchDepartmentsSuccess = (departments) => {
    return {
        type: types.FETCH_DEPARTMENTS_SUCCESS,
        payload: departments
    }
}

export const fetchDepartmenstsFailure = (msg) => {
    return {
        type: types.FETCH_DEPARTMENTS_ERROR,
        payload:msg
    }
}

export const fetchDepartments = () => {
    return (dispatch) => {
        dispatch(fetchDepartmentsRequest)
        axios
          .get(process.env.REACT_APP_BASE_URL + "posts")
          .then((response) => {
            const departments = response.data;
            dispatch(fetchDepartmentsSuccess(departments));
          })
          .catch((error) => {
            const errorMessage =
              error.message || "Something went wrong please try again";
            dispatch(fetchDepartmenstsFailure(errorMessage));
          });
    }
}