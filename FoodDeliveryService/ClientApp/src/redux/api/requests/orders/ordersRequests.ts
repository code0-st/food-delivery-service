import {TAddProductsToOrderBody, TCreateOrderBody, TGetClientOrders} from "./types.data";
import {instanceAxiosClose} from "../../instance.axios";
import {paths} from "../../paths";

export const ordersRequests = () => ({
    open: () => ({}),
    close: (token: string | null) => ({
        createOrder: (body: TCreateOrderBody) => {
            return instanceAxiosClose(token).post(paths.orders, body)
        },
        addProductsInOrder: (body: TAddProductsToOrderBody) => {
            return instanceAxiosClose(token).post(paths.productsInOrder, body)
        },
        getOrdersList: () => {
            return instanceAxiosClose(token).get(paths.orders)
        },
        getClientOrders: (body: TGetClientOrders) => {
            return instanceAxiosClose(token).get(paths.orders)
        },
    }),
})