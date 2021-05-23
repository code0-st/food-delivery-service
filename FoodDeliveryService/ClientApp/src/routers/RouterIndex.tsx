import React, {Suspense} from "react";
import {RootPageContainer} from "../components/RootPage/RootPage";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ROUTE_PATHS} from "./paths.main";
import {CatalogsSwitch} from "./Menu/Switch";
import {LoginPageContainer} from "../components/LoginPage/LoginPage";
import {TRootState} from "../redux/store";
import {connect} from "react-redux";
import {Loading} from "../components/common/Loading/Loading";
import {SignUpPageContainer} from "../components/LoginPage/SignUpPage";
import {ContactsPage} from "../components/ContactsPage/ContactsPage";
import {ProductsSwitch} from "./Products/Switch";
import {ProfileSwitch} from "./Profile/Switch";

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
                           render={() => <Redirect to={ROUTE_PATHS.products.path}/>}/>
                    <Route path={ROUTE_PATHS.login}
                           exact
                           component={LoginPageContainer}/>
                    <Route path={ROUTE_PATHS.signUp}
                           exact
                           component={SignUpPageContainer}/>
                    <RootPageContainer>
                        <ProductsSwitch/>
                        <CatalogsSwitch/>
                        <Route exact
                               path={ROUTE_PATHS.contacts}
                               component={ContactsPage}/>
                        <ProfileSwitch/>
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
