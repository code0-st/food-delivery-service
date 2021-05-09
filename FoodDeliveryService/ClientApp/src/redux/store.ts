import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {TEnumsReducer} from "./reducers/enums/types";
import {enumsReducer} from "./reducers/enums";
import {rootPageReducer} from "./reducers/rootPage";
import {TRootPageReducer} from "./reducers/rootPage/types";

const combinedReducers = combineReducers({
    rootPage: rootPageReducer,
    enums: enumsReducer,
})

const store = createStore(combinedReducers,
    composeWithDevTools(applyMiddleware(thunk)))

export type TRootState = {
    rootPage: TRootPageReducer
    enums: TEnumsReducer
}

export {store}