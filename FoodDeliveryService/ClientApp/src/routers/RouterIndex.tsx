import React from "react";
import {Router} from "react-router";
import {history} from "../index";

export const RouterIndex:React.FC = () => (
    <Router history={history}>
        Hello world
    </Router>
)
