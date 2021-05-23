import {IOrder} from "./types.data";

export type TOrdersReducer = {
    ordersList: IOrder[]
    loadings: {
        ordersListLoading: boolean
        createOrderLoading: boolean
    }
}

export const SET_ORDERS_LIST = "SET_ORDERS_LIST"
export const SET_ORDERS_LIST_LOADING = "SET_ORDERS_LIST_LOADING"
export const SET_CREATE_ORDER_LOADING = "SET_CREATE_ORDER_LOADING"

export type SET_ORDERS_LIST_ACTION = {
    type: typeof SET_ORDERS_LIST,
    payload: IOrder[]
}
export type SET_ORDERS_LIST_LOADING_ACTION = {
    type: typeof SET_ORDERS_LIST_LOADING,
    payload: boolean
}
export type SET_CREATE_ORDER_LOADING_ACTION = {
    type: typeof SET_CREATE_ORDER_LOADING,
    payload: boolean
}

export type ORDERS_ACTIONS =
    | SET_ORDERS_LIST_ACTION
    | SET_ORDERS_LIST_LOADING_ACTION
    | SET_CREATE_ORDER_LOADING_ACTION