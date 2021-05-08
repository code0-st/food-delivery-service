import {TEnumItem} from "./types.data";

export type TEnumsReducer = {
    catalogs: TEnumItem[]
    orderStatuses: TEnumItem[]
    departments: TEnumItem[]
    positions: TEnumItem[]
    loadings: {
        catalogsLoading: boolean
        orderStatusesLoading: boolean
        departmentsLoading: boolean
        positionsLoading: boolean
    }
}

// action types
// export const GET_CATALOGS = 'GET_CATALOGS'
// export const GET_ORDER_STATUSES = 'GET_ORDER_STATUSES'
// export const GET_DEPARTMENTS = 'GET_DEPARTMENTS'
// export const GET_POSITIONS = 'GET_POSITIONS'

export const SET_CATALOGS = 'SET_CATALOGS'
export const SET_CATALOGS_LOADING = 'SET_CATALOGS_LOADING'

export const SET_ORDER_STATUSES = 'SET_ORDER_STATUSES'
export const SET_ORDER_STATUSES_LOADING = 'SET_ORDER_STATUSES_LOADING'

export const SET_DEPARTMENTS = 'SET_DEPARTMENTS'
export const SET_DEPARTMENTS_LOADING = 'SET_DEPARTMENTS_LOADING'

export const SET_POSITIONS = 'SET_POSITIONS'
export const SET_POSITIONS_LOADING = 'SET_POSITIONS_LOADING'

// action creators types
// export type GET_CATALOGS_ACTION = { type: typeof GET_CATALOGS }
// export type GET_ORDER_STATUSES_ACTION = { type: typeof GET_ORDER_STATUSES }
// export type GET_DEPARTMENTS_ACTION = { type: typeof GET_DEPARTMENTS }
// export type GET_POSITIONS_ACTION = { type: typeof GET_POSITIONS, }

export type SET_CATALOGS_ACTION = {
    type: typeof SET_CATALOGS,
    payload: TEnumItem[]
}
export type SET_CATALOGS_LOADING_ACTION = {
    type: typeof SET_CATALOGS_LOADING,
    payload: boolean
}
export type SET_ORDER_STATUSES_ACTION = {
    type: typeof SET_ORDER_STATUSES,
    payload: TEnumItem[]
}
export type SET_ORDER_STATUSES_LOADING_ACTION = {
    type: typeof SET_ORDER_STATUSES_LOADING,
    payload: boolean
}
export type SET_DEPARTMENTS_ACTION = {
    type: typeof SET_DEPARTMENTS,
    payload: TEnumItem[]
}
export type SET_DEPARTMENTS_LOADING_ACTION = {
    type: typeof SET_DEPARTMENTS_LOADING,
    payload: boolean
}
export type SET_POSITIONS_ACTION = {
    type: typeof SET_POSITIONS,
    payload: TEnumItem[]
}
export type SET_POSITIONS_LOADING_ACTION = {
    type: typeof SET_POSITIONS_LOADING,
    payload: boolean
}

export type ENUMS_ACTIONS =
    | SET_CATALOGS_ACTION
    | SET_CATALOGS_LOADING_ACTION
    | SET_ORDER_STATUSES_ACTION
    | SET_ORDER_STATUSES_LOADING_ACTION
    | SET_DEPARTMENTS_ACTION
    | SET_DEPARTMENTS_LOADING_ACTION
    | SET_POSITIONS_ACTION
    | SET_POSITIONS_LOADING_ACTION