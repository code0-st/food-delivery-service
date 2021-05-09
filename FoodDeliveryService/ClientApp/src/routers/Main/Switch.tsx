import React from "react";
import {Route, Switch} from "react-router-dom";
import {ROUTE_PATHS} from "../paths.main";
import {ProductsPageContainer} from "../../components/ProductsPage/ProductsPage";

export const MainSwitch: React.FC = () => (
    <Route exact={false}
           path={ROUTE_PATHS.main.main}>
        <Switch>
            <Route path={ROUTE_PATHS.main.main}
                   exact
                   component={() => <ProductsPageContainer />}/>
        </Switch>
    </Route>
)