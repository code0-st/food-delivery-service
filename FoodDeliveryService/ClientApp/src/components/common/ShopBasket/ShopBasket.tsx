import React from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {Dialog, IconButton} from "@material-ui/core";
import {IBasketProductItem} from "../../../redux/reducers/shopBasket/types.data";
import {CloseIcon} from "../../../icons/icons";
import {BasketProductItem} from "./BasketProductItem";
import {basketFlexes, basketHeaders} from "./heplers";
import clsx from "clsx";
import {SimpleButton} from "../Fields/Buttons/SimpleButton";

const s = require('./styles.module.scss')

interface IShopBasketProps {
    open: boolean
    closeHandler: any
    basketProductList: IBasketProductItem[]
}

const ShopBasket: React.FC<IShopBasketProps> = ({
                                                    open,
                                                    closeHandler,
                                                    basketProductList,
                                                }) => {
    const summary = basketProductList.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.count * currentValue.price
    }, 0)
    const createOrderHandler = () => {

    }
    return (
        <Dialog open={open} fullWidth>
            <div className={s.basket}>
                <div className={s.basket_title}>
                    <div>Моя корзина</div>
                    <IconButton onClick={closeHandler}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <div className={clsx(s.basket_product, s.basket_header)}>
                    {basketHeaders.map((item, index) => <div
                        style={{flex: `0 0 ${basketFlexes[index]}%`}}>{item}</div>)}
                </div>
                <div className={s.basket_body}>
                    {basketProductList.map(item => <BasketProductItem key={item.id} product={item}/>)}
                </div>
                <div className={s.basket_bottom}>
                    <div>
                        <div>Итого:</div>
                        <div>{summary} руб.</div>
                    </div>
                    <div>
                        <SimpleButton onClick={() => {
                        }}>Оплатить</SimpleButton>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

const mapStateToProps = (state: TRootState) => ({
    basketProductList: state.shopBasket.basketProductList,
})
const mapDispatchToProps = {}

export const ShopBasketContainer = connect(mapStateToProps, mapDispatchToProps)(ShopBasket)