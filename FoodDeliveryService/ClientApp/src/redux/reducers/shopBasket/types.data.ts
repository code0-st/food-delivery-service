import {IProduct} from "../products/types.data";

export interface IBasketProductItem extends IProduct {
    count: number
}