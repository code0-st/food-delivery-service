import './custom.css'
import React from "react";
import {RouterIndexContainer} from "./routers/RouterIndex";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {initApp} from "./redux/reducers/launch/actions/actions";

export const App: React.FC = ({}) => {
    store.dispatch(initApp())
    return (
        <Provider store={store}>
            <RouterIndexContainer />
        </Provider>
    )
}
