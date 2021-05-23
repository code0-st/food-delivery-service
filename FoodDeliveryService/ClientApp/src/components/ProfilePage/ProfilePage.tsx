import React from "react";
import {TRootState} from "../../redux/store";
import {connect} from "react-redux";

const s = require('./styles.module.scss')

interface IProfilePageProps {
}

const ProfilePage: React.FC<IProfilePageProps> = ({
                                                      children,
                                                  }) => {
    return (
        <div className={s.content}>
            {children}
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {}

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage)