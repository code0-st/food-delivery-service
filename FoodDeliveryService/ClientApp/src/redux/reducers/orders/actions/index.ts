import {IAddProductsToOrder, ICreateOrder, IGetClientOrders, IGetOrdersSorted, ISetOrderStatus} from "./types";
import {setCreateOrderLoading, setOrdersList, setOrdersListLoading} from "./actions";
import {instance} from "../../../api";
import {setBasketProductList} from "../../shopBasket/actions/actions";

export const createOrderAsync: ICreateOrder = (payload, onSuccess) => async (dispatch: any) => {
    dispatch(setCreateOrderLoading(true))
    await instance().close().createOrder(payload)
        .then(res => {
            dispatch(addProductToOrderAsync(payload.products.map(item => ({
                count: item.count,
                productId: item.productId,
                orderId: res.data,
            }))))
        })
        .then(() => {
            onSuccess && onSuccess()
            dispatch(setBasketProductList([]))
        })
        .catch(err => {
            console.log(err)
        })
    dispatch(setCreateOrderLoading(false))
}

export const addProductToOrderAsync: IAddProductsToOrder = payload => async (dispatch: any) => {
    try {
        await instance().close().addProductsInOrder(payload)
    } catch (e) {
        console.log(e)
    }
}

export const getOrdersListAsync = () => async (dispatch: any) => {
    dispatch(setOrdersListLoading(true))
    await instance().close().getOrdersList()
        .then(res => {
            dispatch(setOrdersList(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    dispatch(setOrdersListLoading(false))

}

export const getClientOrdersList: IGetClientOrders = payload => async (dispatch: any) => {
    dispatch(setOrdersListLoading(true))
    await instance().close().getClientOrders(payload)
        .then(res => {
            dispatch(setOrdersList(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    dispatch(setOrdersListLoading(false))
}

export const getOrdersListSorted: IGetOrdersSorted = payload => async (dispatch: any) => {
    dispatch(setOrdersListLoading(true))
    await instance().close().getSortedOrders(payload)
        .then(res => {
            dispatch(setOrdersList(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    dispatch(setOrdersListLoading(false))
}

export const setOrderStatusAsync: ISetOrderStatus = payload => async () => {
    await instance().close().setOrderStatus(payload)
}