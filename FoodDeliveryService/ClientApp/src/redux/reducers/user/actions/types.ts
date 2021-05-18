import {IClient, IWorker} from "../types.data";
import {
    SET_CLIENTS_LIST_ACTION, SET_CLIENTS_LIST_LOADING_ACTION,
    SET_USER_INFO_ACTION,
    SET_USER_INFO_LOADING_ACTION,
    SET_WORKERS_LIST_ACTION, SET_WORKERS_LIST_LOADING_ACTION
} from "../types";

export interface IRequestUserInfo {
    (id: number, role: string): void
}
export interface ISetUserInfo {
    (payload: IClient | IWorker | null): SET_USER_INFO_ACTION
}
export interface ISetUserInfoLoading {
    (payload: boolean): SET_USER_INFO_LOADING_ACTION
}
export interface ISetClientsList {
    (payload: IClient[]): SET_CLIENTS_LIST_ACTION
}
export interface ISetWorkersList {
    (payload: IWorker[]): SET_WORKERS_LIST_ACTION
}
export interface ISetClientsListLoading {
    (payload: boolean): SET_CLIENTS_LIST_LOADING_ACTION
}
export interface ISetWorkersListLoading {
    (payload: boolean): SET_WORKERS_LIST_LOADING_ACTION
}