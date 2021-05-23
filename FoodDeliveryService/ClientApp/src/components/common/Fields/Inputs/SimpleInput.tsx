import React from 'react'
import clsx from "clsx";
import {TextField} from "@material-ui/core";

const s = require('./styles.module.scss')

interface ISimpleInputProps {
    label: string
    value: string
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    size?: 'lg' | 'md' | 'xs'
    fieldProps?: any

    [key: string]: any
}

export const SimpleInput: React.FC<ISimpleInputProps> = ({
                                                             value,
                                                             onChange,
                                                             label,
                                                             size = 'lg',
                                                             fieldProps,
                                                             ...props
                                                         }) => {
    const classes = clsx(
        s.simple_input,
        size === 'lg' && s.lg,
        size === 'md' && s.md,
        size === 'xs' && s.xs,
    )
    return (
        <TextField value={value}
                   onChange={onChange}
                   label={label}
                   className={classes}
                   {...props}/>

    )
}