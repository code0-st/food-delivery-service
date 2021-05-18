import {IBasketProductItem} from "../types.data";
import {SET_BASKET_PRODUCTS_LIST_ACTION} from "../types";

export interface ISetBasketProductList {
    (payload: IBasketProductItem[]): SET_BASKET_PRODUCTS_LIST_ACTION
}