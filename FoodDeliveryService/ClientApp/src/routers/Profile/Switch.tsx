import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {ROUTE_PATHS} from "../paths.main";
import {ProfilePageContainer} from "../../components/ProfilePage/ProfilePage";
import {OrdersContainer} from "../../components/ProfilePage/Orders/Orders";

export const ProfileSwitch = () => {
    return (
        <Route exact={false}
               path={ROUTE_PATHS.profile.path}>
            <ProfilePageContainer>
                <Switch>
                    <Route exact={true}
                           path={ROUTE_PATHS.profile.path}
                           component={() => <Redirect to={ROUTE_PATHS.profile.orders}/>}/>
                    <Route exact={true}
                           path={ROUTE_PATHS.profile.orders}
                           component={OrdersContainer}/>
                </Switch>
            </ProfilePageContainer>
        </Route>
    )
}