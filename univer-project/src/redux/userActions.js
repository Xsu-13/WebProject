import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess = () => {
    return {
        type: FETCH_USER_SUCCESS
    }
}

export const fetchUsersFailure = () => {
    return {
        type: FETCH_USER_FAILURE
    }
}

export const fetchUsers = () =>
{
    return (dispatch) => {
        
        dispatch(fetchUsersRequest)

        fetch('https://formcarry.com/s/fCsjmrtmZ4', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: localStorage.user
        })
        .then(response => {
            console.log(response);
            dispatch(fetchUsersSuccess);
            localStorage.clear();})
        .catch(error => {
            console.log(error);
            dispatch(fetchUsersFailure);
            localStorage.clear();});
    }
}
