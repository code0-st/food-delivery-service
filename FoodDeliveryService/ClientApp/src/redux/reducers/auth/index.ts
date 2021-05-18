import {AUTH_ACTIONS, SET_LOGIN_LOADING, TAuthReducer} from "./types";

const initialState: TAuthReducer = {
    loginLoading: false
}

export const authReducer = (state = initialState, action: AUTH_ACTIONS) => {
    switch (action.type) {
        case SET_LOGIN_LOADING: {
            return {
                ...state,
                loginLoading: action.payload
            }
        }
        default :
            return state
    }
}