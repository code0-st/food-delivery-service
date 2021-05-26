import {
    ROOT_PAGE_ACTIONS,
    SET_CREATE_MODAL_OPEN,
    SET_CURRENT_ROOT_PAGE,
    SET_CURRENT_ROOT_PAGE_WORKER,
    SET_SEARCH_VALUE,
    TRootPageReducer
} from "./types";
import {ROUTE_PATHS} from "../../../routers/paths.main";

const initialState: TRootPageReducer = {
    internalPages: [
        {id: 1, title: 'Главная', link: ROUTE_PATHS.products.path, isCurrent: true},
        {id: 2, title: 'Меню', link: ROUTE_PATHS.catalogs.path, isCurrent: false},
        {id: 3, title: 'Контакты', link: ROUTE_PATHS.contacts, isCurrent: false},
    ],
    workersInternalPage: [
        {id: 1, title: 'Заказы', link: ROUTE_PATHS.worker.orders, isCurrent: true},
        {id: 2, title: 'Клиенты', link: ROUTE_PATHS.worker.clients, isCurrent: false},
        {id: 3, title: 'Каталоги', link: ROUTE_PATHS.worker.catalogs, isCurrent: false},
        {id: 4, title: 'Продукты', link: ROUTE_PATHS.worker.products, isCurrent: false},
        {id: 5, title: 'Сотрудники', link: ROUTE_PATHS.worker.workers, isCurrent: false},
    ],
    createModalOpen: false,
    searchValue: '',
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
        case SET_CURRENT_ROOT_PAGE_WORKER: {
            return {
                ...state,
                workersInternalPage: state.workersInternalPage.map(item => ({
                    ...item,
                    isCurrent: item.id == action.payload.id
                }))
            }
        }
        case SET_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: action.payload
            }
        }
        case SET_CREATE_MODAL_OPEN: {
            return {
                ...state,
                createModalOpen: action.payload
            }
        }
        default: return state
    }
}