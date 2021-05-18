import {all, call, put, takeEvery } from "redux-saga/effects";
import {INIT_APP} from "../types";
import {instance} from "../../../api";
import {setInitAppLoading} from "./actions";
import {userInfoWorker} from "../../user/actions";
import {getCountryPhoneCodesWorker} from "../../enums/actions";

export function* launchWatcher() {
    yield takeEvery(INIT_APP, initAppWorker);
}

function loginRedirect() {
    if(!window.location.pathname.includes('/login')) {
        window.location.pathname = '/login'
    }
}
function* initAppWorker() {
    try {
        const res = yield refreshTokenAsync().next().value;
        const hasToken = res?.data?.token;
        if(!hasToken) {
            loginRedirect();
            return
        }
        yield put(setInitAppLoading(true))
        yield all([
            call(userInfoWorker),
            call(getCountryPhoneCodesWorker)
        ])

    } catch (e) {
        loginRedirect()
    }
    yield put(setInitAppLoading(false))
}

function* refreshTokenAsync() {
    yield instance().close().refresh()
}