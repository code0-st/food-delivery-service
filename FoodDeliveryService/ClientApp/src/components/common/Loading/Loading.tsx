import React from "react";
import {Spinner} from "reactstrap";

const s = require('./styles.module.scss')

export const Loading: React.FC = () => {
    return (
        <div className={s.loading}>
            <Spinner type={'grow'} color={'warning'}/>
            <Spinner type={'grow'} color={'warning'}/>
            <Spinner type={'grow'} color={'warning'}/>
        </div>
    )
}