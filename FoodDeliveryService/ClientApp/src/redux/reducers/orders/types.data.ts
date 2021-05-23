import {IClient} from "../user/types.data";
import {TEnumItem} from "../enums/types.data";
import {IProduct} from "../products/types.data";

export interface IOrder {
    id: number
    dateCreated: string
    "dateClosed": string | null
    clientId: string
    statusId: number
    picUpPointId: number | null
    client: IClient
    picUpPoint: TEnumItem | null
    status: TEnumItem
    productsInOrders: IProductInOrder[]
}

export interface IProductInOrder {
    id: number
    count: number
    orderId: number
    productId: number
    product: IProduct
}