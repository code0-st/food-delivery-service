import {ISetLoginLoading} from "./types";
import {SET_LOGIN_LOADING} from "../types";

export const setLoginLoading: ISetLoginLoading = payload => ({
    type: SET_LOGIN_LOADING,
    payload
})