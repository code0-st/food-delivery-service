import React, {useState} from "react";
import {IProductCardProps} from "./types";
import {ImageIcon, WeightIcon} from "../../icons/icons";
import {Button, Fade} from "reactstrap";
import {SimpleButton} from "../common/Fields/Buttons/SimpleButton";

const s = require('./styles.module.scss')

export const ProductCard: React.FC<IProductCardProps> = ({
                                                             index,
                                                             product,
                                                         }) => {
    const {id, name, price, weight} = product
    const [count, setCount] = useState<number>(0)
    return (
        <Fade in timeout={{enter: 20 * index, exit: 50}}>
            <div className={s.card}>
                <ImageIcon/>
                <div className={s.card_info}>
                    <div className={s.card_title}>{name}</div>
                    <div className={s.card_numbers}>
                        <div>{price} руб.</div>
                        <div className={s.weight}>
                            <WeightIcon/>
                            {weight} г
                        </div>
                    </div>
                </div>
                <div className={s.amount}>
                    <SimpleButton onClick={() => setCount(count + 1)}>+</SimpleButton>
                    {count}
                    <SimpleButton disabled={count <= 0}
                                  onClick={() => setCount(count - 1)}>-</SimpleButton>
                </div>
            </div>
        </Fade>
    )
}