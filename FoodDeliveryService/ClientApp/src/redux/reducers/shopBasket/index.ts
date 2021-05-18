import {SET_BASKET_PRODUCTS_LIST, SHOP_BASKET_ACTIONS, TShopBasketReducer} from "./types";

const initialState: TShopBasketReducer = {
    basketProductList: []
}

export const shopBasketReducer = (state = initialState, action: SHOP_BASKET_ACTIONS) => {
    switch (action.type) {
        case SET_BASKET_PRODUCTS_LIST: {
            return {
                ...state,
                basketProductList: action.payload
            }
        }
        default: return state
    }
}