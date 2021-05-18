import React, {useEffect, useState} from "react";
import {IProductCardProps} from "./types";
import {ImageIcon, WeightIcon} from "../../icons/icons";
import {Fade} from "reactstrap";
import {SimpleButton} from "../common/Fields/Buttons/SimpleButton";
import {TRootState} from "../../redux/store";
import {connect} from "react-redux";
import {setBasketProductList} from "../../redux/reducers/shopBasket/actions/actions";

const s = require('./styles.module.scss')

export const ProductCard: React.FC<IProductCardProps> = ({
                                                             index,
                                                             product,
                                                             basketProductList,
                                                             setBasketProductList,
                                                         }) => {
    const {id, name, price, weight} = product
    const [count, setCount] = useState<number>(0)
    const setBasketProductsHandler = (iterator: number) => {
        const existedProduct = !!basketProductList.find(item => item.id === id)
        existedProduct
            ? setBasketProductList(basketProductList
                .map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            count: count + iterator
                        }
                    }
                    return item
                })
                .filter(item => item.count))
            : setBasketProductList([...basketProductList.filter(item => item.count), {...product, count: count + iterator}])
    }
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
                    <SimpleButton onClick={() => {
                        setCount(count + 1)
                        setBasketProductsHandler(1)
                    }}>+</SimpleButton>
                    {count}
                    <SimpleButton disabled={count <= 0}
                                  onClick={() => {
                                      setCount(count - 1)
                                      setBasketProductsHandler(-1)
                                  }}>-</SimpleButton>
                </div>
            </div>
        </Fade>
    )
}

const mapStateToProps = (state: TRootState) => ({
    basketProductList: state.shopBasket.basketProductList,
})
const mapDispatchToProps = {
    setBasketProductList,
}

export const ProductCardContainer = connect(mapStateToProps, mapDispatchToProps)(ProductCard)