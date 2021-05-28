export type TCreateOrderBody = {
    clientId: string
    products: TAddProductsToOrderBody[]
}

export type TAddProductsToOrderBody = {
    count: number,
    productId: number,
    orderId: number
}

export type TGetClientOrders = {
    clientId: string
}

export type TGetOrdersSorted = {
    isAsc: boolean
    field: 'Id' | 'DateCreated' | 'Status'
}

export type TSetOrderStatus = {
    id: number
    statusId: number
}