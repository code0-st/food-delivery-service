import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {TEnumsReducer} from "./reducers/enums/types";
import {enumsReducer} from "./reducers/enums";

const combinedReducers = combineReducers({
    enums: enumsReducer,
})

const store = createStore(combinedReducers,
    composeWithDevTools(applyMiddleware(thunk)))

export type TRootState = {
    enums: TEnumsReducer
}

export {store}