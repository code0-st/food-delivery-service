import React, {useEffect, useState} from "react";
import {IOrdersProps} from "./types";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {getClientOrdersList} from "../../../redux/reducers/orders/actions";
import {Loading} from "../../common/Loading/Loading";
import {OrdersListItem} from "./OrdersListItem";

const s = require('./styles.module.scss')
const Orders: React.FC<IOrdersProps> = ({
                                            userInfo,
                                            getClientOrdersList,
                                            ordersList,
                                            ordersListLoading,
                                        }) => {
    useEffect(() => {
        if (userInfo) {
            getClientOrdersList({clientId: userInfo.id})
        }
    }, [])
    const [currentOrderId, setCurrentOrderId] = useState<number | null>(null)
    return (
        <div className={s.orders}>
            {ordersListLoading
                ? <Loading/>
                : <div className={s.orders_body}>
                    {ordersList && ordersList.length > 0
                    && ordersList.map((item, index) => <OrdersListItem key={item.id}
                                                                       currentOrderId={currentOrderId}
                                                                       setCurrentOrderId={setCurrentOrderId}
                                                                       order={item}
                                                                       index={index}/>)}
                </div>}
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({
    userInfo: state.user.userInfo,
    ordersList: state.orders.ordersList,
    ordersListLoading: state.orders.loadings.ordersListLoading,
})
const mapDispatchToProps = {
    getClientOrdersList
}

export const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders)