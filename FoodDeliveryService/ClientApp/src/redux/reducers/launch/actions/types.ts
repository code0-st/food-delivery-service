import {INIT_APP_ACTION, SET_INIT_APP_LOADING} from "../types";

export interface IinitApp {
    (): INIT_APP_ACTION
}

export interface IsetInitAppLoading {
    (payload: boolean): SET_INIT_APP_LOADING
}