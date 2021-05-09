import React from "react";
import {HamburgerIcon} from "../../../icons/icons";

const s = require('./styles.module.scss')

export const CreateLogo: React.FC = () => {
    return (
        <div className={s.logo}>
            <HamburgerIcon/>
            <div>FOOD_SERVICE</div>
        </div>
    )
}