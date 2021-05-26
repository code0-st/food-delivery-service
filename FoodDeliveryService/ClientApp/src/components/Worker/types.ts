import {IOrder} from "../../redux/reducers/orders/types.data";
import {setOrdersList} from "../../redux/reducers/orders/actions/actions";
import {ISetOrdersList} from "../../redux/reducers/orders/actions/types";
import {getClientsListAsync} from "../../redux/reducers/user/actions";
import {setClientsList} from "../../redux/reducers/user/actions/actions";
import {IClient, IWorker} from "../../redux/reducers/user/types.data";
import {ISetClientsList, ISetWorkersList} from "../../redux/reducers/user/actions/types";

interface IWorkerPageProps {
    searchValue: string
    createModalOpen: boolean
    closeCreateModalHandler: any
}

export interface IWorkersPageProps extends IWorkerPageProps {
    workersList: IWorker[]
    workersListLoading: boolean
    getWorkersListAsync: any
    setWorkersList: ISetWorkersList
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
    clientsList: IClient[]
    clientsListLoading: boolean
    getClientsListAsync: any
    setClientsList: ISetClientsList
}

export interface ICatalogsPageProps extends IWorkerPageProps {
}