import React, {useState} from "react";
import {TRootState} from "../../redux/store";
import {loginAsync} from "../../redux/reducers/auth/actions";
import {connect} from "react-redux";
import {SimpleInput} from "../common/Fields/Inputs/SimpleInput";
import {CreateLogo} from "../common/IconedLabels/Logo";
import {SimpleButton} from "../common/Fields/Buttons/SimpleButton";
import {IRequestLogin} from "../../redux/reducers/auth/actions/types";
import {Link, withRouter} from "react-router-dom";
import {ROUTE_PATHS} from "../../routers/paths.main";

const s = require('./styles.module.scss')

interface ILoginPageProps {
    loginAsync: IRequestLogin
}

const LoginPage: React.FC<ILoginPageProps> = ({
                                                  loginAsync,
                                              }) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const loginHandler = () => {
        loginAsync({
            username,
            password,
        })
    }
    return (
        <div className={s.root}>
            <div className={s.form_field}>
                <CreateLogo/>
                <SimpleInput label={'Логин'}
                             value={username}
                             onChange={event => setUsername(event.target.value)}/>

                <SimpleInput label={'Пароль'}
                             value={password}
                             onChange={event => setPassword(event.target.value)}
                             type={'password'}/>
                <SimpleButton onClick={loginHandler}>
                    Войти
                </SimpleButton>
                <Link to={ROUTE_PATHS.signUp} className={s.sign_up}>
                    Зарегистрироваться
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {
    loginAsync
}

export const LoginPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage))