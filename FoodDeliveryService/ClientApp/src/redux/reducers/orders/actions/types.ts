import {IOrder} from "../types.data";
import {SET_CREATE_ORDER_LOADING_ACTION, SET_ORDERS_LIST_ACTION, SET_ORDERS_LIST_LOADING_ACTION} from "../types";
import {TAddProductsToOrderBody, TCreateOrderBody, TGetClientOrders} from "../../../api/requests/orders/types.data";

export interface ICreateOrder {
    (payload: TCreateOrderBody): void
}

export interface IAddProductsToOrder {
    (payload: TAddProductsToOrderBody): void
}

export interface IGetClientOrders {
    (payload: TGetClientOrders): void
}

export interface ISetOrdersList {
    (payload: IOrder[]): SET_ORDERS_LIST_ACTION
}

export interface ISetOrdersListLoading {
    (payload: boolean): SET_ORDERS_LIST_LOADING_ACTION
}

export interface ISetCreateOrderLoading {
    (payload: boolean): SET_CREATE_ORDER_LOADING_ACTION
}
