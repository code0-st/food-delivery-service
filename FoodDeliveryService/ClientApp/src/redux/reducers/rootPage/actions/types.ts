import {INavigationItem} from "../../../globalTypes";
import {
    SET_CREATE_MODAL_OPEN_ACTION,
    SET_CURRENT_ROOT_PAGE_ACTION,
    SET_CURRENT_ROOT_PAGE_WORKER_ACTION,
    SET_SEARCH_VALUE_ACTION
} from "../types";

export interface ISetCurrentRootPage {(payload: INavigationItem): SET_CURRENT_ROOT_PAGE_ACTION}
export interface ISetCurrentRootPageWorker {(payload: INavigationItem): SET_CURRENT_ROOT_PAGE_WORKER_ACTION}
export interface ISetSearchValue {(payload: string): SET_SEARCH_VALUE_ACTION}
export interface ISetCreateModalOpen {(payload: boolean): SET_CREATE_MODAL_OPEN_ACTION}