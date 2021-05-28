import {IOrder} from "../../redux/reducers/orders/types.data";
import {setOrdersList} from "../../redux/reducers/orders/actions/actions";
import {IGetOrdersSorted, ISetOrdersList, ISetOrderStatus} from "../../redux/reducers/orders/actions/types";
import {getClientsListAsync, getSortedClientsAsync} from "../../redux/reducers/user/actions";
import {setClientsList} from "../../redux/reducers/user/actions/actions";
import {IClient, IWorker} from "../../redux/reducers/user/types.data";
import {
    IGetSearchUsers,
    IGetSortedClients, IGetSortedWorkers,
    ISetClientsList,
    ISetWorkersList
} from "../../redux/reducers/user/actions/types";
import {getOrdersListSorted, setOrderStatusAsync} from "../../redux/reducers/orders/actions";
import {TEnumItem} from "../../redux/reducers/enums/types.data";

interface IWorkerPageProps {
    searchValue: string
    createModalOpen: boolean
    closeCreateModalHandler: any
}

export interface IWorkersPageProps extends IWorkerPageProps {
    workersList: IWorker[]
    workersListLoading: boolean
    getWorkersListAsync: IGetSearchUsers
    setWorkersList: ISetWorkersList
    getSortedWorkersAsync: IGetSortedWorkers
}

export interface IProductsPageProps extends IWorkerPageProps {
}

export interface IOrdersPageProps extends IWorkerPageProps {
    orderStatuses: TEnumItem[]
    getOrdersListAsync: any
    ordersList: IOrder[]
    ordersListLoading: boolean
    setOrdersList: ISetOrdersList,
    getOrdersListSorted: IGetOrdersSorted
    setOrderStatusAsync: ISetOrderStatus
}

export interface IClientsPageProps extends IWorkerPageProps {
    clientsList: IClient[]
    clientsListLoading: boolean
    getClientsListAsync: IGetSearchUsers
    setClientsList: ISetClientsList
    getSortedClientsAsync: IGetSortedClients
}

export interface ICatalogsPageProps extends IWorkerPageProps {
}