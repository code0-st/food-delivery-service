import {IClient, IWorker} from "./types.data";

export type TUserReducer = {
    userInfo: IClient | IWorker | null

    clientsList: IClient[]
    workersList: IWorker[]

    loadings: {
        userInfoLoading: boolean
        clientsListLoading: boolean
        workersListLoading: boolean
    }
}

export const SET_USER_INFO = 'SET_USER_INFO'
export type SET_USER_INFO_ACTION = {
    type: typeof SET_USER_INFO,
    payload: IClient | IWorker | null
}
export const SET_USER_INFO_LOADING = 'SET_USER_INFO_LOADING'
export type SET_USER_INFO_LOADING_ACTION = {
    type: typeof SET_USER_INFO_LOADING,
    payload: boolean
}
export const SET_CLIENTS_LIST = 'SET_CLIENTS_LIST'
export type SET_CLIENTS_LIST_ACTION = {
    type: typeof SET_CLIENTS_LIST,
    payload: IClient[]
}
export const SET_CLIENTS_LIST_LOADING = 'SET_CLIENTS_LIST_LOADING'
export type SET_CLIENTS_LIST_LOADING_ACTION = {
    type: typeof SET_CLIENTS_LIST_LOADING,
    payload: boolean
}
export const SET_WORKERS_LIST = 'SET_WORKERS_LIST'
export type SET_WORKERS_LIST_ACTION = {
    type: typeof SET_WORKERS_LIST,
    payload: IWorker[]
}
export const SET_WORKERS_LIST_LOADING = 'SET_WORKERS_LIST_LOADING'
export type SET_WORKERS_LIST_LOADING_ACTION = {
    type: typeof SET_WORKERS_LIST_LOADING,
    payload: boolean
}

export type USER_ACTIONS =
    | SET_USER_INFO_ACTION
    | SET_USER_INFO_LOADING_ACTION
    | SET_CLIENTS_LIST_ACTION
    | SET_CLIENTS_LIST_LOADING_ACTION
    | SET_WORKERS_LIST_ACTION
    | SET_WORKERS_LIST_LOADING_ACTION