import React from "react";
import {history} from "../index";
import {RootPageContainer} from "../components/RootPage/RootPage";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {ROUTE_PATHS} from "./paths.main";
import {MainSwitch} from "./Main/Switch";
import {MenuSwitch} from "./Menu/Switch";

export const RouterIndex: React.FC = () => (
    <Router history={history}>
        <Switch>
            <Route exact
                   path={'/'}
                   component={() => <Redirect to={ROUTE_PATHS.main.main}/>}/>
            <Route exact
                   path={ROUTE_PATHS.login}
                   component={() => <div>Логин</div>}/>
            <RootPageContainer>
                <MainSwitch/>
                <MenuSwitch/>
            </RootPageContainer>
        </Switch>
    </Router>
)
