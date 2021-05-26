import React from "react";
import {CreateField} from "./CreateField";
const s = require('./styles.module.scss')

export const ContactsPage:React.FC = () => {
    return (
        <div className={s.content}>
            <CreateField label={'Имя'}><div>Чумаренко Кирилл</div></CreateField>
            <CreateField label={'Телефон'}><div>+7 (900) 278 87 97</div></CreateField>
            <CreateField label={'Github'}><div>code0_st</div></CreateField>
        </div>
    )
}