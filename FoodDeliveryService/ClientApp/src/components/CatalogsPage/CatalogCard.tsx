import React from "react";
import {ICatalogCardProps} from "./types";
import {ImageIcon} from "../../icons/icons";
import {Button, Fade} from "reactstrap";
import {Link} from "react-router-dom";
import {ROUTE_PATHS} from "../../routers/paths.main";

const s = require('./styles.module.scss')

export const CatalogCard: React.FC<ICatalogCardProps> = ({
                                                             catalog,
                                                             index,
                                                         }) => {
    return (
        <Fade in timeout={{enter: 20 * index, exit: 50}}>
            <Link to={ROUTE_PATHS.catalogs.catalog.catalog(catalog.id).path}>
                <div className={s.card}>
                    <ImageIcon/>
                    <div>{catalog.name}</div>
                    <Button>Перейти!</Button>
                </div>
            </Link>
        </Fade>
    )
}