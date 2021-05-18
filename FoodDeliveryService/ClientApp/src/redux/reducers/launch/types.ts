export const INIT_APP = 'INIT_APP'
export const SET_INIT_APP_LOADING = 'SET_INIT_APP_LOADING'

export type INIT_APP_ACTION = {
    type: typeof INIT_APP
}

export type SET_INIT_APP_LOADING = {
    type: typeof SET_INIT_APP_LOADING
    payload: boolean
}

export type LAUNCH_ACTIONS =
    | INIT_APP_ACTION
    | SET_INIT_APP_LOADING