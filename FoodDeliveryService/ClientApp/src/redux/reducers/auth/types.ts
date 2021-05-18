export type TAuthReducer = {
    loginLoading: boolean
}

export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING'
export type SET_LOGIN_LOADING_ACTION = {
    type: typeof SET_LOGIN_LOADING,
    payload: boolean
}

export type AUTH_ACTIONS =
    | SET_LOGIN_LOADING_ACTION