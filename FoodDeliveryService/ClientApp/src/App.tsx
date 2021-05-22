import './custom.css'
import React from "react";
import {RouterIndexContainer} from "./routers/RouterIndex";
import {Provider, useDispatch} from "react-redux";
import {store} from "./redux/store";
import {initAppWorker} from "./redux/reducers/launch/actions";
import {getUserId, getUserRole} from "./helpers/helpers";

export const App: React.FC = ({}) => {
    const dispatch = useDispatch()
    dispatch(initAppWorker(getUserId(), getUserRole()))
    return (
        <Provider store={store}>
            <RouterIndexContainer />
        </Provider>
    )
}
