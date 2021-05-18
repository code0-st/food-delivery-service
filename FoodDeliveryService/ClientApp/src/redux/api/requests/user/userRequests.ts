import {instanceAxiosClose} from "../../instance.axios";
import {paths} from "../../paths";

export const userRequests = () => ({
    open: () => ({}),
    close: (token: string | null) => ({
        getClientInfo: (body: number) => {
            return instanceAxiosClose(token).get(paths.clients + `/${body}`)
        },
        getWorkerInfo: (body: number) => {
            return instanceAxiosClose(token).get(paths.workers + `/${body}`)
        },
        getClientsList: () => {
            return instanceAxiosClose(token).get(paths.clients)
        },
        getWorkersList: () => {
            return instanceAxiosClose(token).get(paths.workers)
        }
    }),
})