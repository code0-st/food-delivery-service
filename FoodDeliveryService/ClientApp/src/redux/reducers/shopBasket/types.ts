import {IBasketProductItem} from "./types.data";

export type TShopBasketReducer = {
    basketProductList: IBasketProductItem[]
}

export const SET_BASKET_PRODUCTS_LIST = 'SET_BASKET_PRODUCTS_LIST'
export type SET_BASKET_PRODUCTS_LIST_ACTION = {
    type: typeof SET_BASKET_PRODUCTS_LIST,
    payload: IBasketProductItem[]
}

export type SHOP_BASKET_ACTIONS =
    | SET_BASKET_PRODUCTS_LIST_ACTION