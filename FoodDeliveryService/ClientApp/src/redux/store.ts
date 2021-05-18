import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {TEnumsReducer} from "./reducers/enums/types";
import {enumsReducer} from "./reducers/enums";
import {rootPageReducer} from "./reducers/rootPage";
import {TRootPageReducer} from "./reducers/rootPage/types";
import {authReducer} from "./reducers/auth";
import {TAuthReducer} from "./reducers/auth/types";
import {launchReducer, TLaunchReducer} from "./reducers/launch";
import {userReducer} from "./reducers/user";
import {TUserReducer} from "./reducers/user/types";
import {productsReducer} from "./reducers/products";
import {TProductsReducer} from "./reducers/products/types";
import {shopBasketReducer} from "./reducers/shopBasket";
import {TShopBasketReducer} from "./reducers/shopBasket/types";

const combinedReducers = combineReducers({
    launch: launchReducer,
    auth: authReducer,
    user: userReducer,
    rootPage: rootPageReducer,
    enums: enumsReducer,
    products: productsReducer,
    shopBasket: shopBasketReducer,
})

const store = createStore(combinedReducers,
    composeWithDevTools(applyMiddleware(thunk)))

export type TRootState = {
    launch: TLaunchReducer
    auth: TAuthReducer
    user: TUserReducer
    rootPage: TRootPageReducer
    enums: TEnumsReducer
    products: TProductsReducer
    shopBasket: TShopBasketReducer
}

export {store}