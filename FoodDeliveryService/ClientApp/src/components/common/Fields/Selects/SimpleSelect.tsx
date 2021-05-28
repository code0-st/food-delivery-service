import React from "react";
import {TEnumItem} from "../../../../redux/reducers/enums/types.data";
import {MenuItem, Select} from "@material-ui/core";
import clsx from "clsx";

const s = require('./style.module.scss')

interface ISimpleSelectProps {
    items: TEnumItem[]
    value: any
    onChange: any
    size?: 'lg' | 'md' | 'xs'

    [key: string]: any
}

export const SimpleSelect: React.FC<ISimpleSelectProps> = ({
                                                               items,
                                                               value,
                                                               onChange,
                                                               size = 'lg',
                                                               ...props
                                                           }) => {
    const classes = clsx(
        s.simple_select,
        size === 'lg' && s.lg,
        size === 'md' && s.md,
        size === 'xs' && s.xs,
    )
    return (
        <Select value={value}
                className={classes}
                onChange={event => onChange(event.target.value)} {...props}>
            {items.map(item => <MenuItem value={item.id}>{item.name}</MenuItem>)}
        </Select>
    )
}