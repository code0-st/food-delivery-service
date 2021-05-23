import React from "react";
import {Link} from "react-router-dom";
import {ROUTE_PATHS} from "../../../routers/paths.main";
import {UserIcon} from "../../../icons/icons";

const s = require('./styles.module.scss')

export const ProfileLink: React.FC<{ userName: string }> = ({
                                                                userName = "test_man"
                                                            }) => {
    return (
        <Link to={ROUTE_PATHS.profile.path}>
            <div className={s.label_iconed}>
                <UserIcon/>
                {userName}
            </div>
        </Link>
    )
}