import React from "react";

const s = require('./styles.module.scss')

interface ICreateFieldProps {
    label: string
}

export const CreateField: React.FC<ICreateFieldProps> = ({
                                                             label,
                                                             children
                                                         }) => {
    return (
        <div className={s.row}>
            <div className={s.row_label}>{label}</div>
            <div className={s.row_children}>{children}</div>
        </div>
    )
}