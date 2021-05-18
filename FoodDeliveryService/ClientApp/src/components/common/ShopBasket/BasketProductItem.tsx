import React from "react";
import {IBasketProductItem} from "../../../redux/reducers/shopBasket/types.data";
import {ImageIcon} from "../../../icons/icons";
import {basketFlexes} from "./heplers";

const s = require('./styles.module.scss')

interface IBasketProductItemProps {
    product: IBasketProductItem
}

export const BasketProductItem: React.FC<IBasketProductItemProps> = ({
                                                                         product
                                                                     }) => {
    const {count, id, weight, price, name} = product
    return (
        <div className={s.basket_product}>
            <div className={s.image} style={{flex: `0 0 ${basketFlexes[0]}%`}}>
                <ImageIcon />
            </div>
            <div style={{flex: `0 0 ${basketFlexes[1]}%`}}>{name}</div>
            <div style={{flex: `0 0 ${basketFlexes[2]}%`}}>{price} руб.</div>
            <div style={{flex: `0 0 ${basketFlexes[3]}%`}}>{price * count} руб.</div>
        </div>
    )
}