import {instanceAxiosClose} from "../../instance.axios";
import {paths} from "../../paths";

export const userRequests = () => ({
    open: () => ({}),
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
        }
    }),
})