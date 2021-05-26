import {IOrder} from "../../redux/reducers/orders/types.data";
import {setOrdersList} from "../../redux/reducers/orders/actions/actions";
import {ISetOrdersList} from "../../redux/reducers/orders/actions/types";

interface IWorkerPageProps {
    searchValue: string
    createModalOpen: boolean
    closeCreateModalHandler: any
}

export interface IWorkersPageProps extends IWorkerPageProps {
}

export interface IProductsPageProps extends IWorkerPageProps {
}

export interface IOrdersPageProps extends IWorkerPageProps {
    getOrdersListAsync: any
    ordersList: IOrder[]
    ordersListLoading: boolean
    setOrdersList: ISetOrdersList,
}

export interface IClientsPageProps extends IWorkerPageProps {
}

export interface ICatalogsPageProps extends IWorkerPageProps {
}