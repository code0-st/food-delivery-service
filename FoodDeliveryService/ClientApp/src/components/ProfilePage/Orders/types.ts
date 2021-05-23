import {IOrder, IProductInOrder} from "../../../redux/reducers/orders/types.data";
import {IGetClientOrders} from "../../../redux/reducers/orders/actions/types";
import {IClient, IWorker} from "../../../redux/reducers/user/types.data";

export interface IOrdersProps {
    userInfo: IClient | IWorker | null
    ordersList: IOrder[]
    ordersListLoading: boolean
    getClientOrdersList: IGetClientOrders
}
export interface IOrdersListItemProps {
    order: IOrder
    index: number
    currentOrderId: number | null
    setCurrentOrderId: any
}
export interface IOrderFullInfoProps {
    productsInOrder: IProductInOrder
}