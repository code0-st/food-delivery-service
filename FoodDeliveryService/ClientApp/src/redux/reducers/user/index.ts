import {
    SET_CLIENTS_LIST,
    SET_CLIENTS_LIST_LOADING,
    SET_CREATE_USER_LOADING,
    SET_USER_INFO,
    SET_USER_INFO_LOADING,
    SET_WORKERS_LIST,
    SET_WORKERS_LIST_LOADING,
    TUserReducer,
    USER_ACTIONS
} from "./types";

const initialState: TUserReducer = {
    userInfo: null,
    clientsList: [],
    workersList: [],
    loadings: {
        userInfoLoading: false,
        createUserLoading: false,
        clientsListLoading: false,
        workersListLoading: false,
    }
}

export const userReducer = (state = initialState, action: USER_ACTIONS) => {
    switch (action.type) {
        case SET_USER_INFO: {
            return {
                ...state,
                userInfo: action.payload
            }
        }
        case SET_USER_INFO_LOADING: {
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    userInfoLoading: action.payload
                }
            }
        }
        case SET_CLIENTS_LIST: {
            return {
                ...state,
                clientsList: action.payload
            }
        }
        case SET_WORKERS_LIST: {
            return {
                ...state,
                workersList: action.payload
            }
        }
        case SET_CLIENTS_LIST_LOADING: {
            return {
                ...state,
                loadings: {
                    ...state,
                    clientsListLoading: action.payload
                }
            }
        }
        case SET_WORKERS_LIST_LOADING: {
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    workersListLoading: action.payload
                }
            }
        }
        case SET_CREATE_USER_LOADING: {
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    createUserLoading: action.payload
                }
            }
        }
        default:
            return state
    }
}