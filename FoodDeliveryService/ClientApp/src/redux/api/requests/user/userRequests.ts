import {instanceAxiosClose, instanceAxiosOpen} from "../../instance.axios";
import {paths} from "../../paths";
import {IClientBody, IWorkerBody, TGetSortedClients, TGetSortedWorkers, TGetUserInfo} from "./types.data";

export const userRequests = () => ({
    open: () => ({
        createClient: (body: IClientBody) => {
            return instanceAxiosOpen().post(paths.clients.list, body)
        }
    }),
    close: (token: string | null) => ({
        getClientInfo: (body: string | null) => {
            return instanceAxiosClose(token).get(`${paths.clients.list}/${body}`)
        },
        getWorkerInfo: (body: string | null) => {
            return instanceAxiosClose(token).get(`${paths.workers.list}/${body}`)
        },
        getClientsList: (body: TGetUserInfo) => {
            return instanceAxiosClose(token).get(body.searchValue
                ? `${paths.clients.list}?searchValue=${body.searchValue}`
                : paths.clients.list)
        },
        getWorkersList: (body: TGetUserInfo) => {
            return instanceAxiosClose(token).get(body.searchValue
                ? `${paths.workers.list}?searchValue=${body.searchValue}`
                : paths.workers.list)
        },
        createWorker: (body: IWorkerBody) => {
            return instanceAxiosClose(token).post(paths.workers.list, body)
        },
        getSortedClientsList: (body: TGetSortedClients) => {
            return instanceAxiosClose(token).get(`${paths.clients.sort}?isAsc=${body.isAsc}&sortState=${body.sortState}`)
        },
        getSortedWorkersList: (body: TGetSortedWorkers) => {
            return instanceAxiosClose(token).get(`${paths.workers.sort}?isAsc=${body.isAsc}&sortState=${body.sortField}`)
        }
    }),
})