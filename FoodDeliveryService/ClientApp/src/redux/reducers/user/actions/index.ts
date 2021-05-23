import {ICreateClient, ICreateWorker, IRequestUserInfo} from "./types";
import {
    setClientsList,
    setClientsListLoading,
    setCreateUserLoading,
    setUserInfo,
    setUserInfoLoading,
    setWorkersListLoading
} from "./actions";
import {instance} from "../../../api";
import {history} from "../../../../index";
import {ROUTE_PATHS} from "../../../../routers/paths.main";
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

export const getClientsListAsync = () => async (dispatch: any) => {
    dispatch(setClientsListLoading(true))
    try {
        const res = await instance().close().getClientsList()
        await dispatch(setClientsList(res.data))
    } catch (e) {
        console.log(e)
    }
    dispatch(setClientsListLoading(false))
}

export const getWorkersListAsync = () => async (dispatch: any) => {
    dispatch(setWorkersListLoading(true))
    try {
        const res = await instance().close().getWorkersList()
        dispatch(setWorkersListLoading(res.data))
    } catch (e) {
        console.log(e)
    }
    dispatch(setWorkersListLoading(false))
}