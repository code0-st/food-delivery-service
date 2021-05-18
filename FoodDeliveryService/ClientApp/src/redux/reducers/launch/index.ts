import {LAUNCH_ACTIONS, SET_INIT_APP_LOADING} from "./types";

export type TLaunchReducer = {
    appLoading: boolean
}

const initialState: TLaunchReducer = {
    appLoading: false,
}

export const launchReducer = (state = initialState, action: LAUNCH_ACTIONS) => {
    switch (action.type) {
        case SET_INIT_APP_LOADING: {
            return {
                ...state,
                appLoading: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
