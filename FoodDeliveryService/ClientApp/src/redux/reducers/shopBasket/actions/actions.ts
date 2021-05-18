import {ISetBasketProductList} from "./types";
import {SET_BASKET_PRODUCTS_LIST} from "../types";

export const setBasketProductList: ISetBasketProductList = payload => {
    return {
        type: SET_BASKET_PRODUCTS_LIST,
        payload
    }
}