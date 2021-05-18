import {IRequestLogin} from "./types";
import {setLoginLoading} from "./actions";
import {instance} from "../../../api";
import {keys} from "../../../api/keys";
import {initAppWorker} from "../../launch/actions";
import {saveUserRole} from "../../../../helpers/helpers";
import {history} from "../../../../index";

export const loginAsync: IRequestLogin = payload => async (dispatch: any) => {
    const main = keys.main
    await dispatch(setLoginLoading(true))
    await instance().open().login(payload)
        .then(res => {
            history.push('/')
            localStorage.setItem(main, res.data.access_token)
            saveUserRole(res.data.userRole)
            dispatch(initAppWorker(res.data.id, res.data.userRole))
        })
        .catch(err => {
        })
    await dispatch(setLoginLoading(false))
}