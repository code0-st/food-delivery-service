import {IProduct} from "./types.data";

export type TProductsReducer = {
    productsList: IProduct[]
    productListLoading: boolean
}

export const SET_PRODUCTS_LIST = 'SET_PRODUCTS_LIST'
export const SET_PRODUCTS_LIST_LOADING = 'SET_PRODUCTS_LIST_LOADING'

export type SET_PRODUCTS_LIST_ACTION = {
    type: typeof SET_PRODUCTS_LIST,
    payload: IProduct[]
}

export type SET_PRODUCTS_LIST_LOADING_ACTION = {
    type: typeof SET_PRODUCTS_LIST_LOADING,
    payload: boolean
}

export type PRODUCTS_ACTIONS =
    | SET_PRODUCTS_LIST_ACTION
    | SET_PRODUCTS_LIST_LOADING_ACTION