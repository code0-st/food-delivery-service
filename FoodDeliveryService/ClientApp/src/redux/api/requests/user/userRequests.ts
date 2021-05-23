import {instanceAxiosClose, instanceAxiosOpen} from "../../instance.axios";
import {paths} from "../../paths";
import {IClientBody, IWorkerBody} from "./types.data";

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
        getClientsList: () => {
            return instanceAxiosClose(token).get(paths.clients.list)
        },
        getWorkersList: () => {
            return instanceAxiosClose(token).get(paths.workers.list)
        },
        createWorker: (body: IWorkerBody) => {
            return instanceAxiosClose(token).post(paths.workers.list, body)
        },
    }),
})