import {INavigationItem} from "../../../globalTypes";
import {SET_CURRENT_ROOT_PAGE_ACTION} from "../types";

export interface ISetCurrentRootPage {(payload: INavigationItem): SET_CURRENT_ROOT_PAGE_ACTION}