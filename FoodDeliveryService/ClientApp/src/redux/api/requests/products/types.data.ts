export type TCreateProduct = {
    name: string
    price: number
    weight: number
    catalogId: number
}

export type TEditProduct = {
    id: number
    name: string
    price: number
    weight: number
    catalogId: number
}

export type TRemoveProduct = {
    id: number
}