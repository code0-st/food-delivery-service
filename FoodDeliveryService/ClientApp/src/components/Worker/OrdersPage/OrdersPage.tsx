import React, {useEffect, useState} from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {IOrdersPageProps} from "../types";
import {getOrdersListAsync} from "../../../redux/reducers/orders/actions";
import {Loading} from "../../common/Loading/Loading";
import {setOrdersList} from "../../../redux/reducers/orders/actions/actions";
import {
    Collapse,
    IconButton,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {IOrder} from "../../../redux/reducers/orders/types.data";
import {formatIsoToDate, formatIsoToTime} from "../../../utils/utils";
import {Pagination} from "@material-ui/lab";

const s = require('../style.module.scss')

const OrdersPage: React.FC<IOrdersPageProps> = ({
                                                    ordersList,
                                                    ordersListLoading,
                                                    getOrdersListAsync,
                                                    searchValue,
                                                    createModalOpen,
                                                    closeCreateModalHandler,
                                                    setOrdersList,
                                                }) => {
    useEffect(() => {
        getOrdersListAsync()
        return () => {
            setOrdersList([])
        }
    }, [])
    const PAGE_SIZE = 6
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(1)
    useEffect(() => {
        if (ordersList.length) {
            setPageCount(Math.ceil(ordersList.length / PAGE_SIZE))
        }
    }, [ordersList])
    return (
        <div className={s.worker_page}>
            {ordersListLoading
                ? <Loading/>
                : ordersList && ordersList.length && <TableContainer component={Paper}>
                <Table stickyHeader aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell>ID</TableCell>
                            <TableCell>Дата создания</TableCell>
                            <TableCell>Дата закрытия</TableCell>
                            <TableCell>Стоимость</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Клиент</TableCell>
                            <TableCell>Адрес</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ordersList
                            .filter((item, index) => index >= PAGE_SIZE * (currentPage - 1) && index < PAGE_SIZE * currentPage)
                            .map((row, index) => {
                                    if (index < PAGE_SIZE * currentPage) {
                                        return <Row key={row.id} row={row}/>

                                    }
                                }
                            )}
                    </TableBody>
                </Table>
            </TableContainer>}
            <div className={s.pagination}>
                <Pagination count={pageCount}
                            page={currentPage}
                            onChange={(event, page) => setCurrentPage(page)}
                            variant="outlined"
                            shape="rounded"/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({
    ordersList: state.orders.ordersList,
    ordersListLoading: state.orders.loadings.ordersListLoading,
})
const mapDispatchToProps = {
    getOrdersListAsync,
    setOrdersList,
}

export const OrdersPageContainer = connect(mapStateToProps, mapDispatchToProps)(OrdersPage)

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props: { row: IOrder }) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    const summary = row.productsInOrders.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.count * currentValue.product.price
    }, 0)

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell>{formatIsoToDate(row.dateCreated)} {formatIsoToTime(row.dateCreated)}</TableCell>
                <TableCell>{
                    row.dateClosed
                        ? `${formatIsoToDate(row.dateClosed)} ${formatIsoToTime(row.dateClosed)}`
                        : 'Заказ открыт'}</TableCell>
                <TableCell>{summary} руб.</TableCell>
                <TableCell>{row.status.name}</TableCell>
                <TableCell>{row.client.lastName + ' ' + row.client.firstName}</TableCell>
                <TableCell>{row.client.address}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Table size="medium" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Наименование</TableCell>
                                    <TableCell>Цена</TableCell>
                                    <TableCell>Вес</TableCell>
                                    <TableCell>Количество</TableCell>
                                    <TableCell>Стоимость</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {row.productsInOrders.map((historyRow) => (
                                    <TableRow key={historyRow.id}>
                                        <TableCell component="th" scope="row">
                                            {historyRow.product.name}
                                        </TableCell>
                                        <TableCell>{historyRow.product.price} руб.</TableCell>
                                        <TableCell>{historyRow.product.weight} г</TableCell>
                                        <TableCell>{historyRow.count} шт.</TableCell>
                                        <TableCell>
                                            {historyRow.count * historyRow.product.price} руб.
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
