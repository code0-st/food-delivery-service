import {ISetProductsList, ISetProductsListLoading} from "./types";
import {SET_PRODUCTS_LIST, SET_PRODUCTS_LIST_LOADING} from "../types";

export const setProductsList: ISetProductsList = payload => ({
    type: SET_PRODUCTS_LIST,
    payload
})
export const setProductsListLoading: ISetProductsListLoading = payload => ({
    type: SET_PRODUCTS_LIST_LOADING,
    payload
})