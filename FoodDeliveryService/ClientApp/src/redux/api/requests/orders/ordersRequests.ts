import {
    TAddProductsToOrderBody,
    TCreateOrderBody,
    TGetClientOrders,
    TGetOrdersSorted,
    TSetOrderStatus
} from "./types.data";
import {instanceAxiosClose} from "../../instance.axios";
import {paths} from "../../paths";

export const ordersRequests = () => ({
    open: () => ({}),
    close: (token: string | null) => ({
        createOrder: (body: TCreateOrderBody) => {
            return instanceAxiosClose(token).post(paths.orders.list, body)
        },
        addProductsInOrder: (body: TAddProductsToOrderBody[]) => {
            return instanceAxiosClose(token).post(paths.productsInOrder, body)
        },
        getOrdersList: () => {
            return instanceAxiosClose(token).get(paths.orders.list)
        },
        getClientOrders: (body: TGetClientOrders) => {
            return instanceAxiosClose(token).get(`${paths.orders.list}?clientId=${body.clientId}`)
        },
        getSortedOrders: (body: TGetOrdersSorted) => {
            return instanceAxiosClose(token).get(`${paths.orders.sort}?isAsc=${body.isAsc}&sortState=${body.field}`)
        },
        setOrderStatus: (body: TSetOrderStatus) => {
            return instanceAxiosClose(token).post(paths.orders.status, body)
        },
    }),
})