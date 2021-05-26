import React from "react";
import {ExitIcon} from "../../../icons/icons";
import {saveUserId, saveUserRole} from "../../../helpers/helpers";
import {keys} from "../../../redux/api/keys";
import {connect, useDispatch} from "react-redux";
import {initAppWorker} from "../../../redux/reducers/launch/actions";
import {history} from "../../../index";
import {TRootState} from "../../../redux/store";
import {setUserInfo} from "../../../redux/reducers/user/actions/actions";
import {ISetUserInfo} from "../../../redux/reducers/user/actions/types";

const s = require('./styles.module.scss')

interface ICreateExitProps {
    setUserInfo: ISetUserInfo
}

export const CreateExit: React.FC<ICreateExitProps> = ({
                                                           setUserInfo,
                                                       }) => {
    const dispatch = useDispatch()
    const main = keys.main
    return (
        <div className={s.exit} onClick={() => {
            saveUserRole('client')
            saveUserId('')
            localStorage.setItem(main, '')
            setUserInfo(null)
            dispatch(initAppWorker(null, null))
        }}>
            <ExitIcon/>
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {
    setUserInfo
}
export const CreateExitContainer = connect(mapStateToProps, mapDispatchToProps)(CreateExit)