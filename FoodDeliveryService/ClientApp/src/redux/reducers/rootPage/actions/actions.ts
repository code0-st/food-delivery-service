import {ISetCurrentRootPage} from "./types";
import {SET_CURRENT_ROOT_PAGE} from "../types";

export const setCurrentRootPage: ISetCurrentRootPage = payload => ({
    type: SET_CURRENT_ROOT_PAGE,
    payload
})