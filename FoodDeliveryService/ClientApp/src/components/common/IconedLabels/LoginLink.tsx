import React from "react";
import {Link} from "react-router-dom";
import {ROUTE_PATHS} from "../../../routers/paths.main";
import {LoginIcon} from "../../../icons/icons";
const s = require('./styles.module.scss')

export const LoginLink:React.FC = () => {
    return (
        <Link to={ROUTE_PATHS.login}>
            <div className={s.label_iconed}>
                <LoginIcon />
                Личный кабинет
            </div>
        </Link>
    )
}