import {instanceAxiosClose, instanceAxiosOpen} from "../../instance.axios";
import {paths} from "../../paths";
import {TCreateCatalog, TEditCatalog, TRemoveCatalog} from "./types.data";

export const enumsRequests = () => ({
    open: () => ({
        getCatalogs: () => {
            return instanceAxiosOpen().get(paths.enums.catalogs)
        },
    }),
    close: (token: string | null) => ({
        getPositions: () => {
            return instanceAxiosClose(token).get(paths.enums.positions)
        },
        getDepartments: () => {
            return instanceAxiosClose(token).get(paths.enums.departments)
        },
        getOrderStatuses: () => {
            return instanceAxiosClose(token).get(paths.enums.orderStatus)
        },
        editCatalog: (body: TEditCatalog) => {
            return instanceAxiosClose(token).put(`${paths.enums.catalogs}/${body.id}`, body)
        },
        createCatalog: (body: TCreateCatalog) => {
            return instanceAxiosClose(token).post(paths.enums.catalogs, body)
        },
        removeCatalog: (body: TRemoveCatalog) => {
            return instanceAxiosClose(token).delete(`${paths.enums.catalogs}/${body.id}`)
        }
    }),
})