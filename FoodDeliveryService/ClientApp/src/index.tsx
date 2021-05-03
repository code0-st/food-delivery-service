import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import registerServiceWorker from './registerServiceWorker';
import {App} from "./App";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
export const history = createBrowserHistory({basename: baseUrl});


ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
