import {
    ENUMS_ACTIONS,
    SET_CATALOGS,
    SET_CATALOGS_LOADING,
    SET_DEPARTMENTS,
    SET_DEPARTMENTS_LOADING,
    SET_ORDER_STATUSES,
    SET_ORDER_STATUSES_LOADING,
    SET_POSITIONS,
    SET_POSITIONS_LOADING,
    TEnumsReducer
} from "./types";

const initialState: TEnumsReducer = {
    departments: [],
    positions: [],
    catalogs: [],
    orderStatuses: [],
    loadings: {
        catalogsLoading: false,
        departmentsLoading: false,
        orderStatusesLoading: false,
        positionsLoading: false,
    }
}

export const enumsReducer = (state = initialState, action: ENUMS_ACTIONS) => {
    switch (action.type) {
        case SET_CATALOGS: {
            return {
                ...state,
                catalogs: action.payload
            }
        }
        case SET_ORDER_STATUSES: {
            return {
                ...state,
                orderStatuses: action.payload
            }
        }
        case SET_DEPARTMENTS: {
            return {
                ...state,
                departments: action.payload
            }
        }
        case SET_POSITIONS: {
            return {
                ...state,
                positions: action.payload
            }
        }
        case SET_CATALOGS_LOADING: {
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    catalogsLoading: action.payload
                }
            }
        }
        case SET_ORDER_STATUSES_LOADING: {
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    orderStatusesLoading: action.payload
                }
            }
        }
        case SET_DEPARTMENTS_LOADING: {
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    departmentsLoading: action.payload
                }
            }
        }
        case SET_POSITIONS_LOADING: {
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    positionsLoading: action.payload
                }
            }
        }
        default:
            return state
    }
}