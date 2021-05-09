import React from "react";
import {INavigationItem} from "../../../redux/globalTypes";
import {Link} from "react-router-dom";
import clsx from "clsx";

const s = require('./styles.module.scss')

interface INavigationProps {
    internalPages: INavigationItem[]
    setCurrentPage: (page: INavigationItem) => void
}

export const SimpleNavigation: React.FC<INavigationProps> = ({
                                                                 internalPages,
                                                                 setCurrentPage,
                                                             }) => {
    return (
        <div className={s.navigation}>
            {internalPages.map(item => (
                <Link to={item.link} key={item.id}>
                    <div className={clsx(s.navigation_item,
                        item.isCurrent && s.navigation_active)}
                         onClick={() => {
                             !item.isCurrent && setCurrentPage(item)
                         }}>{item.title}</div>
                </Link>
            ))}
        </div>
    )
}