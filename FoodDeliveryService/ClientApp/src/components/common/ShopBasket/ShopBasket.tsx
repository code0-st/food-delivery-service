import React, {useState} from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {Dialog, IconButton, Slide, Snackbar} from "@material-ui/core";
import {IBasketProductItem} from "../../../redux/reducers/shopBasket/types.data";
import {CloseIcon} from "../../../icons/icons";
import {BasketProductItem} from "./BasketProductItem";
import {basketFlexes, basketHeaders} from "./heplers";
import clsx from "clsx";
import {SimpleButton} from "../Fields/Buttons/SimpleButton";
import {addProductToOrderAsync, createOrderAsync} from "../../../redux/reducers/orders/actions";
import {IAddProductsToOrder, ICreateOrder} from "../../../redux/reducers/orders/actions/types";
import {IClient, IUser, IWorker} from "../../../redux/reducers/user/types.data";
import {Alert} from "@material-ui/lab";
import {Link} from "react-router-dom";
import {ROUTE_PATHS} from "../../../routers/paths.main";

const s = require('./styles.module.scss')

interface IShopBasketProps {
    open: boolean
    closeHandler: any
    basketProductList: IBasketProductItem[]
    createOrderAsync: ICreateOrder
    userInfo: IClient | IWorker | null
}

const ShopBasket: React.FC<IShopBasketProps> = ({
                                                    open,
                                                    closeHandler,
                                                    basketProductList,
                                                    userInfo,
                                                    createOrderAsync,
                                                }) => {
    const [openError, setOpenError] = useState<boolean>(false)
    const [openSuccess, setOpenSuccess] = useState<boolean>(false)

    const summary = basketProductList.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.count * currentValue.price
    }, 0)
    const createOrderHandler = () => {
        if (!userInfo || basketProductList.length === 0) {
            setOpenError(true)
            return
        }
        createOrderAsync({
            clientId: userInfo.id,
            products: basketProductList.map(item => ({
                count: item.count,
                productId: item.id,
                orderId: -1,
            })),
        }, () => {
            setOpenSuccess(true)
            setTimeout(() => {
                closeHandler()
            }, 2000)
        })

    }
    return (
        <Dialog open={open}
                fullWidth
                onClose={() => {
                    setOpenError(false)
                    closeHandler()
                }}>
            <div className={s.basket}>
                <div className={s.basket_title}>
                    <div>Моя корзина</div>
                    <IconButton onClick={() => {
                        setOpenError(false)
                        closeHandler()
                    }}>
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
                        <SimpleButton onClick={createOrderHandler}>Оплатить</SimpleButton>
                    </div>
                </div>
            </div>
            <Snackbar
                open={openError}
                key={'error'}>
                <Alert onClose={() => setOpenError(false)} severity={'error'}>
                    {basketProductList.length === 0
                        ? <div className={s.notification}>Выберите товар!</div>
                        : <div className={s.notification}>
                            <Link to={ROUTE_PATHS.login}>Войдите </Link>
                            или
                            <Link to={ROUTE_PATHS.signUp}> зарегистрируйтесь!</Link>
                        </div>}
                </Alert>
            </Snackbar>
            <Snackbar
                open={openSuccess}
                key={'success'}>
                <Alert onClose={() => setOpenSuccess(false)} severity={'success'}>
                    <div className={s.notification}>Заказ поступил в обрабоку!</div>
                </Alert>
            </Snackbar>
        </Dialog>
    )
}

const mapStateToProps = (state: TRootState) => ({
    userInfo: state.user.userInfo,
    basketProductList: state.shopBasket.basketProductList,
})
const mapDispatchToProps = {
    createOrderAsync,
}

export const ShopBasketContainer = connect(mapStateToProps, mapDispatchToProps)(ShopBasket)