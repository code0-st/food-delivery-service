import React, {Suspense} from "react";
import {history} from "../index";
import {RootPageContainer} from "../components/RootPage/RootPage";
import {BrowserRouter, Redirect, Route, Router, Switch, withRouter} from "react-router-dom";
import {ROUTE_PATHS} from "./paths.main";
import {MainSwitch} from "./Main/Switch";
import {MenuSwitch} from "./Menu/Switch";
import {LoginPageContainer} from "../components/LoginPage/LoginPage";
import {TRootState} from "../redux/store";
import {connect} from "react-redux";
import {Loading} from "../components/common/Loading/Loading";
import {SignUpPageContainer} from "../components/LoginPage/SignUpPage";

const s = require('./styles.module.scss')

export const RouterIndex: React.FC<{ appLoading: boolean }> = ({
                                                                   appLoading
                                                               }) => {
    const Loader = (
        <div className={s.loading}>
            <Loading/>
        </div>
    )
    if (appLoading) {
        return Loader
    }
    return (
        <BrowserRouter>
            <Suspense fallback={Loader}>
                <Switch>
                    <Route exact
                           path={'/'}
                           render={() => <Redirect to={ROUTE_PATHS.main.main}/>}/>
                    <Route path={ROUTE_PATHS.login}
                           exact
                           component={LoginPageContainer}/>
                    <Route path={ROUTE_PATHS.signUp}
                           exact
                           component={SignUpPageContainer}/>
                    <RootPageContainer>
                        <MainSwitch/>
                        <MenuSwitch/>
                    </RootPageContainer>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

const mapStateToProps = (state: TRootState) => ({
    appLoading: state.launch.appLoading,
})
const mapDispatchToProps = {}
export const RouterIndexContainer = connect(mapStateToProps, mapDispatchToProps)(RouterIndex)
