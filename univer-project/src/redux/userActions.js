import { COMMENT_USER_ERROR, DATA_USER_CORRECT, EMAIL_USER_ERROR, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, NAME_USER_ERROR, TEL_USER_ERROR } from "./userTypes"

export const fetchUsersRequest = () => {
    console.log(FETCH_USER_REQUEST)
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess = () => {
    console.log(FETCH_USER_SUCCESS)
    return {
        type: FETCH_USER_SUCCESS
    }
}

export const fetchUsersFailure = () => {
    console.log(FETCH_USER_FAILURE)
    return {
        type: FETCH_USER_FAILURE
    }
}

export const emailError = () => {

    return {
        type: EMAIL_USER_ERROR
    }
}

export const telError = () => {

    return {
        type: TEL_USER_ERROR
    }
}

export const nameError = () => {

    return {
        type: NAME_USER_ERROR
    }
}

export const commentError = () => {

    return {
        type: COMMENT_USER_ERROR
    }
}

export const correctValidation = () => {

    return {
        type: DATA_USER_CORRECT
    }
}

export const fetchUsers = () =>
{
    return (dispatch) => {
        
        dispatch(fetchUsersRequest())

        fetch('https://formcarry.com/s/fCsjmrtmZ4', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: localStorage.user
        })
        .then(response => {
            console.log(response);
            dispatch(fetchUsersSuccess());
            localStorage.clear();})
        .catch(error => {
            console.log(error);
            dispatch(fetchUsersFailure());
            });
    }
}

export const validateUser = () =>
{
    return (dispatch) => {

        if(localStorage.user != null)
        {
            let data = JSON.parse(localStorage.user);

        const isEmail = (str) => /^(.+)@(.+)\.(.+)$/.test(str);
        const isMobilePhone = (str) => /^(\+?7|8)?9\d{9}$/.test(str);
        const isAlpha = (str) => /^[A-ZА-ЯЁ]+$/i.test(str)

        const emailValidation = isEmail(data.email);
        const telValidation = isMobilePhone(data.tel);
        const nameValidation = isAlpha(data.fio);

        if(data.fio === "" || !nameValidation)
        {
            dispatch(nameError()); 
            return;
        }
        if(!telValidation || data.tel === "")
        {
            dispatch(telError()); 
            return;
        }

        if(!emailValidation || data.email === "")
        {
            dispatch(emailError()); 
            return;
        }

        if(data.comment === "")
        {
            dispatch(commentError()); 
            return;
        }

        dispatch(correctValidation())
        }
    }
}