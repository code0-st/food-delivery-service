import React from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {IWorkersPageProps} from "../types";

const s = require('../style.module.scss')

const WorkersPage: React.FC<IWorkersPageProps> = ({}) => {
    return (
        <div className={s.worker_page}></div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {}

export const WorkersPageContainer = connect(mapStateToProps, mapDispatchToProps)(WorkersPage)