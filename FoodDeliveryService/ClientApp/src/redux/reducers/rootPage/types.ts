import {INavigationItem} from "../../globalTypes";

export type TRootPageReducer = {
    internalPages: INavigationItem[],
    workersInternalPage: INavigationItem[],
    searchValue: string,
    createModalOpen: boolean
}

export const SET_CURRENT_ROOT_PAGE = 'SET_CURRENT_ROOT_PAGE'
export const SET_CURRENT_ROOT_PAGE_WORKER = 'SET_CURRENT_ROOT_PAGE_WORKER'
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
export const SET_CREATE_MODAL_OPEN = 'SET_CREATE_MODAL_OPEN'

export type SET_CURRENT_ROOT_PAGE_ACTION = {
    type: typeof SET_CURRENT_ROOT_PAGE,
    payload: INavigationItem
}
export type SET_CURRENT_ROOT_PAGE_WORKER_ACTION = {
    type: typeof SET_CURRENT_ROOT_PAGE_WORKER,
    payload: INavigationItem
}
export type SET_SEARCH_VALUE_ACTION = {
    type: typeof SET_SEARCH_VALUE,
    payload: string
}
export type SET_CREATE_MODAL_OPEN_ACTION = {
    type: typeof SET_CREATE_MODAL_OPEN,
    payload: boolean
}

export type ROOT_PAGE_ACTIONS =
    | SET_CURRENT_ROOT_PAGE_ACTION
    | SET_CURRENT_ROOT_PAGE_WORKER_ACTION
    | SET_SEARCH_VALUE_ACTION
    | SET_CREATE_MODAL_OPEN_ACTION