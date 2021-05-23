import React from "react";
import {IOrderFullInfoProps} from "./types";

const s = require('./styles.module.scss')

export const OrderFullInfo: React.FC<IOrderFullInfoProps> = ({
                                                                 productsInOrder,
                                                             }) => {
    return (
        <div className={s.order_full_item}>
            <div>{productsInOrder.product.name}</div>
            <div>{productsInOrder.product.price}</div>
            <div>{productsInOrder.product.weight}</div>
            <div>{productsInOrder.count}</div>
        </div>
    )
}