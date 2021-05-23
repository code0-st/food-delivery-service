import {
    ISetClientsList,
    ISetClientsListLoading, ISetCreateUserLoading,
    ISetUserInfo,
    ISetUserInfoLoading,
    ISetWorkersList,
    ISetWorkersListLoading
} from "./types";
import {
    SET_CLIENTS_LIST,
    SET_CLIENTS_LIST_LOADING, SET_CREATE_USER_LOADING,
    SET_USER_INFO,
    SET_USER_INFO_LOADING,
    SET_WORKERS_LIST, SET_WORKERS_LIST_LOADING
} from "../types";

export const setUserInfo: ISetUserInfo = payload => ({
    type: SET_USER_INFO,
    payload
})
export const setUserInfoLoading: ISetUserInfoLoading = payload => ({
    type: SET_USER_INFO_LOADING,
    payload
})

export const setClientsList: ISetClientsList = payload => ({
    type: SET_CLIENTS_LIST,
    payload
})
export const setWorkersList: ISetWorkersList = payload => ({
    type: SET_WORKERS_LIST,
    payload
})
export const setClientsListLoading: ISetClientsListLoading = payload => ({
    type: SET_CLIENTS_LIST_LOADING,
    payload
})
export const setWorkersListLoading: ISetWorkersListLoading = payload => ({
    type: SET_WORKERS_LIST_LOADING,
    payload
})
export const setCreateUserLoading: ISetCreateUserLoading = payload => ({
    type: SET_CREATE_USER_LOADING,
    payload
})