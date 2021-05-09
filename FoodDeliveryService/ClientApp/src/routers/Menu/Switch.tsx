import React from "react";
import {Route, Switch} from "react-router-dom";
import {ROUTE_PATHS} from "../paths.main";
import {CatalogsPageContainer} from "../../components/CatalogsPage/CatalogsPage";

export const MenuSwitch: React.FC = () => (
    <Route exact={false}
           path={ROUTE_PATHS.menu.main}>
        <Switch>
            <Route path={ROUTE_PATHS.menu.main}
                   exact
                   component={() => <CatalogsPageContainer />}/>
        </Switch>
    </Route>
)