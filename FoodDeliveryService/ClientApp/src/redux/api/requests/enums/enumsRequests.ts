import {instanceAxiosOpen} from "../../instance.axios";
import {paths} from "../../paths";

export const enumsRequests = () => ({
    open: () => ({
        getCatalogs: () => {
            return instanceAxiosOpen().get(paths.enums.catalogs)
        },
        getDepartments: () => {
            return instanceAxiosOpen().get(paths.enums.departments)
        },
        getOrderStatuses: () => {
            return instanceAxiosOpen().get(paths.enums.orderStatus)
        },
        getPositions: () => {
            return instanceAxiosOpen().get(paths.enums.positions)
        }
    }),
    close: (token: string | null) => ({}),
})