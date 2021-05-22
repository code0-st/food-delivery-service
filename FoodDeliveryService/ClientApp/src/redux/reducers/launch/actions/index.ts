import {setInitAppLoading} from "./actions";
import {getUserInfoAsync} from "../../user/actions";

function loginRedirect() {
    if(!window.location.pathname.includes('/login')) {
        window.location.pathname = '/login'
    }
}
export const initAppWorker = (id: string | null, role: string | null) => (dispatch: any) => {
    try {
        dispatch(setInitAppLoading(true))
        dispatch(getUserInfoAsync(id, role))
    } catch (e) {
        loginRedirect()
    }
    dispatch(setInitAppLoading(false))
}