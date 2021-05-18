import React from "react";
import {ShopBasketIcon} from "../../../icons/icons";

const s = require('./styles.module.scss')

export const CreateBasket: React.FC<{ onClick: any }> = ({
                                                             onClick,
                                                         }) => {
    return (
        <div className={s.basket} onClick={onClick}>
            <ShopBasketIcon/>
        </div>
    )
}