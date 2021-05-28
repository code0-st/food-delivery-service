import {IClient, IWorker} from "../types.data";
import {
    SET_CLIENTS_LIST_ACTION, SET_CLIENTS_LIST_LOADING_ACTION, SET_CREATE_USER_LOADING_ACTION,
    SET_USER_INFO_ACTION,
    SET_USER_INFO_LOADING_ACTION,
    SET_WORKERS_LIST_ACTION, SET_WORKERS_LIST_LOADING_ACTION
} from "../types";
import {IClientBody, IWorkerBody, TGetSortedClients, TGetSortedWorkers} from "../../../api/requests/user/types.data";

export interface IRequestUserInfo {
    (id: string | null, role: string | null): void
}

export interface ICreateClient {
    (payload: IClientBody): void
}

export interface ICreateWorker {
    (payload: IWorkerBody): void
}

export interface IGetSearchUsers {
    (payload: {searchValue?: string}): void
}

export interface IGetSortedClients {
    (payload: TGetSortedClients): void
}

export interface IGetSortedWorkers {
    (payload: TGetSortedWorkers): void
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

export interface ISetCreateUserLoading {
    (payload: boolean): SET_CREATE_USER_LOADING_ACTION
}