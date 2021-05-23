export type TCreateOrderBody = {
    clientId: string
}

export type TAddProductsToOrderBody = {
    count: number,
    productId: number,
    orderId: number
}

export type TGetClientOrders = {
    clientId: string
}