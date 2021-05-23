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