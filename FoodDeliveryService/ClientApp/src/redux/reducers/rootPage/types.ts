import {INavigationItem} from "../../globalTypes";

export type TRootPageReducer = {
    internalPages: INavigationItem[]
}

export const SET_CURRENT_ROOT_PAGE = 'SET_CURRENT_ROOT_PAGE'
export type SET_CURRENT_ROOT_PAGE_ACTION = {
    type: typeof SET_CURRENT_ROOT_PAGE,
    payload: INavigationItem
}

export type ROOT_PAGE_ACTIONS =
    | SET_CURRENT_ROOT_PAGE_ACTION