import React, {useEffect, useState} from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {IOrdersPageProps} from "../types";
import {getOrdersListAsync, getOrdersListSorted, setOrderStatusAsync} from "../../../redux/reducers/orders/actions";
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
import {TGetOrdersSorted} from "../../../redux/api/requests/orders/types.data";
import {SimpleSelect} from "../../common/Fields/Selects/SimpleSelect";
import {TEnumItem} from "../../../redux/reducers/enums/types.data";
import clsx from "clsx";
import {ISetOrderStatus} from "../../../redux/reducers/orders/actions/types";

const s = require('../style.module.scss')

const OrdersPage: React.FC<IOrdersPageProps> = ({
                                                    ordersList,
                                                    ordersListLoading,
                                                    getOrdersListAsync,
                                                    searchValue,
                                                    createModalOpen,
                                                    closeCreateModalHandler,
                                                    setOrdersList,
                                                    getOrdersListSorted,
                                                    orderStatuses,
                                                    setOrderStatusAsync,
                                                }) => {
    useEffect(() => {
        getOrdersListAsync()
        return () => {
            setOrdersList([])
        }
    }, [])
    const PAGE_SIZE = 8
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(1)
    const [sortBody, setSortBody] = useState<TGetOrdersSorted | null>(null)

    useEffect(() => {
        if (ordersList.length) {
            setPageCount(Math.ceil(ordersList.length / PAGE_SIZE))
        }
    }, [ordersList])
    useEffect(() => {
        if (sortBody) {
            getOrdersListSorted(sortBody)
        }
    }, [sortBody])
    return (
        <div className={clsx(s.worker_page, !ordersListLoading && s.worker_page_scroll)}>
            {ordersListLoading
                ? <Loading/>
                : ordersList && ordersList.length && <TableContainer component={Paper}>
                <Table stickyHeader aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell onClick={() => setSortBody({
                                isAsc: sortBody ? !sortBody.isAsc : true,
                                field: "Id",
                            })}>ID</TableCell>
                            <TableCell onClick={() => setSortBody({
                                isAsc: sortBody ? !sortBody.isAsc : true,
                                field: "DateCreated",
                            })}>Дата создания</TableCell>
                            <TableCell>Дата закрытия</TableCell>
                            <TableCell>Стоимость</TableCell>
                            <TableCell onClick={() => setSortBody({
                                isAsc: sortBody ? !sortBody.isAsc : true,
                                field: "Status",
                            })}>Статус</TableCell>
                            <TableCell>Клиент</TableCell>
                            <TableCell>Адрес</TableCell>
                            <TableCell size={"medium"}/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ordersList
                            .filter((item, index) => index >= PAGE_SIZE * (currentPage - 1) && index < PAGE_SIZE * currentPage)
                            .map((row, index) => {
                                    if (index < PAGE_SIZE * currentPage) {
                                        return <Row key={row.id}
                                                    row={row}
                                                    setOrderStatusAsync={setOrderStatusAsync}
                                                    orderStatuses={orderStatuses}/>

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
    orderStatuses: state.enums.orderStatuses,
    ordersList: state.orders.ordersList,
    ordersListLoading: state.orders.loadings.ordersListLoading,
})
const mapDispatchToProps = {
    getOrdersListAsync,
    setOrdersList,
    getOrdersListSorted,
    setOrderStatusAsync,
}

export const OrdersPageContainer = connect(mapStateToProps, mapDispatchToProps)(OrdersPage)

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props: { row: IOrder, orderStatuses: TEnumItem[], setOrderStatusAsync: ISetOrderStatus }) {
    const {row, orderStatuses, setOrderStatusAsync} = props;
    const [open, setOpen] = React.useState(false);
    const [selectedStatusId, setSelectedStatusId] = useState<number | null>(null)
    const classes = useRowStyles();

    const summary = row.productsInOrders.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.count * currentValue.product.price
    }, 0)

    useEffect(() => {
        if(selectedStatusId) {
            setOrderStatusAsync({
                id: row.id,
                statusId: selectedStatusId
            })
        }
    }, [selectedStatusId])

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
                <TableCell>
                    <SimpleSelect value={selectedStatusId}
                                  items={orderStatuses}
                                  onChange={setSelectedStatusId}/>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={9}>
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
