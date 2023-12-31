import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

const initialState = {
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}

export default reducer