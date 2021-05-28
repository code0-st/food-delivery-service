import {
    ICreateClient,
    ICreateWorker,
    IGetSearchUsers,
    IGetSortedClients,
    IGetSortedWorkers,
    IRequestUserInfo
} from "./types";
import {
    setClientsList,
    setClientsListLoading,
    setCreateUserLoading,
    setUserInfo,
    setUserInfoLoading, setWorkersList,
    setWorkersListLoading
} from "./actions";
import {instance} from "../../../api";
import {loginAsync} from "../../auth/actions";

export const getUserInfoAsync: IRequestUserInfo = (id, role) => async (dispatch: any) => {
    dispatch(setUserInfoLoading(true))
    try {
        const res =
            role === 'worker'
                ? await instance().close().getWorkerInfo(id)
                : await instance().close().getClientInfo(id)
        await dispatch(setUserInfo(res.data))
    } catch (e) {
        console.log(e)
    }
    dispatch(setUserInfoLoading(false))
}

export const createClientAsync: ICreateClient = (payload) => async (dispatch: any) => {
    dispatch(setCreateUserLoading(true))
    await instance().open().createClient(payload)
        .then(value => {
            dispatch(loginAsync({username: payload.userName, password: payload.password}))
        })
        .catch(error => {
            console.log(error)
        })
    dispatch(setCreateUserLoading(false))
}

export const createWorkerAsync: ICreateWorker = (payload) => async (dispatch: any) => {
    dispatch(setCreateUserLoading(true))
    try {
        await instance().close().createWorker(payload)
    } catch (e) {
        console.log(e)
    }
    dispatch(setCreateUserLoading(false))
}

export const getClientsListAsync: IGetSearchUsers = payload => async (dispatch: any) => {
    dispatch(setClientsListLoading(true))
    try {
        const res = await instance().close().getClientsList(payload)
        await dispatch(setClientsList(res.data))
    } catch (e) {
        console.log(e)
    }
    dispatch(setClientsListLoading(false))
}

export const getWorkersListAsync: IGetSearchUsers = payload => async (dispatch: any) => {
    dispatch(setWorkersListLoading(true))
    try {
        const res = await instance().close().getWorkersList(payload)
        dispatch(setWorkersList(res.data))
    } catch (e) {
        console.log(e)
    }
    dispatch(setWorkersListLoading(false))
}

export const getSortedClientsAsync: IGetSortedClients = payload => async (dispatch: any) => {
    dispatch(setClientsListLoading(true))
    await instance().close().getSortedClientsList(payload)
        .then(res => {
            dispatch(setClientsList(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    dispatch(setClientsListLoading(false))
}

export const getSortedWorkersAsync: IGetSortedWorkers = payload => async (dispatch: any) => {
    dispatch(setWorkersListLoading(true))
    await instance().close().getSortedWorkersList(payload)
        .then(res => {
            dispatch(setWorkersList(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    dispatch(setWorkersListLoading(false))
}