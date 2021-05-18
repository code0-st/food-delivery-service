import {IRequestUserInfo} from "./types";
import {setClientsList, setClientsListLoading, setUserInfo, setUserInfoLoading, setWorkersListLoading} from "./actions";
import {instance} from "../../../api";

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