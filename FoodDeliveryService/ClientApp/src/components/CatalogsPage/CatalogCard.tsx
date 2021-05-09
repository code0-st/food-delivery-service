import React from "react";
import {ICatalogCardProps} from "./types";
import {ImageIcon} from "../../icons/icons";
import {Button, Fade} from "reactstrap";

const s = require('./styles.module.scss')

export const CatalogCard: React.FC<ICatalogCardProps> = ({
                                                             catalog,
                                                             index,
                                                         }) => {
    return (
        <Fade in timeout={{enter: 20 * index, exit: 50}}>
            <div className={s.card}>
                <ImageIcon/>
                <div>{catalog.name}</div>
                <Button>Перейти!</Button>
            </div>
        </Fade>
    )
}