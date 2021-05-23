import {ISetCreateOrderLoading, ISetOrdersList, ISetOrdersListLoading} from "./types";
import {SET_CREATE_ORDER_LOADING, SET_ORDERS_LIST, SET_ORDERS_LIST_LOADING} from "../types";

export const setOrdersList: ISetOrdersList = payload => ({
    type: SET_ORDERS_LIST,
    payload
})

export const setOrdersListLoading: ISetOrdersListLoading = payload => ({
    type: SET_ORDERS_LIST_LOADING,
    payload
})

export const setCreateOrderLoading: ISetCreateOrderLoading = payload => ({
    type: SET_CREATE_ORDER_LOADING,
    payload
})