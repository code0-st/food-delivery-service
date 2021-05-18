import React from "react";
import {Button} from "@material-ui/core";
import clsx from "clsx";

const s = require('./styles.module.scss')

interface ISimpleButtonProps {
    onClick: any

    [key: string]: any
}

export const SimpleButton: React.FC<ISimpleButtonProps> = ({
                                                               onClick,
                                                               children,
                                                               ...props
                                                           }) => {
    const classes = clsx (
        s.button,
        props.disabled && s.disabled,
    )
    return <Button onClick={onClick}
                   className={classes}
                   {...props}>{children}</Button>

}