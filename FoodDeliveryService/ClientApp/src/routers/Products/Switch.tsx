import React from "react";
import {Route, Switch} from "react-router-dom";
import {ROUTE_PATHS} from "../paths.main";
import {ProductsPageContainer} from "../../components/ProductsPage/ProductsPage";

export const ProductsSwitch: React.FC = () => (
    <Route exact={false}
           path={ROUTE_PATHS.products.path}>
        <Switch>
            <Route path={ROUTE_PATHS.products.path}
                   exact
                   component={() => <ProductsPageContainer />}/>
        </Switch>
    </Route>
)