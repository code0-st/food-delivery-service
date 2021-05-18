import {IProduct} from "../../redux/reducers/products/types.data";

export interface IProductsPageProps {
    productsList: IProduct[]
    productsListLoading: boolean
    getProductsListAsync: any
}
export interface IProductCardProps {
    product: IProduct
    index: number
}