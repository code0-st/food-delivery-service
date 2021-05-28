import {IProduct} from "../types.data";
import {SET_PRODUCTS_LIST_ACTION, SET_PRODUCTS_LIST_LOADING_ACTION} from "../types";
import {TCreateProduct, TEditProduct, TRemoveProduct} from "../../../api/requests/products/types.data";

export interface IRequestProductsByCatalog {
    (catalogId: number): void
}

export interface ICreateProduct {
    (payload: TCreateProduct): void
}

export interface IEditProduct {
    (payload: TEditProduct): void
}

export interface IRemoveProduct {
    (payload: TRemoveProduct): void
}

export interface ISetProductsList {
    (payload: IProduct[]): SET_PRODUCTS_LIST_ACTION
}

export interface ISetProductsListLoading {
    (payload: boolean): SET_PRODUCTS_LIST_LOADING_ACTION
}