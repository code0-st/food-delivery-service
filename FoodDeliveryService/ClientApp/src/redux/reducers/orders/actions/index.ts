import {IAddProductsToOrder, ICreateOrder, IGetClientOrders} from "./types";
import {setCreateOrderLoading} from "./actions";
import {instance} from "../../../api";

export const createOrderAsync: ICreateOrder = payload => async (dispatch: any) => {
    dispatch(setCreateOrderLoading(true))
    try {
        await instance().close().createOrder(payload)
    } catch (err) {
        console.log(err)
    }
    dispatch(setCreateOrderLoading(false))
}

export const addProductToOrderAsync: IAddProductsToOrder = payload => async (dispatch: any) => {
    dispatch(setCreateOrderLoading(true))
    try {
        await instance().close().addProductsInOrder(payload)
    }
    dispatch(setCreateOrderLoading(false))
}

export const getOrdersListAsync = () => async (dispatch: any) => {

}

export const getClientOrdersList: IGetClientOrders = payload => async (dispatch: any) => {

}