import React from "react";
import {Router} from "react-router";
import {history} from "../index";
import {CatalogsPageContainer} from "../components/CatalogsPage/CatalogsPage";

export const RouterIndex:React.FC = () => (
    <Router history={history}>
        <CatalogsPageContainer />
    </Router>
)
