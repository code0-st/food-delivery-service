import {TLoginBody} from "../types.data";
import {SET_LOGIN_LOADING_ACTION} from "../types";

export interface IRequestLogin {
    (payload: TLoginBody): void
}

export interface ISetLoginLoading {
    (payload: boolean): SET_LOGIN_LOADING_ACTION
}