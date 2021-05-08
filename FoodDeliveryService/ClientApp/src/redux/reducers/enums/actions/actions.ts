import {
    // IGetCatalogs, IGetDepartments, IGetOrderStatuses, IGetPositions,
    ISetCatalogs, ISetCatalogsLoading, ISetDepartments, ISetDepartmentsLoading,
    ISetOrderStatuses, ISetOrderStatusesLoading, ISetPositions, ISetPositionsLoading
} from "./types";
import {
    // GET_CATALOGS, GET_DEPARTMENTS, GET_ORDER_STATUSES, GET_POSITIONS,
    SET_CATALOGS, SET_CATALOGS_LOADING, SET_DEPARTMENTS, SET_DEPARTMENTS_LOADING,
    SET_ORDER_STATUSES, SET_ORDER_STATUSES_LOADING, SET_POSITIONS, SET_POSITIONS_LOADING
} from "../types";

// export const getCatalogs: IGetCatalogs = () => ({
//     type: GET_CATALOGS
// })
// export const getDepartments: IGetDepartments = () => ({
//     type: GET_DEPARTMENTS
// })
// export const getOrderStatuses: IGetOrderStatuses = () => ({
//     type: GET_ORDER_STATUSES
// })
// export const getPositions: IGetPositions = () => ({
//     type: GET_POSITIONS
// })
export const setCatalogs: ISetCatalogs = payload => ({
    type: SET_CATALOGS,
    payload
})
export const setDepartments: ISetDepartments = payload => ({
    type: SET_DEPARTMENTS,
    payload
})
export const setOrderStatuses: ISetOrderStatuses = payload => ({
    type: SET_ORDER_STATUSES,
    payload
})
export const setPositions: ISetPositions = payload => ({
    type: SET_POSITIONS,
    payload
})
export const setCatalogsLoading: ISetCatalogsLoading = payload => ({
    type: SET_CATALOGS_LOADING,
    payload
})
export const setDepartmentsLoading: ISetDepartmentsLoading = payload => ({
    type: SET_DEPARTMENTS_LOADING,
    payload
})
export const setOrderStatusesLoading: ISetOrderStatusesLoading = payload => ({
    type: SET_ORDER_STATUSES_LOADING,
    payload
})
export const setPositionsLoading: ISetPositionsLoading = payload => ({
    type: SET_POSITIONS_LOADING,
    payload
})