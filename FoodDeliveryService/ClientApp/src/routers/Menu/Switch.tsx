import React from "react";
import {Route, Switch} from "react-router-dom";
import {ROUTE_PATHS} from "../paths.main";
import {CatalogsPageContainer} from "../../components/CatalogsPage/CatalogsPage";
import {CatalogSwitch} from "./Catalog/Switch";

export const CatalogsSwitch: React.FC = () => (
    <Switch>
        <Route exact={false}
               path={ROUTE_PATHS.catalogs.path}>
            <Switch>
                <Route path={ROUTE_PATHS.catalogs.path}
                       exact
                       component={() => <CatalogsPageContainer/>}/>
            </Switch>
        </Route>
        <Route exact={false}
               path={ROUTE_PATHS.catalogs.catalog.catalog().path}
               component={CatalogSwitch}/>
    </Switch>
)