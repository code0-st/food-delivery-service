import {IProduct} from "../../redux/reducers/products/types.data";
import {ISetBasketProductList} from "../../redux/reducers/shopBasket/actions/types";
import {IBasketProductItem} from "../../redux/reducers/shopBasket/types.data";

export interface IProductsPageProps {
    productsList: IProduct[]
    productsListLoading: boolean
    getProductsListAsync: any
}
export interface IProductCardProps {
    product: IProduct
    index: number
    basketProductList: IBasketProductItem[]
    setBasketProductList: ISetBasketProductList
}