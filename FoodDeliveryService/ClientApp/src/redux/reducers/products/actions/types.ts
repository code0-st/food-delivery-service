import {IProduct} from "../types.data";
import {SET_PRODUCTS_LIST_ACTION, SET_PRODUCTS_LIST_LOADING_ACTION} from "../types";

export interface IRequestProductsByCatalog {
    (catalogId: number): void
}

export interface ISetProductsList {
    (payload: IProduct[]): SET_PRODUCTS_LIST_ACTION
}

export interface ISetProductsListLoading {
    (payload: boolean): SET_PRODUCTS_LIST_LOADING_ACTION
}