import {
    ORDERS_ACTIONS,
    SET_CREATE_ORDER_LOADING,
    SET_ORDERS_LIST,
    SET_ORDERS_LIST_LOADING,
    TOrdersReducer
} from "./types";

const initialState: TOrdersReducer = {
    ordersList: [],
    loadings: {
        createOrderLoading: false,
        ordersListLoading: false,
    }
}

export const ordersReducer = (state = initialState, action: ORDERS_ACTIONS) => {
    switch (action.type) {
        case SET_ORDERS_LIST: {
            return {
                ...state,
                ordersList: action.payload
            }
        }
        case SET_ORDERS_LIST_LOADING: {
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    ordersListLoading: action.payload
                }
            }
        }
        case SET_CREATE_ORDER_LOADING: {
            return {
                ...state,
                loadings: {
                    ...state,
                    createOrderLoading: action.payload
                }
            }
        }
        default:
            return state
    }
}