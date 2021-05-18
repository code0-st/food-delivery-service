import {PRODUCTS_ACTIONS, SET_PRODUCTS_LIST, SET_PRODUCTS_LIST_LOADING, TProductsReducer} from "./types";

const initialState: TProductsReducer = {
    productsList: [],
    productListLoading: false
}

export const productsReducer = (state = initialState, action: PRODUCTS_ACTIONS) => {
    switch (action.type) {
        case SET_PRODUCTS_LIST: {
            return {
                ...state,
                productsList: action.payload
            }
        }
        case SET_PRODUCTS_LIST_LOADING: {
            return {
                ...state,
                productListLoading: action.payload
            }
        }
        default:
            return state
    }
}