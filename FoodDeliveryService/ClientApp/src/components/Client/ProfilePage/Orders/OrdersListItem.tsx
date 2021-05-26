import React, {createRef, useState} from "react";
import {IOrdersListItemProps} from "./types";
import {Collapse, Fade} from "reactstrap";
import {formatIsoToDate, formatIsoToTime} from "../../../../utils/utils";
import {OrderFullInfo} from "./OrderFullInfo";
import {BasketProductItem} from "../../../common/ShopBasket/BasketProductItem";

const s = require('./styles.module.scss')

export const OrdersListItem: React.FC<IOrdersListItemProps> = ({
                                                                   order,
                                                                   index,
                                                                   currentOrderId,
                                                                   setCurrentOrderId,
                                                               }) => {
    const collapseRef = createRef<any>()
    const summary = order.productsInOrders.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.count * currentValue.product.price
    }, 0)
    return (
        <Fade in timeout={{enter: 20 * index, exit: 50}}>
            <div className={s.order} onClick={() => {
                if(currentOrderId === order.id) {
                    setCurrentOrderId(null)
                } else {
                    setCurrentOrderId(order.id)
                }
            }}>
                <div className={s.order_main}>
                    <div className={s.order_main_column}>
                        <div>Дата создания</div>
                        <div>{formatIsoToDate(order.dateCreated)} {formatIsoToTime(order.dateCreated)}</div>
                    </div>
                    <div className={s.order_main_column}>
                        <div>Дата закрытия</div>
                        <div>{order.dateClosed && `${formatIsoToDate(order.dateCreated)} ${formatIsoToTime(order.dateCreated)}` || "Не закрыт"}</div>
                    </div>
                    <div className={s.order_main_column}>
                        <div>Стоимость</div>
                        <div>{summary} руб.</div>
                    </div>
                    <div className={s.order_main_column}>
                        <div>Статус</div>
                        <div>{order.status.name}</div>
                    </div>
                    <div className={s.order_main_column}>
                        <div>Пункт выдачи</div>
                        <div>{order.picUpPoint && order.picUpPoint.name || "Курьером"}</div>
                    </div>
                </div>
                <Collapse isOpen={currentOrderId === order.id} ref={collapseRef}>
                    <div className={s.order_full}></div>
                    {order.productsInOrders.map(item => <BasketProductItem key={item.id} product={({
                        ...item.product,
                        count: item.count
                    })}/>)}
                </Collapse>
            </div>
        </Fade>
    )
}