import {ISetCreateModalOpen, ISetCurrentRootPage, ISetCurrentRootPageWorker, ISetSearchValue} from "./types";
import {SET_CREATE_MODAL_OPEN, SET_CURRENT_ROOT_PAGE, SET_CURRENT_ROOT_PAGE_WORKER, SET_SEARCH_VALUE} from "../types";

export const setCurrentRootPage: ISetCurrentRootPage = payload => ({
    type: SET_CURRENT_ROOT_PAGE,
    payload
})
export const setCurrentRootPageWorker: ISetCurrentRootPageWorker = payload => ({
    type: SET_CURRENT_ROOT_PAGE_WORKER,
    payload
})
export const setSearchValue: ISetSearchValue = payload => ({
    type: SET_SEARCH_VALUE,
    payload
})
export const setCreateModalOpen: ISetCreateModalOpen = payload => ({
    type: SET_CREATE_MODAL_OPEN,
    payload
})