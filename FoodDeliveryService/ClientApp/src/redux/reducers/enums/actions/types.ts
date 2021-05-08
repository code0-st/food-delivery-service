import {
    // GET_CATALOGS_ACTION,
    // GET_DEPARTMENTS_ACTION,
    // GET_ORDER_STATUSES_ACTION,
    // GET_POSITIONS_ACTION,
    SET_CATALOGS_ACTION,
    SET_CATALOGS_LOADING_ACTION,
    SET_DEPARTMENTS_ACTION, SET_DEPARTMENTS_LOADING_ACTION,
    SET_ORDER_STATUSES_ACTION, SET_ORDER_STATUSES_LOADING_ACTION,
    SET_POSITIONS_ACTION, SET_POSITIONS_LOADING_ACTION
} from "../types";
import {TEnumItem} from "../types.data";

// export interface IGetCatalogs {(): GET_CATALOGS_ACTION}
// export interface IGetDepartments {(): GET_DEPARTMENTS_ACTION}
// export interface IGetOrderStatuses {(): GET_ORDER_STATUSES_ACTION}
// export interface IGetPositions {(): GET_POSITIONS_ACTION}

export interface ISetCatalogs {(payload: TEnumItem[]): SET_CATALOGS_ACTION}
export interface ISetDepartments {(payload: TEnumItem[]): SET_DEPARTMENTS_ACTION}
export interface ISetOrderStatuses {(payload: TEnumItem[]): SET_ORDER_STATUSES_ACTION}
export interface ISetPositions {(payload: TEnumItem[]): SET_POSITIONS_ACTION}

export interface ISetCatalogsLoading {(payload: boolean): SET_CATALOGS_LOADING_ACTION}
export interface ISetDepartmentsLoading {(payload: boolean): SET_DEPARTMENTS_LOADING_ACTION}
export interface ISetOrderStatusesLoading {(payload: boolean): SET_ORDER_STATUSES_LOADING_ACTION}
export interface ISetPositionsLoading {(payload: boolean): SET_POSITIONS_LOADING_ACTION}