import {ROOT_PAGE_ACTIONS, SET_CURRENT_ROOT_PAGE, TRootPageReducer} from "./types";
import {ROUTE_PATHS} from "../../../routers/paths.main";

const initialState: TRootPageReducer = {
    internalPages: [
        {id: 1, title: 'Главная', link: ROUTE_PATHS.products.path, isCurrent: true},
        {id: 2, title: 'Меню', link: ROUTE_PATHS.catalogs.path, isCurrent: false},
        {id: 3, title: 'Контакты', link: ROUTE_PATHS.contacts, isCurrent: false},
    ]
}

export const rootPageReducer = (state = initialState, action: ROOT_PAGE_ACTIONS) => {
    switch (action.type) {
        case SET_CURRENT_ROOT_PAGE: {
            return {
                ...state,
                internalPages: state.internalPages.map(item => ({
                    ...item,
                    isCurrent: item.id === action.payload.id
                }))
            }
        }
        default: return state
    }
}