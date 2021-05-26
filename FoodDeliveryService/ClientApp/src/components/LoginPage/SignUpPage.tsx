import React, {useEffect, useState} from "react";
import {TRootState} from "../../redux/store";
import {connect} from "react-redux";
import {SimpleInput} from "../common/Fields/Inputs/SimpleInput";
import {CreateLogo} from "../common/IconedLabels/Logo";
import {SimpleButton} from "../common/Fields/Buttons/SimpleButton";
import {formatPhone} from "../../utils/utils";
import {createClientAsync} from "../../redux/reducers/user/actions";
import {ICreateClient} from "../../redux/reducers/user/actions/types";

const s = require('./styles.module.scss')

interface ISignUpPageProps {
    createUserLoading: boolean,
    createClientAsync: ICreateClient
}

const SignUpPage: React.FC<ISignUpPageProps> = ({
                                                    createClientAsync,
                                                    createUserLoading,
                                                }) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [patronymic, setPatronymic] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [retypePassword, setRetypePassword] = useState<string>('')

    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (password && retypePassword) {
            setError(password !== retypePassword)
        }
    }, [password, retypePassword])
    const createClientHandler = () => {
        createClientAsync({
            password,
            firstName,
            address,
            lastName,
            patronymic,
            phone,
            userName: username,
            userRole: "client",
        })
    }
    return (
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
                </div>
                <div className={s.row}>
                    <SimpleInput label={'Отчество'}
                                 value={patronymic}
                                 onChange={event => setPatronymic(event.target.value)}/>
                    <SimpleInput label={'Телефон'}
                                 value={phone}
                                 onChange={event => setPhone(formatPhone(event.target.value))}
                                 error={!phone.length}/>
                </div>
                <SimpleInput label={'Адрес'}
                             value={address}
                             onChange={event => setAddress(event.target.value)}/>
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
                <SimpleButton onClick={createClientHandler}
                              loading={createUserLoading}>
                    Создать !
                </SimpleButton>
            </div>
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({
    createUserLoading: state.user.loadings.createUserLoading
})
const mapDispatchToProps = {
    createClientAsync,
}

export const SignUpPageContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpPage)