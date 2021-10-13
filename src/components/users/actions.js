import axios from "axios";
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./constants";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

 const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user

    }

}

   const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error

    }

}

export const fetchUsers =  () => {
    return async (dispatch) => {
        dispatch(fetchUserRequest)
       await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const user = res.data;
                dispatch(fetchUserSuccess(user))
            })
            .catch(error => {
                const errMsg = error.message
                dispatch(fetchUserFailure(errMsg))
            })
    }
}