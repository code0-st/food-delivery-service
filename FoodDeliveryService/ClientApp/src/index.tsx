import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import registerServiceWorker from './registerServiceWorker';
import {App} from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/store";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
export const history = createBrowserHistory({basename: baseUrl});


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
