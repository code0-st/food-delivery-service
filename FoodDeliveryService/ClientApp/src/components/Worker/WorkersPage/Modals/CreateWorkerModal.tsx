import React, {useEffect, useState} from "react";
import {Dialog} from "@material-ui/core";
import {TRootState} from "../../../../redux/store";
import {connect} from "react-redux";
import {createWorkerAsync} from "../../../../redux/reducers/user/actions";
import {ICreateWorker} from "../../../../redux/reducers/user/actions/types";
import {TEnumItem} from "../../../../redux/reducers/enums/types.data";
import {CreateLogo} from "../../../common/IconedLabels/Logo";
import {SimpleInput} from "../../../common/Fields/Inputs/SimpleInput";
import {formatPhone} from "../../../../utils/utils";
import {SimpleButton} from "../../../common/Fields/Buttons/SimpleButton";
import {SimpleSelect} from "../../../common/Fields/Selects/SimpleSelect";

const s = require('./style.module.scss')

interface ICreateWorkerModalProps {
    open: boolean,
    closeHandler: () => void,
    createWorkerAsync: ICreateWorker
    departments: TEnumItem[]
    positions: TEnumItem[]
    createUserLoading: boolean
}

const CreateWorkerModal: React.FC<ICreateWorkerModalProps> = ({
                                                                  open,
                                                                  closeHandler,
                                                                  createWorkerAsync,
                                                                  departments,
                                                                  positions,
                                                                  createUserLoading,
                                                              }) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [patronymic, setPatronymic] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [retypePassword, setRetypePassword] = useState<string>('')
    const [selectedDepartmentId, setSelectedDepartmentId] = useState<number | null>(null)
    const [selectedPositionId, setSelectedPositionId] = useState<number | null>(null)

    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (password && retypePassword) {
            setError(password !== retypePassword)
        }
    }, [password, retypePassword])

    const createWorkerHandler = () => {
        if (selectedDepartmentId && selectedPositionId) {
            createWorkerAsync({
                password,
                patronymic,
                userName: username,
                userRole: "worker",
                phone,
                lastName,
                departmentId: selectedDepartmentId,
                firstName,
                positionId: selectedPositionId,
            })
        }
    }
    return (
        <Dialog open={open} onClose={closeHandler}>
            <div className={s.root}>
                <div className={s.form_field}>
                    <div className={s.logo}>
                        <CreateLogo/>
                    </div>
                    <div className={s.row}>
                        <SimpleInput label={'Фамилия'}
                                     value={lastName}
                                     onChange={event => setLastName(event.target.value)}/>
                        <SimpleInput label={'Имя'}
                                     value={firstName}
                                     onChange={event => setFirstName(event.target.value)}
                                     error={!firstName}/>
                        <SimpleInput label={'Отчество'}
                                     value={patronymic}
                                     onChange={event => setPatronymic(event.target.value)}/>
                    </div>
                    <div className={s.row}>
                        <SimpleInput label={'Телефон'}
                                     value={phone}
                                     onChange={event => setPhone(formatPhone(event.target.value))}
                                     error={!phone.length}/>
                    </div>
                    <div className={s.row}>
                        <SimpleSelect label={'Отдел'}
                                      items={departments}
                                      value={selectedDepartmentId}
                                      onChange={setSelectedDepartmentId}/>
                        <SimpleSelect label={'Должность'}
                                      items={positions}
                                      value={selectedPositionId}
                                      onChange={setSelectedPositionId}/>
                    </div>
                    <SimpleInput label={'Логин'}
                                 value={username}
                                 onChange={event => setUsername(event.target.value)}
                                 error={username.length < 2}/>
                    <SimpleInput label={'Пароль'}
                                 value={password}
                                 onChange={event => setPassword(event.target.value)}
                                 type={'password'}
                                 error={password.length < 5}/>
                    <SimpleInput label={'Повторите пароль'}
                                 value={retypePassword}
                                 onChange={event => setRetypePassword(event.target.value)}
                                 type={'password'}
                                 error={error}/>
                    <SimpleButton onClick={createWorkerHandler}
                                  loading={createUserLoading}>
                        Создать !
                    </SimpleButton>
                </div>
            </div>
        </Dialog>
    )
}

const mapStateToProps = (state: TRootState) => ({
    departments: state.enums.departments,
    positions: state.enums.positions,
    createUserLoading: state.user.loadings.createUserLoading
})
const mapDispatchToProps = {
    createWorkerAsync
}

export const CreateWorkerModalContainer = connect(mapStateToProps, mapDispatchToProps)(CreateWorkerModal)