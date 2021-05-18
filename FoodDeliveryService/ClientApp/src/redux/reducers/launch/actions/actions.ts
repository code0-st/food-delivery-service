import {IinitApp, IsetInitAppLoading} from "./types";
import {INIT_APP, SET_INIT_APP_LOADING} from "../types";

export const initApp: IinitApp = () => ({
    type: INIT_APP
})

export const setInitAppLoading: IsetInitAppLoading = (payload) => ({
    type: SET_INIT_APP_LOADING,
    payload
})
