import React from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {IClientsPageProps} from "../types";
const s = require('../style.module.scss')

const ClientsPage:React.FC<IClientsPageProps> = ({}) => {
    return (
        <div className={s.worker_page}></div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {}

export const ClientsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ClientsPage)