import React from "react";
import {Route, Switch} from "react-router";
import {ProductsPageContainer} from "../../../components/ProductsPage/ProductsPage";
import {catalogPaths} from "./paths";

export const CatalogSwitch = () => {
    return (
        <Switch>
            <Route exact
                   path={catalogPaths.catalog().path}
                   component={ProductsPageContainer}/>
        </Switch>
    )
}