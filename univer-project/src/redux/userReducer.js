import { COMMENT_USER_ERROR, DATA_USER_CORRECT, EMAIL_USER_ERROR, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, NAME_USER_ERROR, TEL_USER_ERROR } from "./userTypes"

const initialState = {
    loading: false,
    correctValidation: false,
    nameError: "",
    telError: "",
    commentError: "",
    emailError: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false
            }
        case NAME_USER_ERROR:
            return {
                ...state,
                telError: "",
                commentError: "",
                emailError: "",
                nameError: "Введите корректное имя.",
                correctValidation: false,
            }
            
        case EMAIL_USER_ERROR:
            return {
                ...state,
                telError: "",
                commentError: "",
                nameError: "",
                emailError: "Введите корректный email.",
                correctValidation: false,
            }
        case COMMENT_USER_ERROR:
            return {
                ...state,
                telError: "",
                nameError: "",
                emailError: "",
                commentError: "Неоходимо ваше мнение.",
                correctValidation: false,
            }
        case TEL_USER_ERROR:
            return {
                ...state,
                nameError: "",
                commentError: "",
                emailError: "",
                telError: "Введите корректный номер телефона.",
                correctValidation: false,
            }
        case DATA_USER_CORRECT:
            return {
                ...state,
                telError: "",
                commentError: "",
                emailError: "",
                nameError: "",
                correctValidation: true,
            }
        default: return state
    }
}

export default reducer